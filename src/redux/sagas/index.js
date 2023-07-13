import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import carSaga from './car';


export default function* rootSaga() {
    yield all([
        fork(carSaga),
    ])
} 