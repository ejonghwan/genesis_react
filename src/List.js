import React from 'react';
import './Info.css'
import Info from './Info'

const List = ({ todos, loading, onClear }) => {


    
    let list = <div>loading.......</div> ;   
    if(!loading) list = todos.map( d => <Info onClear={onClear} key={d.id} todos={d} /> )



    return (
            <div className="box">
                {list}
            </div>
    )
}


export default List;