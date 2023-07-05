import { useState, useEffect } from "react";



const TabBody = ({ children }) => {


    return (
        <ul className="tab_body">
            {children.map(item => <li className="tab_body_item">{item}</li>)}
        </ul>
    )
}

export default TabBody;