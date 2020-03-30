import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
import List from './List'
import useFetcingData from './useFetcingData'
import Header from './Header';

const App = () => {
  
  const [information, setInformation] = useState(['초기데이터'])
  const [inputData, setInputData] = useState('')


  const handleChange = (e) => {
    setInputData(e.target.value)
  }

  const onCreate = (e) => {
    e.preventDefault();
    setInformation([ ...information, {'title':inputData, 'id': information.length+1, 'completed': true} ])
    setInputData('')
  }

  const handleToggle = (id) => {
    const changeData = information.map( d => {
      if(d.id === id) {
        d.completed ? d.completed = false : d.completed = true
      }
      return d
    })
    setInformation(changeData)
    console.log(information)
  }

  const reChange = (id, data) => {
    const updating = information.map( d => {
      if(d.id === id) {
        setInformation(data)
      }
      console.log(data)
      return d
    })
    setInformation(updating)
    // console.log(updating)asdasd
  }

  const fetch = useFetcingData(setInformation, 'http://jsonplaceholder.typicode.com/todos')
  

  return (
    <div className="App">
      <div>
        요구조건<br />
        1. http://jsonplaceholder.typicode.com/todos에서 api 데이터를 받아와서 출력<br />
        2. 할일 추가 / 삭제 / 수정 <br />
        3. 할일이 몇개나 남았는지 출력
        4. 데이터 로드시 로딩화면
        <br /><br />
        <Header info={information} />
        <input onChange={handleChange} value={inputData} />
        <button onClick={onCreate}>create</button>
        <List info={information} bool={fetch} toggle={handleToggle} reChange={reChange} />
      </div>
    </div>
  );
}

export default App;
