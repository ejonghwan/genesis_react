import { Fragment, useState, useRef, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Visual from '../components/sub/Visual';

import { useSelector, useDispatch } from 'react-redux';

const Community = () => {
	const dispatch = useDispatch();
	const { comm, loading } = useSelector(state => state.commReducer)

	const randomId = e => Math.floor(Math.random() * 10000);
	const [Modify, setModify] = useState(false);
	const [ModiValue, setModiValue] = useState({ title: '', content: '' });

	const inputRef = useRef(null);
	const textareaRef = useRef(null)

	const resetForm = () => {
		inputRef.current.value = '';
		textareaRef.current.value = '';
	}

	const createPost = () => {
		if(!inputRef.current.value.trim() || !textareaRef.current.value.trim()){
			return alert('본문과 제목을 모두 입력해주세요')
		}
		dispatch({ type: "COMM_ADD_REQUEST", payload: { id: randomId(), title: inputRef.current.value, content: textareaRef.current.value, done: false, modify: false } })
		resetForm()
	}

	const enablePost = id => () => {
			if(Modify) return;
			dispatch({ type: "COMM_EDIT_REQUEST", payload: { id } })
			setModiValue(prev => ({ ...prev, title: comm.filter(item => item.id === id )[0].title}) );
			setModiValue(prev => ({ ...prev, content: comm.filter(item => item.id === id )[0].content }) );
			setModify(true)
		}


	const updatePostCancel = id => () => {
			dispatch({ type: "COMM_CANCEL_REQUEST", payload: { id } })
			setModify(false)
		}

	const updatePost = id => () => {
			console.log('update')
			dispatch({ type: "COMM_UPDATE_REQUEST", payload: { id, title: ModiValue.title, content: ModiValue.content, comm } })
			setModify(false)
		}
	

	const deletePost = id => () => {
			if( window.confirm('해당 게시물을 삭제할까요 ?') ) {
				dispatch({ type: "COMM_DELETE_REQUEST", payload: { id, comm } })

			}
		}

	const handleChange = e => {
		const { name, value } = e.target;
		setModiValue({...ModiValue, [name]: value})
	}

	useEffect(() => {
		dispatch({ type: "COMM_LOAD_REQUEST", payload: comm })
	}, [dispatch])


	return (
		<Fragment>
			<Visual name={'community'} />
			<Layout name={'community sub_page'}>
				<div className='g_inner'>
					<h2 className='g_title'>방명록</h2>
					<div className='inputBox'>

						<ul className='list'>
							{comm.map((item, idx) => {
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
