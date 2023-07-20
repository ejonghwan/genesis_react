
const TabBody = ({ children, Index }) => {
    return (
        <ul className="tab_body">
            {children.map((item, idx) => <li className={`tab_body_item ${ Index === idx && "active" }`} key={idx}>{ Index === idx && item}</li>)}
        </ul>
    )
}
export default TabBody;