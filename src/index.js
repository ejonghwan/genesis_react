import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { GlobalProvider } from './hooks/useGlobalContext.js';

ReactDOM.render(
	<HashRouter>
		<GlobalProvider>
			<App />
		</GlobalProvider>
	</HashRouter>,
	document.getElementById('root')
);




// 자식
// import { useGlobalData } from '../../hooks/useGlobalContext';
// const { MenuOpen, setMenuOpen } = useGlobalData();