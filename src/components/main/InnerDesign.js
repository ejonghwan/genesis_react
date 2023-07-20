import ImgList from '../common/list/ImgList';
import { innerDesignData } from '../common/data/innerDesignData';


const InnerDesign = () => {
    return (
        <article className="g_inner gall ani mo_full ani_type2 show">
            <h2 className="gl_title">inside</h2>
            <p className="gl_subtxt">운전석 공간은 제네시스의 실내 디자인 철학 ‘여백의 미’를 바탕으로 신기술이 적용된 첨단 장치 같은 이미지와 <br className="mo_none"/>아날로그 감성이 담긴 고급스러운 디테일이 조화를 이룹니다.</p>
            <ImgList data={innerDesignData} className={"g_list type2"} />
        </article>
    )
}

export default InnerDesign;