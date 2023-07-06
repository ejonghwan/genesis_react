import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Slide from './Slide';

const SlideWrap = ({ data, defaultText }) => {
    // const swiper = useSwiper()
    const swiperRef = useRef(null)
    const [SwiperState, setSwiperState] = useState(false)

    const handleSwiperStop = () => {
        swiperRef.current.swiper.autoplay.stop()
        setSwiperState(!SwiperState)
    }
    const handleSwiperPaly = () => {
        swiperRef.current.swiper.autoplay.start()
        setSwiperState(!SwiperState)
    }

    return (
        <div class="g_inner">
            <Swiper 
                ref={swiperRef}
                direction={'vertical'} 
                className="noti_Swiper" 
                modules={[ Navigation, Autoplay ]} 
                navigation={true}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                loop={true}
            >
                {data.map((item, idx) => <SwiperSlide key={idx}><Slide item={item} defaultText={defaultText} /></SwiperSlide>)}
                <div class="swiper-state">
                    <button type="button" class={`stop ${!SwiperState && "on"}`} onClick={handleSwiperStop} aria-label="슬라이드 자동 이동 정지"></button>
                    <button type="button" class={`play ${SwiperState && "on"}`} onClick={handleSwiperPaly} aria-label="슬라이드 자동 이동 시작"></button>
                </div>
            </Swiper>
        </div>
    );
};

export default SlideWrap;