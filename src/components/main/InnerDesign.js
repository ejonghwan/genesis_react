
import g01 from '../../assets/images/main/m01.jpg'
import g02 from '../../assets/images/main/m02.jpg'
import g03 from '../../assets/images/main/m03.jpg'
import g04 from '../../assets/images/main/m04.jpg'
import g05 from '../../assets/images/main/m05.jpg'
import g06 from '../../assets/images/main/m06.jpg'


const InnerDesign = () => {
    return (
        <article class="g_inner gall ani mo_full ani_type2 show">
        <h2 class="gl_title">inside</h2>
        <p class="gl_subtxt">운전석 공간은 제네시스의 실내 디자인 철학 ‘여백의 미’를 바탕으로 신기술이 적용된 첨단 장치 같은 이미지와 <br class="mo_none"/>아날로그 감성이 담긴 고급스러운 디테일이 조화를 이룹니다.</p>
        <ul class="g_list type2">
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g01} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g02} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g03} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g04} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g05} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
                <li class="grid_item">
                    <div class="cont1 type1">
                        <a href="javascript:;" role="button">
                            <img src={g06} alt="" loading="lazy" />
                        </a>
                    </div>
                </li>
            </ul>
        </article>
    )
}

export default InnerDesign;