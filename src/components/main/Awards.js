
const Awards = () => {

    // const progressCircle = document.querySelector(".swiper.type3 .autoplay-progress svg");
    // const progressContent = document.querySelector(".swiper.type3  .autoplay-progress span");
    // new Swiper(".swiper.type3", {
  
    //   pagination: {
    //     el: ".swiper.type3 .swiper-pagination",
    //     clickable: true
    //   },
    //   navigation: {
    //     nextEl: ".swiper.type3 .swiper-button-next",
    //     prevEl: ".swiper.type3 .swiper-button-prev"
    //   },
    //   on: {
    //     autoplayTimeLeft(s, time, progress) {
    //       progressCircle.style.setProperty("--progress", 1 - progress);
    //       progressContent.textContent = `${Math.ceil(time / 1000)}s`;
    //     }
    //   }
    // });

    return (

        <article class="g_inner ani ani_type1">
            <h2 class="gl_title">THE AWARDS</h2>
            <div class="swiper type3 award">
                <div class="swiper-wrapper g_slide s_type3 ">
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">제네시스 X 컨버터블,<br />카 디자인 어워드 올해의 콘셉트카 선정</strong>
                      
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">G90, 레드닷 어워드 수송 디자인 분야 본상 수상</strong>
                       
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">제네시스 G90, 모터트렌드  올해의 차® 선정
                            (미국 사양 기준)</strong>
                          
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">제네시스, ‘2022 레드 닷 어워드’에서 4개 부문 수상</strong>
                      
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">J.D. POWER 2022 신차품질조사 프리미엄 브랜드 1위 달성</strong>
                       
                    </div>
                </div>
                <div class="swiper-slide">
                    <div class="item">
                        <strong class="tit">2022 IIHS Top Safety Pick+</strong>
                       
                    </div>
                </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
                <div class="autoplay-progress">
                <svg viewBox="0 0 48 48">
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span></span>
                </div>
            </div>
        </article>


    )
}

export default Awards;