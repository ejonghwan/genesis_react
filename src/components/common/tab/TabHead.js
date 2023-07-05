import { useState, useEffect } from "react";



const TabHead = ({ heads }) => {

    // console.log(heads)
    const handleTabClick = idx => {
        return e => {
            console.log(idx)
        }
    }

    return (
        <ul class="tab_header" aria-labelledby="tab_type1_tit" role="tablist">
            {heads.map((item, idx) => (
            <li class="tab_header_item" onClick={handleTabClick(idx)} key={idx}>
                <button type="button">{item}</button>
            </li>
            ))}
        </ul>
)
}

export default TabHead;