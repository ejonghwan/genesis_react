import ImgList from '../common/list/ImgList';
import { outerDesignData } from '../common/data/OuterDesignData';

const OuterDesign = () => {
    
    return (
        <article className="g_inner exper ani mo_full ani_type2 show">
            <h2 className="gl_title">Genesis Design</h2>
            <p className="gl_subtxt">크레스트 그릴과 날렵한 두 줄 램프로 제네시스 엠블럼을 형상화한 전면부, <br className="mo_none" />슬릭하게 이어지는 파라볼릭 라인의 측면부와 당당하고 안정감 있는 모습의 후면부가 어우러져 럭셔리 디자인을 재정의합니다.<br /><br />
            제네시스 윙로고에서 영감을 받은 ‘크레스트 그릴’과 날개 형상을 닮은 두 줄의 ‘쿼드램프’가 적용되어 당당하고 대범한 G70 고유의 캐릭터를 표현합니다. <br className="mo_none"/>또한 크레스트 그릴 높이를 쿼드램프보다 낮게 구성하여 당장에라도 뛰쳐나갈 듯한 역동적 캐릭터를 표현하였습니다.</p>

            <ImgList data={outerDesignData} className={"g_list type2"} />
        </article>
    )
}

export default OuterDesign;

