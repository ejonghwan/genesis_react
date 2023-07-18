import { Fragment, useState, useRef, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Visual from '../components/sub/Visual';

import { useSelector, useDispatch } from 'react-redux';

const Community = () => {
	const dispatch = useDispatch();
	const { comm, loading } = useSelector(state => state.commReducer)

	// const getLocalData = () => {
	// 	const data = localStorage.getItem('post');
	// 	console.log(data)
	// 	return data ? JSON.parse(data) : comm;
	// }

	const randomId = e => Math.floor(Math.random() * 10000);
	// const initalPosts = [
	// 	{ id: randomId(), title: 'a0', content: 'b0', done: false, modify: false },
	// 	{ id: randomId(), title: 'a1', content: 'b1', done: false, modify: false },
	// 	{ id: randomId(), title: 'a2', content: 'b2', done: false, modify: false },
	// 	{ id: randomId(), title: 'a3', content: 'b3', done: false, modify: false },
	// 	{ id: randomId(), title: 'a4', content: 'b4', done: false, modify: false },
	// 	{ id: randomId(), title: 'a5', content: 'b5', done: false, modify: false },
	// ]
	// const [Posts, setPosts] = useState(getLocalData());
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
			// const stateChange = Posts.map(item => id === item.id ? { ...item, done: !item.done } : item)
			// setPosts(stateChange)
		}
	}

	const createPost = () => {
		if(!inputRef.current.value.trim() || !textareaRef.current.value.trim()){
			return alert('본문과 제목을 모두 입력해주세요')
		}
		dispatch({ type: "COMM_ADD_REQUEST", payload: { id: randomId(), title: inputRef.current.value, content: textareaRef.current.value, done: false, modify: false } })
		// setPosts([{ id: randomId(), title: inputRef.current.value, content: textareaRef.current.value, done: false, }, ...Posts]);
		resetForm();
	}

	const enablePost = id => {
		return () => {
			// if(Modify) return;
			// const update = comm.map(item => id === item.id ? {...item, modify: true} : item);
			// setModiValue(prev => ({ ...prev, title: Posts.filter(item => item.id === id )[0].title}) );
			// setModiValue(prev => ({ ...prev, content: Posts.filter(item => item.id === id )[0].content }) );
			// setPosts(update)
			console.log('enable')
			setModify(true)
		}
	}

	const updatePostCancel = id => {
		return () => {
			console.log('cansel')
			// const update = Posts.map(item => id === item.id ? {...item, modify: false} : item);
			// setPosts(update)
			setModify(false)
		}
	}

	const updatePost = id => {
		return () => {
			console.log('update')
			// const update = Posts.map(item => id === item.id ? {...item, title: ModiValue.title, content: ModiValue.content, modify: false} : item);
			// setPosts(update)
			setModify(false)
		}
	}

	const deletePost = id => {
		return () => {
			console.log('del')
			// if( window.confirm('해당 게시물을 삭제할까요 ?') ) {
			// 	const delPost = Posts.filter(item => id !== item.id)
			// 	setPosts(delPost)
			// }
		}
	}

	const handleChange = e => {
		const { name, value } = e.target;
		setModiValue({...ModiValue, [name]: value})
	}

	useEffect(() => {
		
		dispatch({ type: "COMM_LOAD_REQUEST", payload: comm })
		// localStorage.setItem('post', JSON.stringify([ ...comm ]) );

		console.log('comm?', comm)
		
		// localStorage.setItem('post', JSON.stringify([{ id: 123123123, title: 'local', content: 'local', done: false, modify: false  }, { id: 123123, title: 'local2', content: 'local2', done: false, modify: false  }]))
	}, [])

	return (
		<Fragment>
			<Visual name={'community'} />
			<Layout name={'community sub_page'}>
				<div className='g_inner'>
					<div className='inputBox'>

						<ul className='list'>
							{comm.map((item, idx) => {
								return (
									<li className={`list_item ${item.done && "active" }`} key={item.id}>

										{
											item.modify ? (
												<div>
													<div>제목: <input type="text" value={ModiValue.title} name="title" onChange={handleChange} /></div>
													<div>본문: <input type="text" value={ModiValue.content} name="content" onChange={handleChange} /></div>
												</div>
											) : (
												<div>
													<strong>제목: {item.title}</strong>
													<p>본문: {item.content}</p>
												</div>
											)
										}
										
										
										{
											item.modify ? (
												<div>
													<button type="button" onClick={updatePostCancel(item.id)}>취소</button>
													<button type="button" onClick={updatePost(item.id)}>완료</button>
												</div>
											) : (
												<div>
													<button type="button" onClick={deletePost(item.id)}>삭제</button>
													<button type="button" onClick={enablePost(item.id)}>수정</button>
													<button type="button" onClick={statePost(item.id)}>완료</button>
												</div>
											)
										}
									</li>
								)
							})}
						</ul>

						<input type="text" placeholder="제목을 입력해주세요" ref={inputRef} /> <br />
						<textarea cols="30" rows="3" placeholder="본문을 입력해주세요" ref={textareaRef} />
						
						<button type="button">cancel</button>
						<button type="button" onClick={createPost}>write</button>
					</div>
				</div>
			</Layout>
		</Fragment>
	)
}

export default Community;
