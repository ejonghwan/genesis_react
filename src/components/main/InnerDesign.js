import ImgList from '../common/list/ImgList';
import g00 from '../../assets/images/main/m01.jpg'
import g01 from '../../assets/images/main/m02.jpg'
import g02 from '../../assets/images/main/m03.jpg'
import g03 from '../../assets/images/main/m04.jpg'
import g04 from '../../assets/images/main/m05.jpg'
import g05 from '../../assets/images/main/m06.jpg'


const InnerDesign = () => {

    const list = [
        {
            itemClassName: "cont1 type1",
            src: g00, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
        {
            itemClassName: "cont1 type1",
            src: g01, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
        {
            itemClassName: "cont1 type1",
            src: g02, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
        {
            itemClassName: "cont1 type1",
            src: g03, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
        {
            itemClassName: "cont1 type1",
            src: g04, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
        {
            itemClassName: "cont1 type1",
            src: g05, 
            alt: " ", 
            href: "#", 
            pointEvt: "none", 
            loading: "lazy"
        },
    ]    

    return (
        <article className="g_inner gall ani mo_full ani_type2 show">
            <h2 className="gl_title">inside</h2>
            <p className="gl_subtxt">운전석 공간은 제네시스의 실내 디자인 철학 ‘여백의 미’를 바탕으로 신기술이 적용된 첨단 장치 같은 이미지와 <br className="mo_none"/>아날로그 감성이 담긴 고급스러운 디테일이 조화를 이룹니다.</p>
            <ImgList data={list} className={"g_list type2"} />
        </article>
    )
}

export default InnerDesign;