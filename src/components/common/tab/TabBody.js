import { useState, useEffect } from "react";



const TabBody = ({ children, Index }) => {

    console.log('tab body', Index)

    return (
        <ul className="tab_body">
            {children.map(item => <li className="tab_body_item">{item}</li>)}
        </ul>
    )
}

export default TabBody;