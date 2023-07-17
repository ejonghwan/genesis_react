import { useEffect, useRef } from 'react'
import G90 from '../../../assets/images/main/testv.mp4'
import G70 from '../../../assets/images/main/g70.mp4'
import G80E from '../../../assets/images/main/g80e.mp4'
import G80 from '../../../assets/images/main/g80.mp4'
import GV70 from '../../../assets/images/main/gv70.mp4'
import GV60 from '../../../assets/images/main/gv60.mp4'
import VisualItem from './VisualItem'


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
	

	const list = [
		{
			title: "G90",
			subTxt_1: "여백의 미\n고급스러운 디테일",
			subTxt_2: "최고급 세단에 걸맞은 품격 있는 실내외 디자인은 물론, 첨단 주행 보조 기술과 이동 시간에 가치를 더하는 다양한 기술이 집약된 G90를 통해 고급차의 새로운 방향성을 제시합니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90-long-wheel-base/bto/powertrains?code=BBBBBBB&packages=",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/design.html",
			src: G90 ,
			muted: true, 
			loop: false, 
			playsInline: true,
			autoPlay: true,
		},
		{
			title: "G70",
			subTxt_1: "럭셔리 디자인\n역동적인 우아함",
			subTxt_2: "2017년 젊고 세련된 디자인의 중형 럭셔리 세단으로 시작한 G70는, 2023년 차별화된 디자인 아이덴티티에 더욱 뛰어난 주행 및 제동 성능의 럭셔리 스포츠 세단으로 새롭게 탄생하였습니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70/bto/powertrains?code=BCBBBBB&packages=",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70/design.html",
			src: G70 ,
			muted: true, 
			loop: true, 
			playsInline: true,
			autoPlay: true,
		},
		{
			title: "E.G80",
			subTxt_1: "전기차\n 그 이상의 시작",
			subTxt_2: "전기차 그 이상. Electrified G80는 뛰어난 동력 성능과 신기술을 갖춘 제네시스의 첫 번째 전기차 모델로, 고급 대형 전동화 세단의 새로운 기준을 제시합니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/bto/powertrains?code=BBBBBB&packages=",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/design.html",
			src: G80E ,
			muted: true, 
			loop: true, 
			playsInline: true,
			autoPlay: true,
		},
		{
			title: "G80",
			subTxt_1: "완벽한 비율\n 역동적인 우아함",
			subTxt_2: "역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/bto/",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/design.html",
			src: G80 ,
			muted: true, 
			loop: true, 
			playsInline: true,
			autoPlay: true,
		},
		{
			title: "GV70",
			subTxt_1: "심플한 조형\n 감성적인 볼륨",
			subTxt_2: "역동적인 우아함을 극대화한 디자인, 다이내믹한 주행 경험, 여백의 미를 승화한 실내, 커넥티드 카의 신기술이 담긴 도심형 프리미엄 SUV GV70를 소개합니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/bto/powertrains?code=BBBBBBB&packages=",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/design.html",
			src: GV70 ,
			muted: true, 
			loop: true, 
			playsInline: true,
			autoPlay: true,
		},
		{
			title: "GV60",
			subTxt_1: "당신과의\n 교감을 위해",
			subTxt_2: "GV60는 파워풀한 주행성능과 고객과 교감하는 다양한 핵심기능을 통해 럭셔리 전기차의 새로운 기준을 제시합니다.",
			more: "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/bto/powertrains?code=BBBBB&packages=",
			Learn: "https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/highlights.html",
			src: GV60 ,
			muted: true, 
			loop: true, 
			playsInline: true,
			autoPlay: true,
		},
	
	]

	return (
		// <figure id='visual' className='myScroll'>
		// 	<video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video>
		// </figure>

		<div className="main_visual">
			<ul className="list" ref={wrapRef}>
				{list.map((list, idx) => <li key={idx}><VisualItem data={list}/></li>)}
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
