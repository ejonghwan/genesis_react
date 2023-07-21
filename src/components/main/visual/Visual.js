import { useEffect, useRef } from 'react'
import VisualItem from './VisualItem'
import { mainVisualList } from '../../common/data/MainVisualData'




const Visual = () => {
	const wrapRef = useRef(null)
	const prevRef = useRef(null)
	const nextRef = useRef(null)
	const addRef = useRef(null)
	const removeRef = useRef(null)

	const init = (items) => {
		items[1].querySelector('video').play();
		items[1].classList.add('active')
	}

	const handleNextClick = (items) => {
		return () => {
			wrapRef.current.append(wrapRef.current.firstElementChild)
			nextRef.current.classList.add('on');

			removeRef.current = setTimeout(() => {
				nextRef.current.classList.remove('on')
			}, 600)
			addRef.current = setTimeout(() => {
				for(let i = 0; i < items.length; i++) {
					items[i].querySelector('video').pause();
					items[i].querySelector('video').currentTime = 0;
					items[i].classList.remove('active')
				}
				wrapRef.current.querySelectorAll('.main_visual .list li')[1].classList.add('active')
				wrapRef.current.querySelectorAll('.main_visual .list li')[1].querySelector('video').play()
			}, 100)
		}
	}

	const handlePrevClick = (items) => {
		return () => {
			wrapRef.current.prepend(wrapRef.current.lastElementChild)
			prevRef.current.classList.add('on');

			removeRef.current = setTimeout(() => {
				prevRef.current.classList.remove('on')
			}, 600)
			addRef.current = setTimeout(() => {
				for(let i = 0; i < items.length; i++) {
					items[i].querySelector('video').pause();
					items[i].querySelector('video').currentTime = 0;
					items[i].classList.remove('active')
				}

				wrapRef.current.querySelectorAll('.main_visual .list li')[1].classList.add('active')
				wrapRef.current.querySelectorAll('.main_visual .list li')[1].querySelector('video').play()
			}, 100)
		}
	}

	useEffect(() => {
		const items = wrapRef.current.querySelectorAll('li')
		window.addEventListener('load', init(items))
		prevRef.current.addEventListener('click', handlePrevClick(items))
		nextRef.current.addEventListener('click', handleNextClick(items))
		return () => {
			window.removeEventListener('load', init(items))
			clearTimeout(addRef.current)
			clearTimeout(removeRef.current)
		}
	}, [])
	


	return (
		// <figure id='visual' className='myScroll'>
		// 	<video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video>
		// </figure>

		<div className="main_visual">
			<ul className="list" ref={wrapRef}>
				{mainVisualList.map((list, idx) => <li key={idx}><VisualItem data={list}/></li>)}
			</ul>
			<nav className="navi">
				<button className="prev" ref={prevRef}>
					<span><span className="blind">이전 슬라이드</span></span>
				</button>
				<button className="next" ref={nextRef}>
					<span><span className="blind">다음 슬라이드</span></span>
				</button>
			</nav>


			<div className="main_visual_slide type2">
				<ul className="g_inner">
					<li>
						<strong>배기량(cc)</strong>
						<p>3,470</p>
					</li>
					<li>
						<strong>최고출력(ps)</strong>
						<p>415</p>
					</li>
					<li>
						<strong>최대토크(kgf·m)</strong>
						<p>56.0</p>
					</li>
					<li>
						<strong>엔진 타입</strong>
						<p className="last">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</p>
					</li>
				</ul>
			</div>
		</div>
				
				
	);
}

export default Visual;
