import React from 'react'

const Info = ({ info, toggle }) => {

    const handleToggle = () => {
        toggle(info.id)
    }

    const inClass = info.completed === true ? null : 'line'

    return (
        <li onClick={handleToggle} className={inClass} >{info.id} - {info.title} <button>change</button></li>
    )
}

export default Info