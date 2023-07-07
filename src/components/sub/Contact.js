import React, { Fragment } from 'react';
import Layout from '../common/Layout';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import Visual from './Visual';

import Tab from '../common/tab/Tab';
import Showroom from './showroom/Showroom';
import { MapData } from '../common/data/MapData';


function Contact() {
	// const container = useRef(null);
	// const [Traffic, setTraffic] = useState(false);
	// const [Location, setLocation] = useState(null);
	// const [Index, setIndex] = useState(0);
	// console.log(Index);
	

	// //아래 정보값들은 useEffect구문에서 인스턴스 생성할때만 필요한 정보값에 불과하므로 미리 읽히도록 useEffect바깥에 배치
	// const { kakao } = window;
	// const info = [
	// 	{
	// 		title: '삼성역 코엑스',
	// 		latlng: new kakao.maps.LatLng(37.51100661425726, 127.06162026853143),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker1.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// 	{
	// 		title: '넥슨 본사',
	// 		latlng: new kakao.maps.LatLng(37.40211707077346, 127.10344953763003),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker2.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// 	{
	// 		title: '서울 시청',
	// 		latlng: new kakao.maps.LatLng(37.5662952, 126.9779451),
	// 		imgSrc: `${process.env.PUBLIC_URL}/img/marker3.png`,
	// 		imgSize: new kakao.maps.Size(232, 99),
	// 		imgPos: { offset: new kakao.maps.Point(116, 99) },
	// 	},
	// ];
	// const option = { center: info[Index].latlng, level: 3 };
	// const imgSrc = info[Index].imgSrc;
	// const imgSize = info[Index].imgSize;
	// const imgPos = info[Index].imgPos;
	// const markerImage = new kakao.maps.MarkerImage(imgSrc, imgSize, imgPos);
	// const marker = new kakao.maps.Marker({ position: option.center, image: markerImage });

	// const handleResize = (maps, idx) => {
	// 	return (e) => {
	// 		// console.log(maps, idx, e)
	// 		maps.setCenter(info[idx].latlng);
	// 	}
	// }

	// useEffect(() => {
	// 	container.current.innerHTML = '';
	// 	const mapInstance = new kakao.maps.Map(container.current, option);
	// 	marker.setMap(mapInstance);
	// 	//지도인스턴스에 타입, 줌 컨트롤 추가
	// 	mapInstance.addControl(new kakao.maps.MapTypeControl(), kakao.maps.ControlPosition.TOPRIGHT);
	// 	mapInstance.addControl(new kakao.maps.ZoomControl(), kakao.maps.ControlPosition.RIGHT);
		
	// 	mapInstance.setZoomable(false);

	// 	setLocation(mapInstance);
	// 	window.addEventListener('resize', handleResize(mapInstance, Index))
	// }, [Index]);
	

	// useEffect(() => {
	// 	Traffic
	// 		? Location?.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC)
	// 		: Location?.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
	// }, [Traffic]);


	
	const { kakao } = window;
	const container = useRef(null);
	const [Map, setMap] = useState([])


	const createMap = () => {
		// const map = new kakao.maps.Map(container, { center: new kakao.maps.LatLng(Map[0].letlong.lat, Map[0].letlong.long), level: 3 });
		const map_info = []
		// MapData.map(data => data.items.map(item => item.info.map(info => map_info.push(info))))
		const ab = MapData.map(data => data.items.map(item => item.info.map(info => {
			// console.log(info)
			setMap([...Map, info])
			return info
		})))
		
		// console.log('?', Map[0][0][0])
		console.log('?', Map)
	}
	


	useEffect(() => {
		// console.log(MapData.map(data => data.items.map(item => item.info.map(info => info))))
		createMap();
		 
	}, [])





    // const map_move = document.querySelectorAll('.map_move')
    // let map_idx = 0;

    // const region_info = []
    // MapData.map(i => i.items.map(info => info.info.map(item => region_info.push(item))))
    
    // //markerInfo의 첫번째 데이터로 기본 지도 인스턴스 생성
    // const map = new kakao.maps.Map(container, { center: new kakao.maps.LatLng(region_info[0].letlong.lat, region_info[0].letlong.long), level: 3 });

    // // 줌 컨트롤 붙이기
    // const zoomControl = new kakao.maps.ZoomControl();
    // map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    // // 맵 타입 위성 붙이기
    // const mapTypeControl = new kakao.maps.MapTypeControl();
    // map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

    // //휠 줌 기능막기
    // map.setZoomable(false) 

    // 반복
    // region_info.forEach((info, idx) => {
        // const marker = new kakao.maps.Marker({ 
        //     position: new kakao.maps.LatLng(info.letlong.lat, info.letlong.long), 
        //     image: new kakao.maps.MarkerImage('../src/assets/images/common/marker.svg', new kakao.maps.Size(40, 60), 
        //     { offset: new kakao.maps.Point(20, 60) }) 
        // });
        // marker.setMap(map);

        // 인포윈도우를 생성
        // const infowindow = new kakao.maps.InfoWindow({
            // position : new kakao.maps.LatLng(info.letlong.lat, info.letlong.long), 
            // content : ` 
            //     <div class="map_inner_info" style="min-height: 140px; padding: 10px 10px;  border-radius: 10px;">
            //         <div class="info_type">${info.type}</div>
            //         <span class="map_move">${info.point}</span>
            //         <div class="info_add">${info.address}</div>
            //         <div class="info_tel"><a href="tel:${info.tel}" title="매장 전화걸기">${info.tel}</a></div>
            //         <ul class="cars">
            //             ${info.car.map(car => `
            //                 <li>${car}</li>
            //             `).join('')}
            //         </ul>
            //     </div>
            // `,
            // removable : true,
        // });
        
        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        // infowindow.open(map, marker); 


        // map_move[idx].addEventListener('click', e => {
        //     map.panTo( new kakao.maps.LatLng(region_info[idx].letlong.lat, region_info[idx].letlong.long) );
        //     map_idx = idx;
        //     // console.log(idx)
        // });
       
    // })

    

    // 리사이즈시 센터로
    // window.addEventListener('resize', ui.lastCallDebounce(
    //         () => handleResize(map, new kakao.maps.LatLng(region_info[map_idx].letlong.lat, region_info[map_idx].letlong.long)), 
    //         300 
    //     ))

    // 트래픽 보기
    // btn_traffic.addEventListener('click', e => {
    //     isTraffic = !isTraffic 
    //     if(isTraffic) {
    //         map.addOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    //         btn_traffic.innerText = '교통량 끄기'
    //     } else {
    //         map.removeOverlayMapTypeId(kakao.maps.MapTypeId.TRAFFIC);
    //         btn_traffic.innerText = '교통량 보기'
    //     }
    // })


    // 첨에 지도 안나오는 이슈. 마커위 인포 띄우면 안나옴..강제 클릭으로 해결
    // map_move[0].click();





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
        // console.log(error.text);
      });
  };

	return (
		<Fragment>
			<Visual name={'contact'} />
			<Layout name={'contact sub_page'}>
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
							{/* <button onClick={() => setTraffic(!Traffic)}>{Traffic ? '교통량 끄기' : '교통량 보기'}</button> */}
							</div>
						</div>
					</div>
				</div>
			
		


				
				

				{/* 배열정보값을 토대로 동적으로 li지점버튼 생성하고 해당 버튼 클릭할때 순서값 State를 변경하면서 지도화면이 갱신되도록 수정 */}
				{/* <ul className='branch'>
					{info.map((el, idx) => {
						return (
							<li key={idx} onClick={() => setIndex(idx)} className={idx === Index ? 'on' : ''}>
								{el.title}
							</li>
						);
					})}
				</ul> */}



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