import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List.js'

function App() {
const [todo, setTodo] = useState(['start']);
const [inputValue, setInputValue] = useState();
const [loading, setLoading] = useState(false);

const handleChange = (e) => {
  setInputValue(e.target.value);
}

const createData = (e) => { //넣어주는애
  e.preventDefault();
  setTodo([...todo, {title:inputValue, id:todo.length}])
}

const handleData = async () => { //받아온 패칭데이터를 지금 존재하는 todo 데이터에 넣음 
  setLoading(true)
  const data = await fetch('http://jsonplaceholder.typicode.com/todos')
  const dataJson = await data.json();
  setTodo(dataJson)
  console.log(dataJson)
  setLoading(false)
}


useEffect( () => {
  console.log('new render')
}, [todo] )

useEffect( () => {
  handleData()
}, [] )


  return (
    <div>
       <form>
          <input onChange={handleChange} />
          <button onClick={createData}>create</button>
        </form>
     <List todos={todo} loadings={loading} />
    </div>
  );
}

export default App;
