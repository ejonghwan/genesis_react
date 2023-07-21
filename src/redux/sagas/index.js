import { all, fork } from 'redux-saga/effects';
import axios from 'axios';

import youtubeSaga from './youtube';
import gallerySaga from './gallery';
import commSaga from './comm';


export default function* rootSaga() {
    yield all([
        fork(youtubeSaga),
        fork(gallerySaga),
        fork(commSaga),
    ])
} 