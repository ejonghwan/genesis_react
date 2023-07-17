import ContentListItem from "./ContentListItem";


const ContentList = ({ data }) => {
    return (
        <div className="g_content">
            <ul>
                {data.map((list, idx) => <li key={idx}><ContentListItem data={list} /></li>)}                
            </ul>
        </div>
    );
};

export default ContentList;