import React, { useState } from 'react'

const Info = ({ info, toggle, reChange }) => {

    const [ input, setInput ] = useState([])
    const [ newInput, setNewInput ] = useState('')
    const [ bool, setBool ] = useState(true)

    const handleToggle = () => {
        toggle(info.id)
    }

    const reChnage = () => {
        if(!bool){ setBool(true) } else { setBool(false) }
        setNewInput(info.title)
        reChange(info.id, input)
        // console.log(input)
        
    }

    const inputChnage = (e) => {
        setNewInput(e.target.value)
        setInput([{'title':newInput, 'id': info.id, 'completed': info.completed}])
        // console.log(input)
    }

    const inClass = info.completed === true ? null : 'line'

    return (
        <li className={inClass}>
            {newInput}
                {
                    !bool ? (
                        <div><input 
                            value={newInput}
                            onChange={inputChnage}
                            />
                        </div>
                    ) : (
                        <div>{info.id} - {info.title}</div>
                    )
                }
                <button onClick={reChnage}>
                    {
                        bool ? 'change' : 'ok'
                    }
                </button>
                <button onClick={handleToggle}>chack</button>
                
        </li>
    )
}

export default Info