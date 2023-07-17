const ImgListItem = ({ data }) => {
    const { itemClassName, src, alt, href, pointEvt, loading } = data;
    return (
        <div className={itemClassName}>
            <a href={href} role="button" style={{ pointerEvents: pointEvt }}>
                <img src={src} alt={alt} loading={loading} />
            </a>
        </div>
    );
};
export default ImgListItem;