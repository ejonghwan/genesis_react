import React, { Fragment, useEffect, useRef, useCallback, memo } from 'react';
import { Swiper, SwiperSlide  } from 'swiper/react';
import { Navigation, Autoplay, EffectFade, Pagination  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import ClipAni from '../../../utils/ClipAni';
import Img from '../../common/image/Img';



const Sedan = ({ data }) => {

  
    const carWrapRef = useRef(null);
    let cars = useRef(null);
    let carImgs = useRef(null);
    let colors = useRef(null);
    let color_names = useRef(null);
    let prev_el = useRef(null);
  
    const handleColorClick = useCallback((carData) => () => {
        // if(prev_el) { prev_el.current.style.zIndex = 1; }
        for(let i = 0; i < cars.current.length; i++) {
            cars.current[i].classList.remove('on')
            colors.current[i].classList.remove('on')
            color_names.current[i].classList.remove('on')

            if(carData === cars.current[i].dataset.car) {
                cars.current[i].classList.add('on')
                colors.current[i].classList.add('on')
                color_names.current[i].classList.add('on')
                
                new ClipAni(carImgs.current[i], {
                    limit: window.innerWidth,
                    els: carImgs.current,
                    prev_el: prev_el.current,
                    duration: 300,
                    callback: () => {
                        prev_el.current = carImgs.current[i];
                        // console.log('prevel?', prev_el.current)
                    }
                })
                
            }
        }
    }, [])

    useEffect(() => {
        cars.current = carWrapRef.current?.querySelectorAll('.car')
        carImgs.current = carWrapRef.current.querySelectorAll('.car_img')
        colors.current = carWrapRef.current.querySelectorAll('.color')
        color_names.current = carWrapRef.current.querySelectorAll('.color_name')
        prev_el.current = carImgs.current[0];
    }, [])


    return (
        <Fragment>
            <Swiper 
                className="tab_sedan" 
                modules={[ Navigation, Autoplay, EffectFade, Pagination ]} 
                navigation={true}
                pagination={{
                    type: 'progressbar',
                  }}
                effect={"fade"}
                observer={true}
                observeParents={true}
                // autoplay={{ delay: 1500, disableOnInteraction: false }}
                // loop={true}
                ref={carWrapRef}
                onSlideChange={(swi) => {
                    swi.slides[swi.activeIndex].querySelector('.color_name').classList.add('on')
                }}
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
                                                                 <Img 
                                                                    className="car_img"
                                                                    webpSrc={require(`../../../assets/images/car/${car.carName}/${value.car}.webp`)} 
                                                                    imageSrc={require(`../../../assets/images/car/${car.carName}/${value.car}.png`)} 
                                                                    alt={`${car.carName} ${value.colorName} 색 차량 이미지`}
                                                                />
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
                                                                <Img 
                                                                    webpSrc={require(`../../../assets/images/car/${car.carName}/${value.color}.webp`)} 
                                                                    imageSrc={require(`../../../assets/images/car/${car.carName}/${value.color}.png`)} 
                                                                    alt={value.colorName} 
                                                                    width={700}
                                                                    height={248}
                                                                />
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

export default memo(Sedan);