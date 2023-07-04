import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import AllMenu from './AllMenu'


function Header({ type }) {
	const active = 'on';
	const allMenu = useRef(null);

	useEffect(() => {
		console.log(allMenu)
	}, [])
	
	
	return (
		
		<header id="header">
        <div className="g_inner full">
            <nav className="header_wrap">
                <h1>
					<Link to='/'><span className="blind">제네시스 로고</span></Link>
                   
                </h1>
                <ul className="header_nav">
					<li>
						<NavLink to='/gallery' activeClassName={active}>
							Gallery
						</NavLink>
					</li>
					<li>
						<NavLink to='/contact' activeClassName={active}>
							Contact
						</NavLink>
					</li>
					<li>
						<NavLink to='/youtube' activeClassName={active}>
							Youtube
						</NavLink>
					</li>
					<li>
						<NavLink to='/member' activeClassName={active}>
							Members
						</NavLink>
					</li>
					<li>
						<NavLink to='/community' activeClassName={active}>
							Community
						</NavLink>
					</li>
                </ul>
               
                <button className="popup_btn header_all_menu" type="button" ref={allMenu}>
                    <span className="line"></span>
                    <span className="blind">전체 메뉴 열기</span>
					{/* <FontAwesomeIcon icon={faBars} /> */}
                </button>

				<AllMenu target={allMenu} />
            </nav>
        </div>
    </header>
	);
}

export default Header;
