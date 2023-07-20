import React, { Fragment, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Autoplay, EffectFade  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import g90 from '../../../assets/images/car/G90/g90-23my-bto-exterior-sedan-uyuni-white-desktop-1920x960.png'



const Sedan = ({ data }) => {

    const carWrapRef = useRef();

    const handleColorClick = (idx) => () => {
        const cars = carWrapRef.current.querySelectorAll('.car')
        const colors = carWrapRef.current.querySelectorAll('.color')
        const color_names = carWrapRef.current.querySelectorAll('.color_name')
        for(let i = 0; i < cars.length; i++) {
            cars[i].classList.remove('on')
            colors[i].classList.remove('on')
            color_names[i].classList.remove('on')
            if(idx === cars[i].dataset.car) {
                console.log('??', cars[i])
                cars[i].classList.add('on')
                colors[i].classList.add('on')
                color_names[i].classList.add('on')
            }
        }
    } 


    return (
        <Fragment>
            <Swiper 
                className="tab_sedan" 
                modules={[ Navigation, Autoplay, EffectFade ]} 
                navigation={true}
                effect={"fade"}
                observer={true}
                observeParents={true}
                ref={carWrapRef}
                // autoplay={{ delay: 1500, disableOnInteraction: false }}
                // loop={true}
            >
                {data.map((car, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                             <strong className="main_car_title">{car.carName}</strong> 
                             <div className="main_car_info">
                                <div className="car_outer">
                                    {car.outerColor.map((color, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <div className="car_wrap">
                                                    {color.value.map((value, idx) => {
                                                        return (
                                                           
                                                            <div className={`car ${idx === 0 && 'on'}`} data-car={`${car.carName}_${color.type}_${idx}`} key={idx}>
                                                                <img className="car_img" src={require(`../../../assets/images/car/${car.carName}/${value.car}`)} alt={`${car.carName} ${value.colorName} 색 차량 이미지`} loading="lazy" />
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </Fragment>
                                        )
                                    })}
                                </div>
                                <div className="color_outer">
                                    {car.outerColor.map((color, idx) => {
                                        return (
                                            <Fragment key={idx}>
                                                <p>{color.material}</p>
                                                <div className="color_wrap">
                                                    {color.value.map((value, idx) => {
                                                        return (
                                                            <div key={idx}>
                                                                <button type="button" className={`color ${idx === 0 && color.type === 'u' && 'on'}`} data-color={`${car.carName}_${color.type}_${idx}`} onClick={handleColorClick(`${car.carName}_${color.type}_${idx}`)}>
                                                                    <img src={require(`../../../assets/images/car/${car.carName}/${value.color}`)} alt={value.colorName} loading="lazy" /> 
                                                                </button>
                                                            </div>
                                                        )
                                                    } )}
                                                </div>
                                                <div className="color_name_wrap">
                                                    {color.value.map((value, idx) => {
                                                        return (
                                                            <span className={`color_name ${idx === 0 && color.type === 'u' && 'on'}`} data-colorname={`${car.carName}_${color.type}_${idx}`} key={idx}>
                                                                {value.colorName}
                                                            </span>
                                                        )
                                                    } )}
                                                </div>
                                            </Fragment>
                                        )
                                        
                                    })}
                                </div>

                             </div>

                        </SwiperSlide>
                    )
                })}

            </Swiper>
        </Fragment>
    );
};

export default Sedan;