import Img from '../../common/image/Img';

const ImgListItem = ({ data }) => {
    const { itemClassName, src, webp, alt, href, pointEvt, loading } = data;
    return (
        <div className={itemClassName}>
            <a href={href} role="button" style={{ pointerEvents: pointEvt }}>
                {/* <img src={src} alt={alt} loading={loading} /> */}
                <Img 
                    webpSrc={webp}
                    imageSrc={src}
                    alt={alt}
                />
            </a>
        </div>
    );
};
export default ImgListItem;