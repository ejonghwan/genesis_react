
import G90 from '../../assets/images/main/testv.mp4'
import G70 from '../../assets/images/main/g70.mp4'
import G80E from '../../assets/images/main/g80e.mp4'
import G80 from '../../assets/images/main/g80.mp4'
import GV70 from '../../assets/images/main/gv70.mp4'
import GV60 from '../../assets/images/main/gv60.mp4'
import { useEffect, useRef } from 'react'



const Visual = () => {

	console.log('visual')
	const wrapRef = useRef(null)
	const prevRef = useRef(null)
	const nextRef = useRef(null)


	const init = (items) => {
		console.log(items)

		items[1].querySelector('video').play();
		items[1].classList.add('active')
	}

	const handleNextClick = (items) => {
		return () => {
			wrapRef.current.append(wrapRef.current.firstElementChild)
			nextRef.current.classList.add('on');

			setTimeout(() => {
				nextRef.current.classList.remove('on')
			}, 600)
			setTimeout(() => {
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
			setTimeout(() => {
				prevRef.current.classList.remove('on')
			}, 600)
			setTimeout(() => {
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
		}
	}, [])
	

	return (
		// <figure id='visual' className='myScroll'>
		// 	<video src={process.env.PUBLIC_URL + '/img/vid.mp4'} loop autoPlay muted></video>
		// </figure>

		<div className="main_visual">
			<ul className="list" ref={wrapRef}>
				<li>
					<div className="inner">
						<div className="main_visual_txt">
							<strong className="g_sans thum" aria-hidden="true">
								G90
								<br /><span>여백의 미<br />고급스러운 디테일</span>
							</strong>
							<div className="pos_txt">
								<h2 className="g_sans">G90</h2>
								<p className="pos_txt_sub">최고급 세단에 걸맞은 품격 있는 실내외 디자인은 물론, 첨단 주행 보조 기술과 이동 시간에 가치를 더하는 다양한 기술이 집약된 G90를 통해 고급차의 새로운 방향성을 제시합니다.</p>
							</div>
							<div className="pos_btn">
							<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90-long-wheel-base/bto/powertrains?code=BBBBBBB&packages=" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
							<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/design.html" role="button" className="arrow_btn">더 알아보기</a>
							</div>
					</div>
						<figure className="main_visual_slide_video">
							<video id="test" src={G90} muted loop playsInline ></video>
						</figure>
					</div>
				</li>
				<li>
					<div className="inner">
						<div className="main_visual_txt">
							<strong className="g_sans thum" aria-hidden="true">G70
								<span>럭셔리 디자인<br />역동적인 우아함</span>
							</strong>
							<div className="pos_txt">
								<h2 className="g_sans">G70</h2>
								<p className="pos_txt_sub">2017년 젊고 세련된 디자인의 중형 럭셔리 세단으로 시작한 G70는, 2023년 차별화된 디자인 아이덴티티에 더욱 뛰어난 주행 및 제동 성능의 럭셔리 스포츠 세단으로 새롭게 탄생하였습니다.</p>
							</div>
							<div className="pos_btn">
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70/bto/powertrains?code=BCBBBBB&packages=" role="button" className="arrow_btn">견적내기</a>
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70/design.html" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">더 알아보기</a>
							</div>
					</div>
						<figure className="main_visual_slide_video">
							<video src={G70} autoPlay muted loop playsInline ></video>
						</figure>
					</div>
				</li>
				<li>
					<div className="inner">
						<div className="main_visual_txt">
							<strong className="g_sans thum" aria-hidden="true">E.G80
								<span>전기차<br /> 그 이상의 시작</span>
							</strong>
							<div className="pos_txt">
								<h2 className="g_sans">E.G80</h2>
								<p className="pos_txt_sub">전기차 그 이상. Electrified G80는 뛰어난 동력 성능과 신기술을 갖춘 제네시스의 첫 번째 전기차 모델로, 고급 대형 전동화 세단의 새로운 기준을 제시합니다.</p>
							</div>
							<div className="pos_btn">
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/bto/powertrains?code=BBBBBB&packages=" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/design.html" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">더 알아보기</a>
							</div>
					</div>
						<figure className="main_visual_slide_video">
							<video src={G80E} muted loop playsInline ></video>
						</figure>
					</div>
				</li>
				<li>
					<div className="inner">
					<div className="main_visual_txt">
						<strong className="g_sans thum" aria-hidden="true">G80
							<span>완벽한 비율<br /> 역동적인 우아함</span>
						</strong>
							<div className="pos_txt">
								<h2 className="g_sans">G80</h2>
								<p className="pos_txt_sub">역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.</p>
							</div>
							<div className="pos_btn">
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/bto/" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
								<a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/design.html" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">더 알아보기</a>
							</div>
					</div>
						<figure className="main_visual_slide_video">
							<video src={G80} muted loop playsInline ></video>
						</figure>
					</div>
				</li>
				<li>
					<div className="inner">
						<div className="main_visual_txt">
							<strong className="g_sans thum" aria-hidden="true">GV70
								<span>심플한 조형<br /> 감성적인 볼륨</span>
							</strong>
							<div className="pos_txt">
								<h2 className="g_sans">GV70</h2>
								<p className="pos_txt_sub">역동적인 우아함을 극대화한 디자인, 다이내믹한 주행 경험, 여백의 미를 승화한 실내, 커넥티드 카의 신기술이 담긴 도심형 프리미엄 SUV GV70를 소개합니다.</p>
							</div>
							<div className="pos_btn">
							<a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/bto/powertrains?code=BBBBBBB&packages=" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
							<a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/design.html" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">더 알아보기</a>
							</div>
						</div>
						<figure className="main_visual_slide_video">
							<video src={GV70} muted loop playsInline ></video>
						</figure>
					</div>
				</li>
				<li>
					<div className="inner">
						<div className="main_visual_txt">
							<strong className="g_sans thum" aria-hidden="true">GV60
								<span>당신과의<br /> 교감을 위해</span>
							</strong>
							<div className="pos_txt">
								<h2 className="g_sans">GV60</h2>
								<p className="pos_txt_sub">GV60는 파워풀한 주행성능과 고객과 교감하는 다양한 핵심기능을 통해 럭셔리 전기차의 새로운 기준을 제시합니다.</p>
							</div>
							<div className="pos_btn">
							<a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/bto/powertrains?code=BBBBB&packages=" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
							<a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/highlights.html" role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">더 알아보기</a>
							</div>
						</div>
						<figure className="main_visual_slide_video">
							<video src={GV60} muted loop playsInline ></video>
						</figure>
					</div>
				</li>
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
