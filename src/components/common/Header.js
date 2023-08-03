import { Link } from 'react-router-dom';
import { memo, useRef } from 'react';

import AllMenu from './AllMenu'
import Nav from './nav/Nav';


function Header({ type }) {
	const allMenu = useRef(null);
	const navRef = useRef(null);
	return (
		<header id="header" className={type} ref={navRef}>
			<div className={`g_inner ${type === 'main' ? 'full' : ''}`}>
				<nav className="header_wrap" >
					<h1><Link to='/' ><span className="blind">제네시스 로고</span></Link></h1>
					<Nav className={"header_nav"} />
					<button type='button' className="popup_btn header_all_menu" ref={allMenu}>
						<span className="line"></span>
						<span className="blind">전체 메뉴 열기</span>
						{/* <FontAwesomeIcon icon={faBars} /> */}
					</button>

					<AllMenu target={allMenu} navRef={navRef} />
				</nav>
			</div>
		</header>
	);
}

export default memo(Header);
