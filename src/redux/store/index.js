import { createStore, applyMiddleware, compose } from 'redux';
import reducer from '../reducer/index';

import { composeWithDevTools } from '@redux-devtools/extension';

import createSagaMiddleware from 'redux-saga'; 
import rootSaga from '../sagas/index';


const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware]
const enhancer = process.env.NODE_ENV === 'production'
  ? compose(applyMiddleware(...middleware)) : composeWithDevTools(applyMiddleware(...middleware))

const store = createStore(reducer, enhancer);
sagaMiddleware.run(rootSaga)


export default store;

