import React from 'react';

const List = ( {todos, loadings} ) => {
    let list = <div>loadings...</div>;
    if(!loadings) return todos.map( data => <li key={data.id}>{data.id}  - {data.title}</li>)
    return (
        <ul>
           {list}
        </ul>
    )
} 

export default List;