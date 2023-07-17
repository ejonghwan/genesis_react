import { Fragment } from 'react';

const VisualItem = ({ data }) => {

    const {title, subTxt_1, subTxt_2, more, Learn, src, muted, loop, playsInline } = data
 
    return (
        <div className="inner">
            <div className="main_visual_txt">
                <strong className="g_sans thum" aria-hidden="true">
                    {title}
                    <br />
                    <span>{subTxt_1}</span>
                </strong>
                <div className="pos_txt">
                    <h2 className="g_sans">{title}</h2>
                    <p className="pos_txt_sub">{subTxt_2}</p>
                </div>
                <div className="pos_btn">
                    <a href={more} role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
                    <a href={Learn} role="button" className="arrow_btn">더 알아보기</a>
                    </div>
            </div>
            <figure className="main_visual_slide_video">
                <video src={`${src}#t=0.5`} muted={muted} loop={loop} playsInline={playsInline} ></video>
            </figure>
        </div>
    );
};

export default VisualItem;