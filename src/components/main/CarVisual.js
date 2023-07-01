



const CarVisual = () => {
    return (
        <section class="sub_visual">
                <article class="g_inner">
                    <div class="sub_visual_title">
                        <h2 class="gl_title">Our Models</h2>
                        <p>역동적이면서도 우아한 디자인과 최첨단 기술을 탑재한 제네시스 브랜드의 라인업을 살펴보세요.</p>
                    </div>
                
                    {/* tab */}
                    <article class="tab_type1">
                        <strong id="tab_type1_tit" class="blind">제네시스 종류 선택</strong>
                        <div class="tab_wrap">
                            {/* tab_header */}
                            <ul class="tab_header" aria-labelledby="tab_type1_tit">
                                <li class="tab_header_item"><button type="button">ALL</button></li>
                                <li class="tab_header_item"><button type="button">SEDAN</button></li>
                                <li class="tab_header_item"><button type="button">SUV</button></li>
                            </ul>
                            {/* tab_header */}
                            {/* tab_body */}
                            <ul class="tab_body">
                                <li class="tab_body_item">
                                    {/* tab1 */}
                                    <div class="swiper tab_all">
                                        <div class="swiper-wrapper">
                                        </div>
                                        <div class="swiper-button-next"></div>
                                         <div class="swiper-button-prev"></div>
                                        <div class="swiper-pagination"></div>
                                    </div>

                                   
                                    {/* //tab1 */}
                                </li>
                                <li class="tab_body_item">
                                    <div class="swiper tab_sedan">
                                        <div class="swiper-wrapper">
                                        </div>
                                        <div class="swiper-button-next"></div>
                                         <div class="swiper-button-prev"></div>
                                        <div class="swiper-pagination"></div>
                                    </div>
                                </li>
                                <li class="tab_body_item">
                                    <div class="swiper tab_suv">
                                        <div class="swiper-wrapper">
                                        </div>
                                        <div class="swiper-button-next"></div>
                                         <div class="swiper-button-prev"></div>
                                        <div class="swiper-pagination"></div>
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