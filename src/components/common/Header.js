import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import AllMenu from './AllMenu'
import Nav from './nav/Nav';


function Header({ type }) {
	
	const allMenu = useRef(null);
	const navRef = useRef(null);

	useEffect(() => {
		console.log(allMenu)
	}, [])
	
	
	return (
		<header id="header" ref={navRef}>
			<div className="g_inner full">
				<nav className="header_wrap" >
					<h1>
						<Link to='/' ><span className="blind">제네시스 로고</span></Link>
					</h1>
				<Nav className={"header_nav"} />
				{/* <div ref={navRef}>testest</div> */}
				
				
					<a className="popup_btn header_all_menu" ref={allMenu}>
						<span className="line"></span>
						<span className="blind">전체 메뉴 열기</span>
						{/* <FontAwesomeIcon icon={faBars} /> */}
					</a>

					<AllMenu target={allMenu} navRef={navRef} />
				</nav>
			</div>
		</header>
	);
}

export default Header;
