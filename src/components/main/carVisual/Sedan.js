import React, { Fragment, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Autoplay, EffectFade  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



const Sedan = ({ data }) => {

    return (
        <Fragment>
            <Swiper 
                className="tab_sedan" 
                modules={[ Navigation, Autoplay, EffectFade ]} 
                navigation={true}
                effect={"fade"}
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
                                                            <div className="car" data-car={`${car.carName}_${color.type}_${idx}`} key={idx}>
                                                                <img className="car_img" src={`./src/assets/images/car/${car.carName}/${value.car}`} alt={`${car.carName} ${value.colorName} 색 차량 이미지`} loading="lazy" />
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
                                                                <a role="button" className="color" data-color={`${car.carName}_${color.type}_${idx}`}>
                                                                    <img src={`./src/assets/images/car/${car.carName}/${value.color}`} alt={value.colorName} loading="lazy" />
                                                                </a>
                                                            </div>
                                                        )
                                                    } )}
                                                </div>
                                                <div className="color_name_wrap">
                                                    {color.value.map((value, idx) => {
                                                        return (
                                                            <span className="color_name" data-colorname={`${car.carName}_${color.type}_${idx}`} key={idx}>
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