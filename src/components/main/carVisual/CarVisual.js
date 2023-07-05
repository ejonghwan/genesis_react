import React, { Fragment, useEffect } from 'react';


import Tab from '../../common/tab/Tab';
import All from './All';
import Sedan from './Sedan';
import Suv from './Suv';
import { CarData } from '../../common/data/CarData';




const CarVisual = () => {

    return (
        <section className="sub_visual">
                <article className="g_inner">
                    <div className="sub_visual_title">
                        <h2 className="gl_title">Our Models</h2>
                        <p>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요.</p>
                    </div>
                
                    {/* tab */}
                    <Tab 
                        className={"tab_type1"} 
                        tabHead={["ALL", "SEDAN", "SUV"].map((item, idx) => <Fragment key={idx}>{item}</Fragment>)} 
                        tabBody={[<All  data={CarData} />, <Sedan  data={CarData} />, <Suv  data={CarData} />].map((item, idx) => <Fragment key={idx}>{item}</Fragment>)}
                    />

                    {/* <Tab 
                        className={"tab_type1"} 
                        tabHead={["ALL", "SEDAN", "SUV"]} 
                        tabBody={[<All  data={CarData} />, <Sedan  data={CarData} />, <Suv  data={CarData} />]}
                    /> */}


                    <article className="tab_type1">
                        <strong id="tab_type1_tit" className="blind">제네시스 종류 선택</strong>
                        <div className="tab_wrap">
                            {/* tab_header */}
                            <ul className="tab_header" aria-labelledby="tab_type1_tit">
                                <li className="tab_header_item"><button type="button">ALL</button></li>
                                <li className="tab_header_item"><button type="button">SEDAN</button></li>
                                <li className="tab_header_item"><button type="button">SUV</button></li>
                            </ul>
                            {/* tab_header */}
                            {/* tab_body */}
                            <ul className="tab_body">
                                <li className="tab_body_item">
                                    {/* tab1 */}
                                    <div className="swiper tab_all">
                                        <div className="swiper-wrapper">
                                        </div>
                                        <div className="swiper-button-next"></div>
                                         <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div>
                                    </div>

                                   
                                    {/* //tab1 */}
                                </li>
                                <li className="tab_body_item">
                                    <div className="swiper tab_sedan">
                                        <div className="swiper-wrapper">
                                        </div>
                                        <div className="swiper-button-next"></div>
                                         <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </li>
                                <li className="tab_body_item">
                                    <div className="swiper tab_suv">
                                        <div className="swiper-wrapper">
                                        </div>
                                        <div className="swiper-button-next"></div>
                                         <div className="swiper-button-prev"></div>
                                        <div className="swiper-pagination"></div>
                                    </div>
                                </li>
                            </ul>
                            {/* tab_body */}
                        </div>
                    </article>
                    {/* //tab */}

                </article>
                
                {/* 여긴 제원들 참고자료 인터렉션. 위에꺼랑 연동해서  */}
             
            </section>
    )
}


export default CarVisual;