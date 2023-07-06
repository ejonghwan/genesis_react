import React, { Fragment } from 'react';
import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Visual from './Visual';

import Tab from '../common/tab/Tab';
import Showroom from './showroom/Showroom';
import { MapData } from '../common/data/MapData';


function Contact() {
	const container = useRef(null);
	const [Traffic, setTraffic] = useState(false);
	const [Location, setLocation] = useState(null);
	const [Index, setIndex] = useState(0);
	console.log(Index);
	

	//아래 정보값들은 useEffect구문에서 인스턴스 생성할때만 필요한 정보값에 불과하므로 미리 읽히도록 useEffect바깥에 배치
	const { kakao } = window;
	const info = [
		{
			title: '삼성역 코엑스',
			latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '넥슨 본사',
			latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
		{
			title: '서울 시청',
			latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
			imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
			imgSize: new kakao.maps.Size(232, 99),
			imgPos: { offset: new kakao.maps.Point(116, 99) },
		},
	];
	const option = { center: info[Index].latlng, level: 3 };
	const imgSrc = info[Index].imgSrc;
	const imgSize = info[Index].imgSize;
	const imgPos = info[Index].imgPos;
	const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
	const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });

	const handleResize = (maps, idx) => {
		return (e) => {
			// console.log(maps, idx, e)
			maps.setCenter(info[idx].latlng);
		}
	}

	useEffect(() => {
		container.current.innerHTML = '';
		const mapInstance = new kakao.maps.Map(container.current, option);
		marker.setMap(mapInstance);
		//지도인스턴스에 타입, 줌 컨트롤 추가
		mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
		mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
		
		mapInstance.setZoomable(false);

		setLocation(mapInstance);
		window.addEventListener('resize', handleResize(mapInstance, Index))
	}, [Index]);
	

	useEffect(() => {
		Traffic
			? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
			: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	}, [Traffic]);




	// emailjs
	const form = useRef();
	const [Success, setSuccess] = useState()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rq833zr', 'template_iav35ok', form.current, 'kqZyhq3UF7CqFUd-c')
      .then((result) => {
        setSuccess(true)
      }, (error) => {
		setSuccess(false)
        console.log(error.text);
      });
  };

	return (
		<Fragment>
			<Visual name={'Contact'} />
			<Layout name={'Contact sub_page'}>
				<div className='g_inner'>
					<h2 class="gl_title">전시관 찾기</h2>
					<div className='center_wrap'>
						<div className='region'>
							<Tab 
								tabHead={["서울", "경기", "인천", "광주", "충남", "대구"]} 
								tabBody={[
									<Showroom data={MapData.filter(map => map.region === "서울")} />, 
									<Showroom data={MapData.filter(map => map.region === "경기")} />, 
									<Showroom data={MapData.filter(map => map.region === "인천")} />, 
									<Showroom data={MapData.filter(map => map.region === "광주")} />, 
									<Showroom data={MapData.filter(map => map.region === "충남")} />, 
									<Showroom data={MapData.filter(map => map.region === "대구")} />
								]} 
								id={"map_tab"}
								className={"info_wrap tab_type3"} 
							/>
						</div>
						<div className='map'>
							<div id="map" ref={container}></div>
							<div class="btn_traffic_wrap"> 
							<button onClick={() => setTraffic(!Traffic)}>{Traffic ? '교통량 끄기' : '교통량 보기'}</button>
							</div>
						</div>
					</div>
				</div>
			
		


				
				

				{/* 배열정보값을 토대로 동적으로 li지점버튼 생성하고 해당 버튼 클릭할때 순서값 State를 변경하면서 지도화면이 갱신되도록 수정 */}
				<ul className='branch'>
					{info.map((el, idx) => {
						return (
							<li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
								{el.title}
							</li>
						);
					})}
				</ul>



				<div className='form'>
					<form ref={form} onSubmit={sendEmail}>
						<label>Name</label>
						<input type="text" name="name" />
						<label>Email</label>
						<input type="email" name="email" />
						<label>Message</label>
						<textarea name="message" />
						<input type="submit" value="Send" />
					</form>
					{Success ? <p style={{ color: "blue" }}>성공적으로 전송</p> : <p style={{ color: "red" }}>전송에 실패했습니다</p>}
				</div>
				
			</Layout>
		</Fragment>
	);
}

export default Contact;