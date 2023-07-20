import React, { Fragment, useEffect, useRef, lazy, Suspense } from 'react';

import Tab from '../../common/tab/Tab';
// import All from './All';
// import Sedan from './Sedan';
// import Suv from './Suv';
import { CarData } from '../../common/data/CarData';
import ClipAni from '../../../utils/ClipAni';


const CarVisual = () => {

    const All = lazy(() => import('./All'));
    const Sedan = lazy(() => import('./Sedan'));
    const Suv = lazy(() => import('./Suv'));

    const carWrapRef = useRef(null);
    let cars = useRef(null);
    let carImgs = useRef(null);
    let colors = useRef(null);
    let color_names = useRef(null);
    let prev_el = useRef(null);



    const handleColorClick = (carData) => () => {

        if(prev_el) { prev_el.current.style.zIndex = 1; }
        for(let i = 0; i < cars.current.length; i++) {
            cars.current[i]?.classList.remove('on')
            colors.current[i]?.classList.remove('on')
            color_names.current[i]?.classList.remove('on')

            if(carData === cars.current[i].dataset.car) {
                cars.current[i]?.classList.add('on')
                colors.current[i]?.classList.add('on')
                color_names.current[i]?.classList.add('on')
                
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
    } 
    const handleSelectRef = ref => {
        // console.log('ref????????????', ref)
        carWrapRef.current = ref;
    }

    useEffect(() => {
        console.log('ref change??', carWrapRef.current)
        cars.current = carWrapRef.current?.querySelectorAll('.car')
        carImgs.current = carWrapRef.current?.querySelectorAll('.car_img')
        colors.current = carWrapRef.current?.querySelectorAll('.color')
        color_names.current = carWrapRef.current?.querySelectorAll('.color_name')
        prev_el.current = carImgs.current[0];
    }, [carWrapRef, handleSelectRef])



    return (
        <section className="sub_visual">
                <article className="g_inner">
                    <div className="sub_visual_title">
                        <h2 className="gl_title">Our Models</h2>
                        <p>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요.</p>
                    </div>
                    <Tab 
                        className={"tab_type1"} 
                        tabHead={["ALL", "SEDAN", "SUV"].map((item, idx) => <Fragment key={idx}>{item}</Fragment>)} 
                        tabBody={[
                            <Suspense fallback={<div>loading...</div>}>
                            <All  
                                data={CarData} 
                                handleColorClick={handleColorClick}
                                handleSelectRef={handleSelectRef}
                                cars={cars}
                                carImgs={carImgs}
                                colors={colors}
                                color_names={color_names}
                                prev_el={prev_el}
                            />, 
                           <Sedan  
                                data={CarData.filter(item => item.type === "SEDAN" )} 
                                handleColorClick={handleColorClick}
                                handleSelectRef={handleSelectRef}
                                cars={cars}
                                carImgs={carImgs}
                                colors={colors}
                                color_names={color_names}
                                prev_el={prev_el}
                            />, 
                           <Suv  
                                data={CarData.filter(item => item.type === "SUV" )} 
                                handleColorClick={handleColorClick}
                                handleSelectRef={handleSelectRef}
                                cars={cars}
                                carImgs={carImgs}
                                colors={colors}
                                color_names={color_names}
                                prev_el={prev_el}
                            /></Suspense>].map((item, idx) => <Fragment key={idx}>{item}</Fragment>
                            )}
                    />
                </article>
            </section>
    )
}


export default CarVisual;