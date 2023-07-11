import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store'; 

import axios from 'axios';

// async function dd() {
// 	const aa = await axios.get('http://jsonplaceholder.typicode.com/todos')
// 	const data = aa.data;
// 	console.log(data)
// 	// console.log('??????????', aa.then(data => console.log(data)))

// }
// dd();



ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<App />
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);



