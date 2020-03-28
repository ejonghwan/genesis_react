import React from 'react';

const List = ( {todos, loading} ) => {

let list = <div>loading.......</div>    
if(!loading) return todos.map( d => <li>{d.id} - {d.title}</li> )

    return (
        <ul>
            {list}
        </ul>
    )
}


export default List;