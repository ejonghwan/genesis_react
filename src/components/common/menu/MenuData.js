import Menu from './Menu';

export const menuData = [
    {
        category: "모델",
        conts: [
            { title: "G90 LONG WHEEL BASE", link: "https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" }, 
            { title: "G90", link:"https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g90/highlights.html" },
            { title: "G80", link:"https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g80/highlights.html" },
            { title: "ELECTRIFIED G80", link:"https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/electrified-g80/highlights.html" },
            { title: "G70", link:"https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70.html" },
            { title: "G70 SHOOTING BRAKE", link:"https://www.genesis.com/kr/ko/models/luxury-sedan-genesis/g70-shooting-brake/highlights.html" },
            { title: "GV80", link:"https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv80/highlights.html" },
            { title: "GV70", link:"https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv70/highlights.html" },
            { title: "ELECTRIFIED GV70", link:"https://www.genesis.com/kr/ko/models/luxury-suv-genesis/electrified-gv70/highlights.html" },
            { title: "GV60", link:"https://www.genesis.com/kr/ko/models/luxury-suv-genesis/gv60/highlights.html" },
            { title: "", link:"" }
        ],
    },
    {
        category: "구매",
        conts: [
            { title: "견적내기", link:"https://www.genesis.com/kr/ko/shopping/quote.html" },
            { title: "구매 프로그램", link:"https://www.genesis.com/kr/ko/shopping/financial-program/program-overview.html" },
            { title: "전기차 구매가이드", link:"https://www.genesis.com/kr/ko/shopping/electric-vehicle-purchase-guide.html" },
            { title: "구매 상담 신청", link:"https://www.genesis.com/kr/ko/shopping/genesis-purchase.html" },
            { title: "제네시스 스펙트럼", link:"https://www.genesis.com/kr/ko/shopping/genesis-spectrum.html" },
            { title: "사양 조회하기", link:"https://www.genesis.com/kr/ko/shopping/genesis-car-specifications-check.html" },
        ],
    },
    {
        category: "체험",
        conts: [
            { title: "스페이스", link:"https://www.genesis.com/kr/ko/experience/space/space-overview.html" },
            { title: "시승 신청", link:"https://www.genesis.com/kr/ko/experience/genesis.html" },
            { title: "전시장 찾기", link:"https://www.genesis.com/kr/ko/experience/find-a-showroom.html" },
            { title: "제네시스 드라이빙 익스피리언스", link:"https://www.genesis.com/kr/ko/experience/genesis-driving-experience.html" }
        ],
    },
    {
        category: "멤버스",
        conts: [
            { title: "제네시스 멤버십", link:"https://www.genesis.com/kr/ko/members/genesis-membership/membership-overview/membership-information.html" },
            { title: "MY GENESIS 앱", link:"https://www.genesis.com/kr/ko/members/my-genesis-app/overview.html" },
            { title: "테크놀로지", link:"https://www.genesis.com/kr/ko/members/technology/overview.html" },
            { title: "차량관리 서비스", link:"https://www.genesis.com/kr/ko/members/vehicle-management-service/genesis-service-network.html" },
        ],
    },
    {
        category: "제네시스",
        conts: [
            { title: "브랜드", link:"https://www.genesis.com/kr/ko/genesis/brand/brand-overview.html" },
            { title: "콘셉트카", link:"https://www.genesis.com/kr/ko/genesis/concept-car/concept-car-overview.html" },
            { title: "제네시스X골프", link:"https://www.genesis.com/kr/ko/genesis/genesis-x-golf/overview.html" },
            { title: "모터쇼", link:"https://www.genesis.com/kr/ko/genesis/motorshow/motorshow-overview.html" },
            { title: "로드트립", link:"https://www.genesis.com/kr/ko/genesis/roadtrip/roadtrip-overview.html" },
        ],
    },
    {
        category: "고객센터",
        conts: [
            { title: "고객센터 안내", link:"https://www.genesis.com/kr/ko/support/customer-support.html" },
            { title: "공지사항", link:"https://www.genesis.com/kr/ko/support/notice.html" },
            { title: "이벤트", link:"https://www.genesis.com/kr/ko/support/genesis-events.html" },
            { title: "자주 묻는 질문", link:"https://www.genesis.com/kr/ko/support/faq.html" },
            { title: "다운로드 센터", link:"https://www.genesis.com/kr/ko/support/download-center/genesis-models.html" },
            { title: "PR 센터", link:"https://www.genesis.com/kr/ko/support/pr-center.html" },
        ],
    },
  
]

export const accData = [
    {   
        id:1,
        header: <strong class="tit">모델</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '모델' )[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
    },
    {
        id:2,
        header: <strong class="tit">구매</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '구매' )[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
       
    },
    {
        id:3,
        header: <strong class="tit">체험</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '체험')[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
        
    },
    {
        id:4,
        header: <strong class="tit">멤버스</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '멤버스')[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
         
    },
    {
        id:5,
        header: <strong class="tit">제네시스</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '제네시스' )[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
        
    },
    {
        id:6,
        header: <strong class="tit">고객센터</strong>, 
        body: (() => {
            let d = menuData.filter((item, idx) => item.category === '고객센터')[0];
            return <Menu conts={d.conts} key={d.idx} type={"item"} />
        })(),
        done: false,
    },
]