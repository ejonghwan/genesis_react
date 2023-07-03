const Menu = ({category = null, conts, type}) => {
    return (
        <div className={type}>
            {category && <strong className="tit">{category}</strong>}
            
            <ul>
                {conts.map((item, idx) => <li key={idx}><a href={item.link} role="button" target="_blank" title="새창">{item.title}</a></li>)}
            </ul>
        </div>
    )
}
export default Menu;