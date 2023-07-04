import React, { useRef, useEffect } from 'react';
import Modal from '../common/Modal.js'
import Accordion from './accordion/Accordion.js';
import { accData } from './data/MenuData.js';

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
                        <Accordion 
                            data={accData} 
                            className={"type1 g_inner"}
                            device={"accordion_mo"}
                        />
                    </article>
                
                </div>
                {/* //팝업 바디 */}
            </section>
        </Modal>
    )
}

export default AllMenu;