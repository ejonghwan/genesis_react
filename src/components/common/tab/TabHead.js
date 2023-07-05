import { useRef } from "react";

const TabHead = ({ heads, setIndex, Index }) => {

    const tabHeaderRef = useRef(null);
    const handleTabClick = idx => e => setIndex(idx)

    return (
        <ul className="tab_header" aria-labelledby="tab_type1_tit" role="tablist" ref={tabHeaderRef}>
            {heads.map((item, idx) => (
            <li className={`tab_header_item ${ Index === idx && 'active' }`} onClick={handleTabClick(idx)} key={idx} >
                <button type="button">{item}</button>
            </li>
            ))}
        </ul>
)
}

export default TabHead;