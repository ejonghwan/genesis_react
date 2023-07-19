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
