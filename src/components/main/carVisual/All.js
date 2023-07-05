import React, { Fragment, useEffect } from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Autoplay  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';



const All = ({ data }) => {

    useEffect(() => {
        
    console.log('dd?', data)
    }, [])

    return (
        <Fragment>
            <Swiper 
                className="tab_all" 
                modules={[ Navigation, Autoplay ]} 
                navigation={true}
                // autoplay={{ delay: 1500, disableOnInteraction: false }}
                // loop={true}
            >
                {/* {NoticeData.map((item, idx) => <SwiperSlide key={idx}><Notice item={item} /></SwiperSlide>)} */}


                {data.map((car, idx) => {
                    return (
                        <SwiperSlide key={idx}>
                             <strong class="main_car_title">{car.carName}</strong> 
                             <div class="main_car_info">

                                {car.outerColor.map((color, idx) => {
                                    return (
                                        <div class="car_outer">
                                            <div class="car_wrap">
                                                {color.value.map((value, idx) => {
                                                     return (
                                                        <div class="car" data-car={`${car.carName}_${color.type}_${idx}`}>
                                                            <img class="car_img" src={`./src/assets/images/car/${car.carName}/${value.car}`} alt={`${car.carName} ${value.colorName} 색 차량 이미지`} loading="lazy" />
                                                        </div>
                                                     )
                                                })}
                                            </div>
                                        
                                        </div>
                                    )
                                })}




                             </div>
                        </SwiperSlide>
                    )
                })}
                <SwiperSlide>

{/*            
                    <strong class="main_car_title">${data[i].carName}</strong> 
                    <ul class="main_car_info">

                        <li>
                            <div class="car_outer">${ data[i].outerColor.map(item => `
                                <div class="car_wrap">
                                    ${item.value.map((value, idx) => `
                                        <div class="car" data-car="${data[i].carName}_${item.type}_${idx}">
                                            <img class="car_img" src="./src/assets/images/car/${data[i].carName}/${value.car}" alt="${data[i].carName} ${value.colorName} 색 차량 이미지" loading="lazy" />
                                        </div>
                                    ` ).join(' ')}
                                </div>
                            `).join(' ')}
                            </div>

                            <div class="color_outer">${ data[i].outerColor.map(item => `
                                
                                    <p>${item.material}</p>
                                    <div class="color_wrap">
                                        ${item.value.map((value, idx) => `
                                            <div>
                                                <a role="button" href="javascript:;" class="color" data-color="${data[i].carName}_${item.type}_${idx}">
                                                    <img src="./src/assets/images/car/${data[i].carName}/${value.color}" alt="${value.colorName}" loading="lazy" />
                                                </a>
                                            </div>
                                        ` ).join(' ')}
                                    </div>
                                    <div class="color_name_wrap">
                                        ${item.value.map((value, idx) => `
                                            <span class="color_name" data-colorName="${data[i].carName}_${item.type}_${idx}">
                                                ${value.colorName}
                                            </span>
                                        ` ).join(' ')}
                                    </div>
                                `).join(' ')}
                                </div>
                            
                            
                        </li>    
                    </ul> 
                     */}
                    
                    
             
         
                </SwiperSlide>
               
            </Swiper>
        </Fragment>
    );
};

export default All;