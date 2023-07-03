import Accordion from "./accordion/Accordion";

const Footer = () => {

    const menuData = [
        {
            header: <strong class="tit">구매</strong>, 
            body: [<li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90 LONG WHEEL BASE</a></li>,
            <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90</a></li>,
            <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90</a></li>,
            <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90</a></li>,
            <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90</a></li>
            ]
        },
        {header: "header b", body: ['body b']},
        {header: "header c", body: ['body c']},
        {header: "header d", body: ['body d']},
        {header: "header e", body: ['body e']},
    ]


	return (
		<footer id="footer">
       
        {/* 쉐어 */}
        <section class="footer_sec share">
            <div class="g_inner">
                <ul>
                    <li class="txt">Share</li>
                    <li><a href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.genesis.com%2Fkr%2Fko%2Fmain.html" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-brands fa-square-facebook"></i>
                        <span class="blind">페이스북</span>
                    </a></li>
                    <li><a href="https://twitter.com/i/flow/login" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-brands fa-twitter"></i>
                        <span class="blind">트위터</span>
                    </a></li>
                    <li><a href="javascript:;" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-solid fa-link"></i>
                        <span class="blind">링크복사</span>
                    </a></li>
                </ul>
            </div>
        </section>
        {/* //쉐어 */}
     
        {/* 공지사항 */}
        {/* <section class="footer_sec notice">
            <div class="g_inner">
                <div class="swiper noti_Swiper">
                    <ul class="swiper-wrapper">
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice.html" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] 보안 패치 작업에 따른 제네시스 커넥티드 서비스 이용불가 고객 대상 안내</a>
                      </li>
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice/detail.html?seq=0000000411" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] 제네시스 커넥티드 서비스 시스템 개선 작업 안내</a>
                      </li>
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice/detail.html?seq=0000000408" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] Genesis Connected Services 개인정보 처리방침 개정 공지</a>
                     </li>
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice/detail.html?seq=0000000406" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] 제네시스 커넥티드 서비스 시스템 개선 작업 안내</a>
                    </li>
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice/detail.html?seq=0000000394" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] 제GV60 페이스 커넥트 시스템 등록불량 개선 무상수리 고객통지문</a>
                    </li>
                      <li class="swiper-slide">
                        <a href="https://www.genesis.com/kr/ko/support/notice/detail.html?seq=0000000405" role="button" class="noti" target="_blank" title="새창" rel="noreferrer">[공지사항] 제네시스 멤버십 제휴서비스 종료 안내 입니다.</a>
                    </li>
                    </ul>
    
                    <div class="swiper-state">
                        <button type="button" class="stop on" aria-label="슬라이드 자동 이동 정지"></button>
                        <button type="button" class="play" aria-label="슬라이드 자동 이동 시작"></button>
                    </div>
                    <div class="swiper-button-next"></div>
                    <div class="swiper-button-prev"></div>
                </div>
                
            </div>
          

        </section> */}
        {/* //공지사항 */}

        {/* 아코디언 테스트 */}
        <Accordion 
            data={menuData} 
            type={"type1"}
            device={"accordion_mo"}
        />


        <section class="footer_sec all_menu">
            <div class="g_inner accordion_mo type1">
                {/* 모델 */}
                <div class="item">
                    <button type="button" class="acco_head"><strong class="tit">모델</strong></button>
                    <ul class="acco_body">
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90 LONG WHEEL BASE</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G90</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G80</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">ELECTRIFIED G80</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70.html" role="button" target="_blank" title="새창" rel="noreferrer">G70</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70-shooting-brake/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">G70 SHOOTING BRAKE</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv80/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">GV80</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">GV70</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/electrified-gv70/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">ELECTRIFIED GV70</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/highlights.html" role="button" target="_blank" title="새창" rel="noreferrer">GV60</a></li>
                    </ul>
                </div>
                {/* //모델 */}
                {/* 구매 */}
                <div class="item">
                    <button type="button" class="acco_head"><strong class="tit">구매</strong></button>
                    <ul class="acco_body">
                        <li><a href="https://www.genesis.com/kr/ko/shopping/quote.html" role="button" target="_blank" title="새창" rel="noreferrer">견적내기</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/shopping/financial-program/program-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">구매 프로그램</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/shopping/electric-vehicle-purchase-guide.html" role="button" target="_blank" title="새창" rel="noreferrer">전기차 구매가이드</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/shopping/genesis-purchase.html" role="button" target="_blank" title="새창" rel="noreferrer">구매 상담 신청</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/shopping/genesis-spectrum.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스 스펙트럼</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/shopping/genesis-car-specifications-check.html" role="button" target="_blank" title="새창" rel="noreferrer">사양 조회하기</a></li>
                    </ul>
                </div>
                {/* //구매 */}
                {/* 체험 */}
                <div class="item">
                    <button type="button" class="acco_head"><strong class="tit">체험</strong></button>
                    <ul class="acco_body">
                        <li><a href="https://www.genesis.com/kr/ko/experience/space/space-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">스페이스</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/experience/genesis.html" role="button" target="_blank" title="새창" rel="noreferrer">시승 신청</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/experience/find-a-showroom.html" role="button" target="_blank" title="새창" rel="noreferrer">전시장 찾기</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/experience/genesis-driving-experience.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스 드라이빙 익스피리언스</a></li>
                    </ul>
                </div>
                {/* //체험 */}
                {/* 멤버스 */}
                <div class="item">
                    <button type="button" class="acco_head"><strong class="tit">멤버스</strong></button>
                    <ul class="acco_body">
                        <li><a href="https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스 멤버십</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html" role="button" target="_blank" title="새창" rel="noreferrer">MY GENESIS 앱</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/members/technology/overview.html" role="button" target="_blank" title="새창" rel="noreferrer">테크놀로지</a></li>
                        <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/genesis-service-network.html" role="button" target="_blank" title="새창" rel="noreferrer">차량관리 서비스</a></li>
                    </ul>
                </div>
            </div>
        </section>
        <section class="footer_sec sitemap mid">
            <div class="g_inner">
                <ul class="item btw_line">
                    <li><a href="https://www.genesis.com/kr/ko/sitemap.html" role="button" target="_blank" title="새창" rel="noreferrer">사이트맵</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/terms-conditions/website.html" role="button" target="_blank" title="새창" rel="noreferrer">이용약관</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/privacy-policy/website-member.html" role="button" target="_blank" title="새창" class="point_c_oran" rel="noreferrer">개인정보 처리방침</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/copyright.html" role="button" target="_blank" title="새창" rel="noreferrer">저작권 안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/warranty/gv80.html" role="button" target="_blank" title="새창" rel="noreferrer">보증안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/lemonlaw-rules.html" role="button" target="_blank" title="새창" rel="noreferrer">자동차 교환 및 환불 중재 규정 안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/lemonlaw.html" role="button">하자 재발 통보 안내</a></li>
                </ul>
                <ul class="item sns">
                    <li><a href="https://www.facebook.com/GenesisWorldwide" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-brands fa-square-facebook"></i>
                        <span class="blind">페이스북</span>
                    </a></li>
                    <li><a href="https://www.instagram.com/genesis_worldwide/" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-brands fa-instagram"></i>
                        <span class="blind">인스타그램</span>
                    </a></li>
                    <li><a href="https://www.youtube.com/genesisworldwide" role="button" target="_blank" title="새창" rel="noreferrer">
                        <i class="fa-brands fa-youtube"></i>
                        <span class="blind">유튜브</span>
                    </a></li>
                </ul>
            </div>
        </section>
        
        <section class="footer_sec btm line_black_long">
            <p class="copyright">
                © Copyright 2023 Hyundai Motor Company.<br />All Rights Reserved.
            </p>
        </section>
    </footer>
	);
}

export default Footer;
