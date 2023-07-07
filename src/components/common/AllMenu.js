import React, { useRef, useEffect } from 'react';
import Modal from '../common/Modal.js'
import Accordion from './accordion/Accordion.js';
import { accData } from './data/MenuData.js';
import Nav from './nav/Nav.js';

const AllMenu = ({ target, navRef }) => {
    const modal = useRef(null);

    useEffect(() => {
        target.current.addEventListener('click', modal.current.open(target.current))
        navRef.current.addEventListener('click', modal.current.close(target.current))
        // console.log(navRef)
    }, [])

    return (
        <Modal ref={modal} type={'allmenu'}>
            {/* 팝업헤더 */}
            <div className="pupup_type1_header g_inner pc_none">
                <h2 className="all_menu_title">프로모션 메뉴</h2>
            </div>

            <Nav className={"sub_menu pc_none"}/>

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
        </Modal>
    )
}

export default AllMenu;