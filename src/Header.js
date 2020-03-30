import React from 'react'


const Header = ({ info }) => {
    return (
    <div>체크안된 항목 : {info.filter( d => d.completed === true).length}</div>
    )
}

export default Header;