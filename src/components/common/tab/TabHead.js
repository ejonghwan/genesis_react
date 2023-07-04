import { useState, useEffect } from "react";



const TabHead = ({ heads }) => {

    console.log(heads)

    return (
        <ul class="tab_header" aria-labelledby="tab_type1_tit" role="tablist">
            {heads.map(item => <li class="tab_header_item"><button type="button">{item}</button></li>)}
        </ul>
)
}

export default TabHead;