import img01 from '../../assets/images/main/genesis-kr-busan-motor-show-genesisbusan-12-desktop-mobile-1220x600-ko.jpg'
import img02 from '../../assets/images/main/genesis-kr-busan-motor-show-genesisbusan-12-desktop-mobile-1220x600-ko.jpg'
import img03 from '../../assets/images/main/genesis-kr-busan-motor-show-genesisbusan-12-desktop-mobile-1220x600-ko.jpg'


const Contents = () => {
    return (
        <article class="g_inner con ani ani_type1 show">
        <h2 class="gl_title">연관 컨텐츠</h2>
        <div class="g_content">
            <ul>
                <li>
                    <div class="g_content_img">
                        <img src={img01} alt="" loading="lazy" />
                    </div>
                   <div class="g_content_txt">
                        <strong>이벤트</strong>
                        <p>제네시스에서 진행중인 다양한 이벤트 정보를 전해 드립니다.</p>
                        <a href="https://www.genesis.com/kr/ko/support/genesis-events.html" role="button" class="arrow_btn black" target="_blank" title="새창">더 알아보기</a>
                   </div>
                </li>
                <li>
                    <div class="g_content_img">
                        <img src={img02} alt="" loading="lazy" />
                    </div>
                   <div class="g_content_txt">
                        <strong>디지털 서비스</strong>
                        <p>제네시스의 디지털 서비스는 첨단 신기술로 당신과 차가 함께 하는 일상에 편리함을 한층 더해줍니다. </p>
                        <a href="https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html" role="button" class="arrow_btn black" target="_blank" title="새창">더 알아보기</a>
                   </div>
                </li>
                <li>
                    <div class="g_content_img">
                        <img src={img03} alt="" loading="lazy" />
                    </div>
                   <div class="g_content_txt">
                        <strong>멤버스</strong>
                        <p>제네시스 오너분들께만 주어지는 특별한 혜택과 이상적인 경험을 선사합니다.</p>
                        <a href="https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html" role="button" class="arrow_btn black" target="_blank" title="새창">더 알아보기</a>
                   </div>
                </li>
            </ul>
        </div>
    </article>
    )
}




export default Contents;