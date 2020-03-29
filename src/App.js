import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List.js'
import useFetcingData from './FetchingData'
import Header from './Header';




const App = () => {

  const [todo, setTodo] = useState(['first data'])
  const [inputData, setInputData] = useState('')
  const [id, setId] = useState(0)
  

  const testFn = () => {
    setId(id + 1)
    console.log(id)
  }
  console.log(id)
  const handleChange = (e) => {
    setInputData(e.target.value)
    console.log(e.target.value)
  }

  const updata = (e) => {
    e.preventDefault()
    setTodo([ ...todo, {'title':inputData, 'id':todo.length+1, 'completed': true } ])
    setInputData('')
  }

  const aa = useFetcingData(setTodo, 'http://jsonplaceholder.typicode.com/todos', todo)

  const handleClear = (id) => {
    // debugger
    const update = todo.map( data => {
      if(data.id === id) {
        data.completed ? data.completed = false : data.completed = true
      }
      return data;
    })

    setTodo(update)
  }


  useEffect( () => {
    console.log('새로운 내용 렌더')
    console.log(todo)
  }, [todo] )

  return (
    <div className="App">
      <Header todos={todo}/>
      <input onChange={handleChange} value={inputData}/>
      <button onClick={updata}>click me</button>
      <List todos={todo} loading={aa} onClear={handleClear} />

      <button onClick={testFn}>testbtn</button>
    </div>
  );
}

export default App;
