import React, { Fragment, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide, useSwiper  } from 'swiper/react';
import { Navigation, Autoplay, EffectFade  } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';


const All = ({ data }) => {

    //  // init
    //  const ui = new Ui();
    //  let colors = document.querySelectorAll(` ${tabType} .swiper-slide-active .color_wrap .color`)
    //  let carImageWrap = document.querySelectorAll(` ${tabType} .swiper-slide-active .car_wrap .car`)
    //  let carImage = document.querySelectorAll(` ${tabType} .swiper-slide-active .car_wrap .car .car_img`);
    //  let carName = document.querySelectorAll(` ${tabType} .swiper-slide-active .color_name_wrap .color_name`)
    //  const w_width = window.innerWidth;
    //  let prev_el = carImage[0];
    

    //  ui.addClass(colors[0], 'on')
    //  ui.addClass(carName[0], 'on')
    //  ui.addClass(carImageWrap[0], 'on') 
    //  for(let i = 0; i < carImage.length; i++) { carImage[i].style.clip = `rect(0px, ${w_width}px, 610px, 0px)` }
     

    //      // click 
    //      return function(e) {
    //          let target = ui.evtAssign(`${tabType} .color`, e.target)
    //          if(!target) return;
    //          if(target.classList.contains('on')) return;

    //          let dataset = target.dataset.color;
    //          let selet_color = document.querySelector(`${tabType} [data-color='${dataset}']`)
    //          let selet_colorName = document.querySelector(`${tabType} [data-colorName='${dataset}']`)
    //          let selet_car = document.querySelector(`${tabType} [data-car='${dataset}']`)
             
    //          ui.toggleClass(colors, selet_color, 'on')
    //          ui.toggleClass(carName, selet_colorName, 'on')
    //          ui.toggleClass(carImageWrap, selet_car, 'on')

    //          let num = Number(dataset.substr(dataset.length - 1))
    //          // if(prev_el) { prev_el.style.zIndex = 1; }
    //          carImage[num].style.clip = `rect(0px, ${0}px, 610px, 0px)`

    //          // console.log(carImage)
    //          const ani = new ClipAni(carImage[num], {
    //              limit: w_width,
    //              els: carImage,
    //              prev_el: prev_el,
    //              duration: 300,
    //              callback: () => {
    //                  prev_el = carImage[num]
    //                  // console.log('callback!!', prev_el)
    //              }
    //          })
    //      }

    //  function slideChange(tabType) {
    //      // console.log('slideChange')
    //      colors = document.querySelectorAll(` ${tabType} .swiper-slide-active .color_wrap .color`)
    //      carImageWrap = document.querySelectorAll(` ${tabType} .swiper-slide-active .car_wrap .car`)
    //      carImage = document.querySelectorAll(` ${tabType} .swiper-slide-active .car_wrap .car .car_img`);
    //      carName = document.querySelectorAll(` ${tabType} .swiper-slide-active .color_name_wrap .color_name`)
    //      prev_el = carImage[0];
    //      ui.toggleClass(colors, colors[0], 'on')
    //      ui.toggleClass(carName, carName[0], 'on')
    //      ui.toggleClass(carImageWrap, carImageWrap[0], 'on')

    //      // console.log('color?????', colors[0])
    //      // let evt = new Event('click')
    //      // colors[0].dispatchEvent(evt)
    //      // carImageWrap[0].style.zIndex = 3;
    //  }

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
                className="tab_all" 
                modules={[ Navigation, Autoplay, EffectFade ]} 
                navigation={true}
                effect={"fade"}
                observer={true}
                observeParents={true}
                // autoplay={{ delay: 1500, disableOnInteraction: false }}
                // loop={true}
                ref={carWrapRef}
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
                                                                <a role="button" className={`color ${idx === 0 && 'on'}`} data-color={`${car.carName}_${color.type}_${idx}`} onClick={handleColorClick(`${car.carName}_${color.type}_${idx}`)}>
                                                                    <img src={require(`../../../assets/images/car/${car.carName}/${value.color}`)} alt={value.colorName} loading="lazy" />
                                                                </a>
                                                            </div>
                                                        )
                                                    } )}
                                                </div>
                                                <div className="color_name_wrap">
                                                    {color.value.map((value, idx) => {
                                                        return (
                                                            <span className={`color_name ${idx === 0 && 'on'}`} data-colorname={`${car.carName}_${color.type}_${idx}`} key={idx}>
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

export default All;