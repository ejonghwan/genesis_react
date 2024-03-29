const Slide = ({ item, defaultText }) => {
    return (
        <a href={item.link} role="button" className="noti" target="_blank" title="새창">{defaultText} {item.title}</a>
    );
};

export default Slide;