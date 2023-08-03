import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import store from './redux/store'; 


ReactDOM.render(
	<HashRouter>
		<Provider store={store}>
			<HelmetProvider>
				<App />
			</HelmetProvider>
		</Provider>
	</HashRouter>,
	document.getElementById('root')
);



