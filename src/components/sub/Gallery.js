import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import Masonry from 'react-masonry-component';


import Layout from '../common/Layout';
import Visual from './Visual';


const Gallery = () => {

	
	const [Items, setItems] = useState([])

	const getFlickr = async (opt) => {
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
		console.log(data)
		setItems(data.photos.photo)
	}
	

	useEffect(() => {
		getFlickr({ type: 'interest' });
		// getFlickr({ type: 'search', tags: 'landscape' })
		// getFlickr({ type: 'user', user: '191030940@N02' })
	}, [])


	return (
		<Fragment>
			<Visual name={'gallery'} />
			<Layout name={'gallery'}>
				<div className="g_inner">
					<div class="searchBox">
						<input type="text" id="search" placeholder="제네시스를 입력해보세요" />
						<button class="btnSearch">
							<i class="fa-solid fa-magnifying-glass"></i>
						</button>
					</div>

					<div class="btnSet">
						<fieldset>
							<input checked id="btnInterest" class="btnInterest" type="radio" name="select" />
							<label for="btnInterest">User Gallery</label>
							<input id="btnMine" class="btnMine" type="radio" name="select" />
							<label for="btnMine">Genesis Gallery</label>
						</fieldset>
					</div>


					<ul className='wrap on'>
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
											<button type="button" class="userid">{item.owner}</button>
										</article>
										<p>{item.title}</p>
									</div>
								</div>
							</li>
						})}
					</Masonry>
					</ul>
				</div>
			</Layout>
		</Fragment>
	)
}

export default Gallery;
