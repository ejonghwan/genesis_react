import React, { useState, useEffect } from 'react';
import Accordion from "./accordion/Accordion";
import SlideWrap from './slide/SlideWrap';
import { accData } from './data/MenuData';
import { NoticeData } from '../common/data/NoticeData';
import { faSquareFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {

     // comm
     const randomId = e => Math.floor(Math.random() * 10000);
     const initalPosts = [
        { id: randomId(), title: 'Quisquam reiciendis', content: 'Quisquam reiciendis cumque iusto eius quo modi dolorum eveniet quos, qui explicabo nemo in molestiae totam, ullam quod.', done: false, modify: false },
		{ id: randomId(), title: 'Earum suscipit quo', content: 'Earum suscipit quo consequuntur inventore nihil corrupti quas necessitatibus ipsum itaque iste eum, libero dolores nemo laborum at fugit consectetur veniam tempora aliquam sequi natus aut.', done: false, modify: false },
		{ id: randomId(), title: 'adipisicing elit. ', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. ', done: false, modify: false },
		{ id: randomId(), title: 'Sit autem, temporibus aliquid ipsam', content: 'Sit autem, temporibus aliquid ipsam beatae ab vero quam similique sunt repellendus libero rem illum, optio, accusantium inventore deleniti nihil fuga iusto! Dolorem deleniti iure recusandae culpa atque molestiae consequuntur ducimus repellendus temporibus, eius esse neque. Cupiditate vel eos dolor!', done: false, modify: false },
		{ id: randomId(), title: 'Sunt debitis itaque iste voluptates,', content: 'Sunt debitis itaque iste voluptates, tempora corporis ratione tenetur magni provident similique ut sequi unde neque harum quos rerum eaque tempore! Consequatur dolor molestias similique ', done: false, modify: false },
		{ id: randomId(), title: 'Laborum, similique.', content: 'Laborum, similique. Nam tempore, at ducimus iste neque exercitationem porro commodi! Illo, cumque aspernatur quos quaerat ipsam nisi quisquam ducimus eos laboriosam ex veritatis magnam itaque sapiente ea qui, iste molestiae porro nam non fugit? ', done: false, modify: false },
     ]
 
     const [Posts, setPosts] = useState(initalPosts);
     const getLocalData = () => {
         const data = localStorage.getItem('post');
         const obj = JSON.parse(data)
         return data ? setPosts( obj ) : initalPosts
     }
 
     useEffect(() => {
         getLocalData();
         // console.log('pos?', Posts)
     }, [])
 
    
	return (
		<footer id="footer">
       
        {/* 쉐어 */}
        <section className="footer_sec share">
            <div className="g_inner">
                <ul>
                    <li className="txt">Share</li>
                    <li><a href="http://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.genesis.com%2Fkr%2Fko%2Fmain.html" role="button" target="_blank" title="새창" rel="noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                        <span className="blind">페이스북</span>
                    </a></li>
                    <li><a href="https://twitter.com/i/flow/login" role="button" target="_blank" title="새창" rel="noreferrer">
                         <FontAwesomeIcon icon={faTwitter} />
                        <span className="blind">트위터</span>
                    </a></li>
                   
                </ul>
            </div>
        </section>
     
        {/* 커뮤니티 */}
        <section className="footer_sec notice">
            <SlideWrap data={Posts} defaultText={"[커뮤니티]"} />
        </section>


        <section className="footer_sec all_menu">
            <Accordion 
                data={accData.filter((_, idx) => idx < 4)} 
                className={"type1 g_inner"}
                device={"accordion_mo"}
            />
        </section>
        {/* 공지사항 */}
        <section className="footer_sec notice">
            <SlideWrap data={NoticeData} defaultText={"[공지사항]"} />
        </section>


        <section className="footer_sec sitemap mid">
            <div className="g_inner">
                <ul className="item btw_line">
                    <li><a href="https://www.genesis.com/kr/ko/sitemap.html" role="button" target="_blank" title="새창" rel="noreferrer">사이트맵</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/terms-conditions/website.html" role="button" target="_blank" title="새창" rel="noreferrer">이용약관</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/privacy-policy/website-member.html" role="button" target="_blank" title="새창" className="point_c_oran" rel="noreferrer">개인정보 처리방침</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/copyright.html" role="button" target="_blank" title="새창" rel="noreferrer">저작권 안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/terms-of-use/warranty/gv80.html" role="button" target="_blank" title="새창" rel="noreferrer">보증안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/lemonlaw-rules.html" role="button" target="_blank" title="새창" rel="noreferrer">자동차 교환 및 환불 중재 규정 안내</a></li>
                    <li><a href="https://www.genesis.com/kr/ko/members/vehicle-management-service/lemonlaw.html" role="button">하자 재발 통보 안내</a></li>
                </ul>
                <ul className="item sns">
                    <li><a href="https://www.facebook.com/GenesisWorldwide" role="button" target="_blank" title="새창" rel="noreferrer">
                        <FontAwesomeIcon icon={faSquareFacebook} />
                        <span className="blind">페이스북</span>
                    </a></li>
                    <li><a href="https://www.instagram.com/genesis_worldwide/" role="button" target="_blank" title="새창" rel="noreferrer">
                         <FontAwesomeIcon icon={faInstagram} />
                        <span className="blind">인스타그램</span>
                    </a></li>
                    <li><a href="https://www.youtube.com/genesisworldwide" role="button" target="_blank" title="새창" rel="noreferrer">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span className="blind">유튜브</span>
                    </a></li>
                </ul>
            </div>
        </section>
        
        <section className="footer_sec btm line_black_long">
            <p className="copyright">
                © Copyright 2023 Hyundai Motor Company.<br />All Rights Reserved.
            </p>
        </section>
    </footer>
	);
}

export default Footer;
