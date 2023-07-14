import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import carSaga from './car';
import youtubeSaga from './youtube';


export default function* rootSaga() {
    yield all([
        fork(carSaga),
        fork(youtubeSaga),
    ])
} 