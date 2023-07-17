import img01 from '../../assets/images/main/genesis-kr-busan-motor-show-genesisbusan-12-desktop-mobile-1220x600-ko.jpg'
import img02 from '../../assets/images/main/genesis-related-contents-banner-digital-service-desktop-630x404-kr.webp'
import img03 from '../../assets/images/main/genesis-related-contents-banner-members-desktop-630x404-kr.webp'
import ContentList from '../common/list/ContentList'


const Contents = () => {
    const list = [
        {
            src: img01,
            alt: " ",
            title: "이벤트", 
            content: "제네시스에서 진행중인 다양한 이벤트 정보를 전해 드립니다.",
            href: "https://www.genesis.com/kr/ko/support/genesis-events.html",
            isBtn: true,
        },
        {
            src: img02,
            alt: " ",
            title: "디지털 서비스", 
            content: "제네시스의 디지털 서비스는 첨단 신기술로 당신과 차가 함께 하는 일상에 편리함을 한층 더해줍니다.",
            href: "https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html",
            isBtn: true,
        },
        {
            src: img03,
            alt: " ",
            title: "멤버스", 
            content: "제네시스 오너분들께만 주어지는 특별한 혜택과 이상적인 경험을 선사합니다.",
            href: "https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html",
            isBtn: true,
        },
    ]

    return (
        <article className="g_inner con ani ani_type1 show">
        <h2 className="gl_title">연관 컨텐츠</h2>
        <ContentList data={list} />
    </article>
    )
}




export default Contents;