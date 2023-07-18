import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import carSaga from './car';
import youtubeSaga from './youtube';
import gallerySaga from './gallery';
import commSaga from './comm';


export default function* rootSaga() {
    yield all([
        fork(carSaga),
        fork(youtubeSaga),
        fork(gallerySaga),
        fork(commSaga),
    ])
} 