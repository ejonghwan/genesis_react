import React from 'react';
import './Info.css'

const Info = ({ todos, onClear }) => {

    const handleToggle = () => {
        onClear(todos.id)
        console.log(todos)
    }

    const inClass = !todos.completed ? 'line' : null

    return (
        <li onClick={handleToggle} className={inClass}>
            {todos.id} - {todos.title}
        </li>
    )
}

export default Info;