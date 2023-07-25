import { Fragment } from 'react';


const VisualItem = ({ data }) => {

    const {title, subTxt_1, subTxt_2, more, Learn, src, muted, loop, playsInline, preload, poster, img, img_webp } = data
 
    return (
        <div className="inner">
            <div className="main_visual_txt">
                <strong className=" thum" aria-hidden="true">
                    {title}
                    <br />
                    <span className='mo_none'>{subTxt_1}</span>
                </strong>
                <div className="pos_txt">
                    <h2 className="">{title}</h2>
                    <span className="pc_none pos_txt_sub" style={{ whiteSpace:"pre-line" }}>{subTxt_1}</span>
                    <p className="pos_txt_sub mo_none">{subTxt_2}</p>
                </div>
                <div className="pos_btn">
                    <a href={more} role="button" className="arrow_btn" target="_blank" title="새창" rel="noreferrer">견적내기</a>
                    <a href={Learn} role="button" className="arrow_btn">더 알아보기</a>
                    </div>
            </div>
            <picture className="main_visual_slide_img device_pc_none">
                <source srcSet={img_webp} type="image/webp" />
                <img src={img} alt={`${title} 차량 이미지`} />
            </picture>
            <figure className="main_visual_slide_video device_mo_none">
                <video src={`${src}`} preload={preload} poster={poster}  muted={muted} loop={loop} playsInline={playsInline} ></video>
                {/* {`${src}#t=0.5`} */}
            </figure>

            
        </div>

        
    );
};

export default VisualItem;