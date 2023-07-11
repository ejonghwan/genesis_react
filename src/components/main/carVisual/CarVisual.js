import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import Tab from '../../common/tab/Tab';
import All from './All';
import Sedan from './Sedan';
import Suv from './Suv';
import { CarData } from '../../common/data/CarData';




const CarVisual = () => {


    // const useDispatch = 
    const no = useSelector(state => console.log(state))


    console.log(no)


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
                            <All  data={CarData} />, 
                            <Sedan  data={CarData.filter(item => item.type === "SEDAN" )} />, 
                            <Suv  data={CarData.filter(item => item.type === "SUV" )} />].map((item, idx) => <Fragment key={idx}>{item}</Fragment>
                            )}
                    />

                    {/* <Tab 
                        className={"tab_type1"} 
                        tabHead={["ALL", "SEDAN", "SUV"]} 
                        tabBody={[<All  data={CarData} />, <Sedan  data={CarData} />, <Suv  data={CarData} />]}
                    /> */}

                </article>
                
              
            </section>
    )
}


export default CarVisual;