import { Fragment, useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';


import Layout from '../common/Layout';
import Visual from './Visual';
import Loading from '../common/Loading';


const Gallery = () => {

	
	const [Items, setItems] = useState([]);
	const [Loader, setLoader] = useState(true);
	const [Search, setSearch] = useState('');
	const [Gallery, setGallery] = useState({ select: 'user' })
	const wrapRef = useRef(null);
	const isUserRef = useRef(null);

	const getFlickr = async (opt) => {
		setLoader(true)
		const baseURL = `https://www.flickr.com/services/rest/`;
		const api_key = '034beefa27c4791e6e792d0e7e8d6873';
		const num = 50;
		const method_interest = 'flickr.interestingness.getList';
		const method_search = 'flickr.photos.search';
		const method_user = 'flickr.people.getPhotos';
		const myId = '191030940@N02';

		let url = '';
		if(opt.type === 'interest') url = `${baseURL}?format=json&nojsoncallback=1&api_key=${api_key}&per_page=${num}&method=${method_interest}`
		if(opt.type === 'search') url = `${baseURL}?format=json&nojsoncallback=1&api_key=${api_key}&per_page=${num}&method=${method_search}&tags=${opt.tags}`
		if(opt.type === 'user') url = `${baseURL}?format=json&nojsoncallback=1&api_key=${api_key}&per_page=${num}&method=${method_user}&user_id=${opt.user}`

		const res = await axios.get(url);
		const data = res.data;
		if(data.photos.photo.length === 0) return alert('결과가 없습니다');
		setItems(data.photos.photo);
	}

	const handleUserGall = e => getFlickr({ type: 'search', tags: 'landscape' }).then(() => {
		// console.log('l??', Loader)
		setLoader(false)
		wrapRef.current.classList.add('on');
	})
	const handleGeneGall = e => getFlickr({ type: 'user', user: '191030940@N02' }).then(() => {
		// console.log('l??', Loader)
		setLoader(false)
		wrapRef.current.classList.add('on');
	})

	const handleSelectUser = userId => e => {
		// if(userId === Items[Items.length-1].owner && userId === Items[0].owner) return alert('이미 검색한 유저입니다')
		if(userId === isUserRef.current) return alert('이미 검색한 유저입니다')

		getFlickr({ type: 'user', user: userId }).then(() => {
			// console.log('l??', Loader)
			setLoader(false)
			wrapRef.current.classList.add('on');
			isUserRef.current = userId;
		})
	}

	
	const handleCheck = (e) => {
		const { name, value } = e.target;
		setGallery({ [name]: value })
	};


	const handleSearch = e => {
		if(Search === '') return alert('검색어를 입력해주세요')
		getFlickr({ type: 'search', tags: Search }).then(() => {
			setLoader(false)
			wrapRef.current.classList.add('on');
		})
	}

	const handleSearchChange = e => {
		const { value } = e.target;
		setSearch(value)
	}


	

	useEffect(() => {
		getFlickr({ type: 'interest' }).then(() => {
			setLoader(false)
			wrapRef.current.classList.add('on');
		});
	}, [])

	useEffect(() => {
		console.log(Gallery)
	}, [Gallery])




	return (
		<Fragment>
			<Visual name={'gallery'} />
			<Layout name={'gallery'}>

				
				
				<div className="g_inner">
					<div class="searchBox">
						<input type="text" id="search" placeholder="제네시스를 입력해보세요" onChange={handleSearchChange} onKeyPress={e => e.key === 'Enter' && handleSearch()}/>
						<button class="btnSearch" onClick={handleSearch}>
							검색
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>


					<div class="btnSet">
						<fieldset>
							<input id="btnInterest" class="btnInterest" value="user" type="radio" name="select" checked={Gallery["select"] === "user"} onChange={handleCheck} />
							<label for="btnInterest" onClick={handleUserGall}>User Gallery</label>
							<input id="btnMine" class="btnMine" value="genesis" type="radio" name="select" checked={Gallery["select"] === "genesis"} onChange={handleCheck} />
							<label for="btnMine" onClick={handleGeneGall}>Genesis Gallery</label>
						</fieldset>
					</div>

					{Loader ? ( 
						<Loading /> 
						) : (
						<ul className='wrap' ref={wrapRef}> 
							<Masonry elementType={'div'} options={ {transitionDuration: ".5s"} } >
							{Items.map((item, idx) => {
								return <li className='item' key={idx}>
									<div>
										<div class="img_box">        
											<img className='thumb' src={`https://live.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`} alt={item.title} />     
										</div>
										<div class="txt_box">
											<article class="profile">	
												<img 
													src={`http://farm${item.farm}.staticflickr.com/${item.server}/buddyicons/${item.owner}.jpg`} onError={ e => e.target.setAttribute('src', 'https://www.flickr.com/images/buddyicon.gif') } />				
												<button type="button" class="userid" onClick={handleSelectUser(item.owner)}>{item.owner}</button>
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
		</Fragment>
	)
}

export default Gallery;
