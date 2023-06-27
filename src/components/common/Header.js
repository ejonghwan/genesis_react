import { Link, NavLink } from 'react-router-dom';

const Header = ({ type }) => {


	const active = {
		color: "red",
	}


	return (
		// <header classNameName={type}>
		// 	<Link to="/"><h1>Logo</h1></Link>
		// 	<ul id="gnb">
		// 		<li><NavLink to="/department" activeStyle={active}>department</NavLink></li>
		// 		<li><NavLink to="/community" activeStyle={active}>community</NavLink></li>
		// 		<li><NavLink to="/gallery" activeStyle={active}>gallery</NavLink></li>
		// 		<li><NavLink to="/youtube" activeStyle={active}>youtube</NavLink></li>
		// 		<li><NavLink to="/contact" activeStyle={active}>contact</NavLink></li>
		// 		<li><NavLink to="/member" activeStyle={active}>member</NavLink></li>
				
		// 	</ul>
		// </header>

		<header id="header">
			<div className="g_inner">
				<nav className="header_wrap">
					<h1>
						<a href="javascript:;" role="button">
							<span className="blind">제네시스 로고</span>
						</a>
					</h1>
					<ul className="header_nav">
						<li><a href="javascript:;" role="button" onclick="">모델</a></li>
						<li><a href="javascript:;" role="button">구매</a></li>
						<li><a href="javascript:;" role="button">체험</a></li>
						<li><a href="javascript:;" role="button">멤버스</a></li>
						<li><a href="javascript:;" role="button">제네시스</a></li>
					</ul>
					<ul className="header_ico">
						<li>
							<a href="javascript:;" role="button">
								<i className="fa-solid fa-fingerprint"></i>
								<span className="blind">마이 페이지</span>
							</a>
						</li>
						<li>
							<a href="javascript:;" role="button">
							<i className="fa-solid fa-magnifying-glass"></i>
							<span className="blind">검색 레이어 열기</span>
						</a>
						</li>
					</ul>
					<button className="popup_btn header_all_menu" type="button" >
						<span className="line"></span>
						<span className="blind">전체 메뉴 열기</span>
					</button>
				</nav>
			</div>
		</header>
	);
};

export default Header;
