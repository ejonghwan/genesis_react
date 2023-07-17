import { Fragment } from 'react';

const ContentListItem = ({ data }) => {

    const { src, alt, title, content, href, isBtn } = data;

    return (
        <Fragment>
            <div className="g_content_img">
                <img src={src} alt={alt} loading="lazy" />
            </div>
            <div className="g_content_txt">
                <strong>{title}</strong>
                <p>{content}</p>
                {isBtn &&  <a href={href} role="button" className="arrow_btn black" target="_blank" title="새창">더 알아보기</a>}
            </div>
        </Fragment>
    );
};

export default ContentListItem;