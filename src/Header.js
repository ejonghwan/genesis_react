import React from 'react';
import './Info.css'


const Header = ({ todos }) => {

    const headerStyle = {
        padding: '20px 5px'
    }

    return (
        <div style={headerStyle}>
            목록 
            {
                todos.filter( v => v.completed === true).length
            } 
            개가 남았습니다
        </div>
    )
}

export default Header;