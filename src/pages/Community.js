import { Fragment, useState, useRef, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Visual from '../components/sub/Visual';


const Community = () => {

	const getLocalData = () => {
		const data = localStorage.getItem('post');
		return data ? JSON.parse(data) : initalPosts;
	}

	const randomId = e => Math.floor(Math.random() * 10000);
	const initalPosts = [
		{ id: randomId(), title: 'Quisquam reiciendis', content: 'Quisquam reiciendis cumque iusto eius quo modi dolorum eveniet quos, qui explicabo nemo in molestiae totam, ullam quod.', done: false, modify: false },
		{ id: randomId(), title: 'Earum suscipit quo', content: 'Earum suscipit quo consequuntur inventore nihil corrupti quas necessitatibus ipsum itaque iste eum, libero dolores nemo laborum at fugit consectetur veniam tempora aliquam sequi natus aut.', done: false, modify: false },
		{ id: randomId(), title: 'adipisicing elit. ', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ', done: false, modify: false },
		{ id: randomId(), title: 'Sit autem, temporibus aliquid ipsam', content: 'Sit autem, temporibus aliquid ipsam beatae ab vero quam similique sunt repellendus libero rem illum, optio, accusantium inventore deleniti nihil fuga iusto! Dolorem deleniti iure recusandae culpa atque molestiae consequuntur ducimus repellendus temporibus, eius esse neque. Cupiditate vel eos dolor!', done: false, modify: false },
		{ id: randomId(), title: 'Sunt debitis itaque iste voluptates,', content: 'Sunt debitis itaque iste voluptates, tempora corporis ratione tenetur magni provident similique ut sequi unde neque harum quos rerum eaque tempore! Consequatur dolor molestias similique ', done: false, modify: false },
		{ id: randomId(), title: 'Laborum, similique.', content: 'Laborum, similique. Nam tempore, at ducimus iste neque exercitationem porro commodi! Illo, cumque aspernatur quos quaerat ipsam nisi quisquam ducimus eos laboriosam ex veritatis magnam itaque sapiente ea qui, iste molestiae porro nam non fugit? ', done: false, modify: false },
	]
	const [Posts, setPosts] = useState(getLocalData());
	const [Modify, setModify] = useState(false);
	const [ModiValue, setModiValue] = useState({ title: '', content: '' });


	const inputRef = useRef(null);
	const textareaRef = useRef(null)

	
	const resetForm = () => {
		inputRef.current.value = '';
		textareaRef.current.value = '';
	}

	const statePost = id => {
		return () => {
			const stateChange = Posts.map(item => id === item.id ? { ...item, done: !item.done } : item)
			setPosts(stateChange)
		}
	}

	const createPost = () => {
		if(!inputRef.current.value.trim() || !textareaRef.current.value.trim()){
			return alert('본문과 제목을 모두 입력해주세요')
		}
		setPosts([{ id: randomId(), title: inputRef.current.value, content: textareaRef.current.value, done: false, }, ...Posts]);
		resetForm();
		
	}

	const enablePost = id => {
		return () => {
			if(Modify) return;
			const update = Posts.map(item => id === item.id ? {...item, modify: true} : item);
			setModiValue(prev => ({ ...prev, title: Posts.filter(item => item.id === id )[0].title}) );
			setModiValue(prev => ({ ...prev, content: Posts.filter(item => item.id === id )[0].content }) );
			setPosts(update)
			setModify(true)
		}
	}

	const updatePostCancel = id => {
		return () => {
			const update = Posts.map(item => id === item.id ? {...item, modify: false} : item);
			setPosts(update)
			setModify(false)
		}
	}

	const updatePost = id => {
		return () => {
			const update = Posts.map(item => id === item.id ? {...item, title: ModiValue.title, content: ModiValue.content, modify: false} : item);
			setPosts(update)
			setModify(false)
		}
	}

	const deletePost = id => {
		return () => {
			if( window.confirm('해당 게시물을 삭제할까요 ?') ) {
				const delPost = Posts.filter(item => id !== item.id)
				setPosts(delPost)
			}
		}
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setModiValue({...ModiValue, [name]: value})
	}

	useEffect(() => {
		localStorage.setItem('post', JSON.stringify(Posts))
		
	}, [Posts])

	return (
		<Fragment>
			<Visual name={'community'} />
			<Layout name={'community sub_page'}>
				<div className='g_inner'>
					<div className='inputBox'>
						<h2 className='g_title'>방명록</h2>
						<ul className='list'>
							{Posts.map((item, idx) => {
								return (
									<li className={`list_item ${item.done && "active" }`} key={item.id}>

										{
											item.modify ? (
												<div>
													<div><input type="text" value={ModiValue.title} name="title" onChange={handleChange} /></div>
													<div><input type="text" value={ModiValue.content} name="content" onChange={handleChange} /></div>
												</div>
											) : (
												<div>
													<strong className='list_tit'>{item.title}</strong>
													<p className='list_conts'>{item.content}</p>
												</div>
											)
										}
										{
											item.modify ? (
												<div className='btn_wrap align_r'>
													<button type="button" className='canc btn gray'  onClick={updatePostCancel(item.id)}>취소</button>
													<button type="button" className='comp btn gray' onClick={updatePost(item.id)}>완료</button>
												</div>
											) : (
												<div className='btn_wrap align_r'>
													<button type="button" className='modi btn gray' onClick={enablePost(item.id)}>수정</button>
													<button type="button" className='del btn gray' onClick={deletePost(item.id)}>삭제</button>
												</div>
											)
										}
									</li>
								)
							})}
						</ul>
					</div>
				</div>
				<div className='g_inner'>
					<h2 className='g_title'>방명록 작성</h2>
					<div className='write_wrap'>
						<div className='input_wrap'>
							<label htmlFor="in_title"><strong>제목</strong></label>
							<input type="text" id="in_title" placeholder="제목을 입력해주세요" ref={inputRef} />
						</div>
						<div className="input_wrap">
							<label htmlFor="in_content"><strong>내용</strong></label>
							<textarea id="in_content" cols="30" rows="3" placeholder="내용을 입력해주세요" ref={textareaRef} />
						</div>
						<div className='btn_wrap align_c'>
							<button className='btn blue' type="button" onClick={createPost}>글쓰기</button>
						</div>
					</div>
				</div>
			</Layout>
		</Fragment>
	)
}

export default Community;