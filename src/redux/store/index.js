import { createStore, compose, applyMiddleware } from 'redux';
import reducer from '../reducer/index';

import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../sagas/index';


const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga)


export default store;

