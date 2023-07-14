import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'
import axios from 'axios';



// 요청
function carDataApi(data) {
    return axios.get('http://jsonplaceholder.typicode.com/todos')
} 


// 로드
function* carDataLoad(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(carDataApi) 
        // console.log('res????????', res)
        yield put({
            type: "CAR_DATA_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "CAR_DATA_FAILURE",
            error: err.response.data
        })
    }
} 


//와치
function* watchCarDataLoad() {
    // console.log('watch')
    yield takeLatest("CAR_DATA_LOAD", carDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}





export default function* carSaga() {
    yield all([
        fork(watchCarDataLoad),
    ])
}