import React, { useState, useEffect } from 'react';

const News = () => {

	const randomId = e => Math.floor(Math.random() * 10000);
	const initalPosts = [
		{ id: randomId(), title: 'a0', content: 'b0', done: false, modify: false },
		{ id: randomId(), title: 'a1', content: 'b1', done: false, modify: false },
		{ id: randomId(), title: 'a2', content: 'b2', done: false, modify: false },
		{ id: randomId(), title: 'a3', content: 'b3', done: false, modify: false },
		{ id: randomId(), title: 'a4', content: 'b4', done: false, modify: false },
		{ id: randomId(), title: 'a5', content: 'b5', done: false, modify: false },
	]

	const [Posts, setPosts] = useState(initalPosts);
	const getLocalData = () => {
		const data = localStorage.getItem('post');
		const obj = JSON.parse(data)
		return data ? setPosts( obj ) : initalPosts
	}

	useEffect(() => {
		getLocalData();
		// console.log('pos?', Posts)
	}, [])


	return (
		<section id='news' className='myScroll'>
			{Posts.map((item, idx) => {
				if(idx >= 4) return false;
				return <article key={idx}>{item.title}</article>
			})}
		</section>
	);
}

export default News;
