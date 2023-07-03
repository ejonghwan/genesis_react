import React, { useRef, useEffect } from 'react';
import Modal from '../common/Modal.js'

const AllMenu = ({ target }) => {
    const modal = useRef(null);

    useEffect(() => {
        target.current.addEventListener('click', modal.current.open(target.current))
      
        return () => {
        }
    }, [])

    return (
        <Modal ref={modal} type={'allmenu'}>
            <section id="pupup_type1" className="popup all_menu">
                {/* 팝업헤더 */}
                <div className="pupup_type1_header g_inner pc_none">
                    <h2 className="all_menu_title">프로모션 메뉴</h2>
                </div>

                <ul className="sub_menu pc_none">
                    <li><a href="./pages/gallery.html" role="button" className="arrow_btn">Gallery</a></li>
                    <li><a href="./pages/location.html" role="button" className="arrow_btn">Contact</a></li>
                    <li><a href="./pages/youtube.html" role="button" className="arrow_btn">Youtube</a></li>
                    <li><a href="./pages/members.html" role="button" className="arrow_btn">Members</a></li>
                </ul>

                <div className="pupup_type1_header g_inner">
                    <h2 className="all_menu_title">전체메뉴</h2>
                </div>
                {/* //팝업 헤더 */}
                {/* 팝업 바디 */}
                <div className="pupup_type1_body" tabIndex="0">
                    <article className="footer_sec all_menu pop">
                        <div className="g_inner accordion_mo type1 pd_none">
                            {/* 모델 */}
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">모델</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
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
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">구매</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
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
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">체험</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
                                    <li><a href="https://www.genesis.com/kr/ko/experience/space/space-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">스페이스</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/experience/genesis.html" role="button" target="_blank" title="새창" rel="noreferrer">시승 신청</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/experience/find-a-showroom.html" role="button" target="_blank" title="새창" rel="noreferrer">전시장 찾기</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/experience/genesis-driving-experience.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스 드라이빙 익스피리언스</a></li>
                                </ul>
                            </div>
                            {/* //체험 */}
                            {/* 멤버스 */}
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">멤버스</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
                                    <li><a href="https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스 멤버십</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html" role="button" target="_blank" title="새창" rel="noreferrer">MY GENESIS 앱</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/members/technology/overview.html" role="button" target="_blank" title="새창" rel="noreferrer">테크놀로지</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/genesis-service-network.html" role="button" target="_blank" title="새창" rel="noreferrer">차량관리 서비스</a></li>
                                </ul>
                            </div>
                            {/* //멤버스 */}
                            {/* 제네시스 */}
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">제네시스</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
                                    <li><a href="https://www.genesis.com/kr/ko/genesis/brand/brand-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">브랜드</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/genesis/concept-car/concept-car-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">콘셉트카</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/genesis/genesis-x-golf/overview.html" role="button" target="_blank" title="새창" rel="noreferrer">제네시스X골프</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/genesis/motorshow/motorshow-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">모터쇼</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/genesis/roadtrip/roadtrip-overview.html" role="button" target="_blank" title="새창" rel="noreferrer">로드트립</a></li>
                                </ul>
                            </div>
                            {/* //제네시스 */}
                            {/* 고객센터 */}
                            <div className="item">
                                <button type="button" className="acco_head">
                                    <strong className="tit">고객센터</strong>
                                    <span className="blind">자세히보기</span>
                                </button>
                                <ul className="acco_body">
                                    <li><a href="https://www.genesis.com/kr/ko/support/customer-support.html" role="button" target="_blank" title="새창" rel="noreferrer">고객센터 안내</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/support/notice.html" role="button" target="_blank" title="새창" rel="noreferrer">공지사항</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/support/genesis-events.html" role="button" target="_blank" title="새창" rel="noreferrer">이벤트</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/support/faq.html" role="button" target="_blank" title="새창" rel="noreferrer">자주 묻는 질문</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/support/download-center/genesis-models.html" role="button" target="_blank" title="새창" rel="noreferrer">다운로드 센터</a></li>
                                    <li><a href="https://www.genesis.com/kr/ko/support/pr-center.html" role="button" target="_blank" title="새창" rel="noreferrer">PR 센터</a></li>
                                </ul>
                            </div>
                            {/* //고객센터 */}
                        
                        </div>
                    </article>
                
                </div>
                {/* //팝업 바디 */}
            </section>
        </Modal>
    )
}

export default AllMenu;