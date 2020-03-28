import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List.js'


const useFetcingData = (target, url) => {
  const [loading, setLoading] = useState(false)
  const handleData = async () => {
    setLoading(true)
    const response = await fetch(url);
    const dating = await response.json()
    target(dating)
    setLoading(false)
  }

  useEffect( () => {
    handleData()
  }, [] )

  return loading


}



const App = () => {

  const [todo, setTodo] = useState(['first data'])
  const [inputData, setInputData] = useState('')
  

  const handleChange = (e) => {
    setInputData(e.target.value)
    console.log(e.target.value)
  }

  const updata = (e) => {
    e.preventDefault()
    setTodo([ ...todo, {title:inputData, id:todo.length+1} ])
    setInputData('')
  }

  const aa = useFetcingData(setTodo, 'http://jsonplaceholder.typicode.com/todos')



  return (
    <div>
      <input onChange={handleChange} value={inputData}/>
      <button onClick={updata}>click me</button>
      <List todos={todo} loading={aa} />
    </div>
  );
}

export default App;
