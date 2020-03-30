import React from 'react'
import Info from './Info'
import './Info.css'

const List = ({ info, bool, toggle }) => {

    let list = <div>loading ....</div>
    if(!bool) list = info.map( data => <Info key={data.id} info={data} toggle={toggle} /> )

    return (
        <ul className="box">
            {list}
        </ul>
    )
}

export default List;