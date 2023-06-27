import React from 'react';

const Vids = () => {
    return (
        <section class="main_visual">
           
            <div class="swiper mySwiper main_visual_slide type1 g_slide">
                <ul class="swiper-wrapper"> 
                    <li class="swiper-slide active">
                        <div class="g_inner main_visual_title">
                            <div class="pos_txt">
                                <h2 class="g_sans">G80</h2>
                                <p class="pos_txt_sub">제네시스 고유의 부드럽고 안락한 감성과<br /> 스포츠 모델 특유의 짜릿한 드라이빙</p>

                                <div class="pos_txt_outer">
                                    <strong>외부</strong>
                                    <p>역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.</p>
                                </div>
                             
                            </div>
                            <div class="pos_btn">
                               <a href="javascript:;" role="button" class="arrow_btn">견적내기</a>
                               <a href="javascript:;" role="button" class="arrow_btn">더 알아보기</a>
                            </div>
                        </div>
                        <figure class="main_visual_slide_video">
                            <video src="./src/assets/images/main/g80.mp4" autoplay muted loop></video>
                        </figure>
                    </li>
                    <li class="swiper-slide active">
                        <div class="g_inner main_visual_title">
                            <div class="pos_txt">
                                <h2 class="g_sans">G90</h2>
                                <p class="pos_txt_sub">제네시스 고유의 부드럽고 안락한 감성과<br /> 스포츠 모델 특유의 짜릿한 드라이빙</p>

                                <div class="pos_txt_outer">
                                    <strong>외부</strong>
                                    <p>역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.</p>
                                </div>
                            
                            </div>
                            <div class="pos_btn">
                               <a href="javascript:;" role="button" class="arrow_btn">견적내기</a>
                               <a href="javascript:;" role="button" class="arrow_btn">더 알아보기</a>
                            </div>
                        </div>
                        <figure class="main_visual_slide_video">
                            <video src="./src/assets/images/main/testv.mp4" autoplay muted loop></video>
                        </figure>
                    </li>
                    <li class="swiper-slide active">
                        <div class="g_inner main_visual_title">
                            <div class="pos_txt">
                                <h2 class="g_sans">GV70</h2>
                                <p class="pos_txt_sub">제네시스 고유의 부드럽고 안락한 감성과<br /> 스포츠 모델 특유의 짜릿한 드라이빙</p>

                                <div class="pos_txt_outer">
                                    <strong>외부</strong>
                                    <p>역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.</p>
                                </div>
                             
                            </div>
                            <div class="pos_btn">
                               <a href="javascript:;" role="button" class="arrow_btn">견적내기</a>
                               <a href="javascript:;" role="button" class="arrow_btn">더 알아보기</a>
                            </div>
                        </div>
                        <figure class="main_visual_slide_video">
                            <video src="./src/assets/images/main/gv70.mp4" autoplay muted loop></video>
                        </figure>
                    </li>
                    <li class="swiper-slide active">
                        <div class="g_inner main_visual_title">
                            <div class="pos_txt">
                                <h2 class="g_sans">GV60</h2>
                                <p class="pos_txt_sub">제네시스 고유의 부드럽고 안락한 감성과<br /> 스포츠 모델 특유의 짜릿한 드라이빙</p>

                                <div class="pos_txt_outer">
                                    <strong>외부</strong>
                                    <p>역동적인 우아함의 완벽한 균형을 이룬 대형 럭셔리 세단 G80는 고급스러운 감성과 편의사양을 계승하면서 스포티한 감성을 강화한 럭셔리 스포츠 세단으로 재탄생했습니다.</p>
                                </div>
                              
                            </div>
                            <div class="pos_btn">
                               <a href="javascript:;" role="button" class="arrow_btn">견적내기</a>
                               <a href="javascript:;" role="button" class="arrow_btn">더 알아보기</a>
                            </div>
                        </div>
                        <figure class="main_visual_slide_video">
                            <video src={process.env.PUBLIC_URL + "img/vid.mp4"} autoplay muted loop></video>
                        </figure>
                    </li>
                   
                </ul>
                <div class="swiper-scrollbar"></div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </div>

            <div class="main_visual_slide type2">
                <ul class="g_inner">
                   
                    <li>
                        <strong>배기량(cc)</strong>
                        <p>3,470</p>
                    </li>
                    <li>
                        <strong>최고출력(ps)</strong>
                        <p>415</p>
                    </li>
                    <li>
                        <strong>최대토크(kgf·m)</strong>
                        <p>56.0</p>
                    </li>
                    <li>
                        <strong>엔진 타입</strong>
                        <p class="last">가솔린 3.5 터보 48V 일렉트릭 슈퍼차저</p>
                    </li>
                </ul>
                <div class="progress"></div>
            </div>
        </section>

    );
};

export default Vids;