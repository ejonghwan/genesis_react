import { useState, useEffect, useRef } from "react";



const TabHead = ({ heads, setIndex }) => {

    const tabHeaderRef = useRef(null);

    // console.log(heads)
    const handleTabClick = idx => {
        return e => {
            setIndex(idx)
            
        }
    }

    return (
        <ul class="tab_header" aria-labelledby="tab_type1_tit" role="tablist" ref={tabHeaderRef}>
            {heads.map((item, idx) => (
            <li class="tab_header_item" onClick={handleTabClick(idx)} key={idx}>
                <button type="button">{item}</button>
            </li>
            ))}
        </ul>
)
}

export default TabHead;