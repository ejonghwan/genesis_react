import { Fragment, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from 'react-redux';


import Layout from '../components/common/Layout';
import Loading from '../components/common/loading/Loading';
import Modal from '../components/common/Modal';
import Visual from '../components/sub/Visual';




const Gallery = () => {

	const { gallery, loading } = useSelector(state => state.galleryReducer);
	const dispatch = useDispatch();

	const [Search, setSearch] = useState('');
	const [Gallery, setGallery] = useState({ select: 'user' })
	const [ImgIndex, setImgIndex] = useState(0)
	const wrapRef = useRef(null);;
	const isUserRef = useRef(null);
	const modal = useRef(null);

	const handlePopOpen = idx => e => {
		setImgIndex(idx)
		modal.current?.open()()
	}

	const handleUserGall = e => dispatch({ type: 'GALLERY_SEARCH_REQUEST', payload: { key: '034beefa27c4791e6e792d0e7e8d6873', num: 50, tags: 'landscape' } })
	const handleGeneGall = e => dispatch({ type: 'GALLERY_USER_REQUEST', payload: { key: '034beefa27c4791e6e792d0e7e8d6873', num: 50, userId: '191030940@N02' } })

	const handleSelectUser = userId => e => {
		if(userId === isUserRef.current) return alert('이미 검색한 유저입니다')
		dispatch({ type: 'GALLERY_USER_REQUEST', payload: { key: '034beefa27c4791e6e792d0e7e8d6873', num: 50, userId } })
		isUserRef.current = userId;
	}
	
	const handleCheck = e => {
		const { name, value } = e.target;
		setGallery({ [name]: value })
	};

	const handleSearch = e => {
		if(Search === '') return alert('검색어를 입력해주세요')
		dispatch({ type: 'GALLERY_SEARCH_REQUEST', payload: { key: '034beefa27c4791e6e792d0e7e8d6873', num: 50, tags: Search } })
	}

	const handleSearchChange = e => {
		const { value } = e.target;
		setSearch(value)
	}

	useEffect(() => {
		dispatch({ type: 'GALLERY_LOAD_REQUEST', payload: { key: '034beefa27c4791e6e792d0e7e8d6873', num: 50 } })
	}, [dispatch])

	useEffect(() => {
		wrapRef.current.classList.add('on')
	}, [wrapRef, gallery])




	return (
		<Fragment>
			<Visual name={'gallery'} />
			<Layout name={'gallery sub_page'}>

				<div className="g_inner">
					<div className="searchBox">
						<input type="text" id="search" placeholder="제네시스를 입력해보세요" onChange={handleSearchChange} onKeyPress={e => e.key === 'Enter' && handleSearch()}/>
						<button className="btnSearch" onClick={handleSearch}>
							<FontAwesomeIcon icon={faMagnifyingGlass} />
							<span className='blind'>검색</span>
						</button>
					</div>

					<div className="btnSet">
						<fieldset>
							<input id="btnInterest" className="btnInterest" value="user" type="radio" name="select" checked={Gallery["select"] === "user"} onChange={handleCheck} />
							<label htmlFor="btnInterest" onClick={handleUserGall}>User Gallery</label>
							<input id="btnMine" className="btnMine" value="genesis" type="radio" name="select" checked={Gallery["select"] === "genesis"} onChange={handleCheck} />
							<label htmlFor="btnMine" onClick={handleGeneGall}>Genesis Gallery</label>
						</fieldset>
					</div>

					
						{loading ? ( 
							<Loading /> 
							) : (
							<ul className='wrap' ref={wrapRef}> 
								<Masonry elementType={'div'} options={ {transitionDuration: ".5s"} } >
								{gallery.photos?.photo.map((item, idx) => {
									return <li className='item' key={idx}>
										<div>
											<div className="img_box">        
												<button type="button" className='img_box_btn' onClick={handlePopOpen(idx)}>
													<img className='thumb' src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} alt={item.title} />  	
												</button>   
											</div>
											<div className="txt_box">
												<article className="profile">	
													<img src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} alt={''} onError={ e => e.target.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif') } />				
													<button type="button" className="userid" onClick={handleSelectUser(item.owner)}>{item.owner}</button>
												</article>
												<p>{item.title}</p>
											</div>
										</div>
									</li>
								})}
							</Masonry>
						</ul>
						)}
					
				</div>
			</Layout>
			<Modal ref={modal} type={"popup_full"}>
				<div className='gallery_pop_img'>
					<img 
						className='thumb' 
						src={`https://live.staticflickr.com/${gallery.photos?.photo[ImgIndex]?.server}/${gallery.photos?.photo[ImgIndex]?.id}_${gallery.photos?.photo[ImgIndex]?.secret}_b.jpg`} 
						alt={gallery.photos?.photo[ImgIndex]?.title} 
					/> 
				</div> 	
			</Modal>
		</Fragment>
	)
}

export default Gallery;
