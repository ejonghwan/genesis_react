import ContentList from '../common/list/ContentList';
import { relationContsData } from '../common/data/RelationContsData'; 

const Contents = () => {
    return (
        <article className="g_inner con ani ani_type1 show">
        <h2 className="gl_title">연관 컨텐츠</h2>
        <ContentList data={relationContsData} />
    </article>
    )
}
export default Contents;