import Img from '../../common/image/Img';

const ImgListItem = ({ data }) => {
    const { itemClassName, src, webp, alt, href, pointEvt, loading } = data;
    return (
        <div className={itemClassName}>
            <Img 
                webpSrc={webp}
                imageSrc={src}
                alt={alt}
                isSkeleton={true}
            />
        </div>
    );
};
export default ImgListItem;