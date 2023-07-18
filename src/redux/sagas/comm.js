import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'


// 요청
function commDataLoadApi() {
    // return axios.get('http://jsonplaceholder.typicode.com/todos')
    const res = localStorage.getItem('post');
    return JSON.parse(res);
} 


// 로드
function* commDataLoad(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commDataLoadApi) 
        console.log('res????????', res)
        yield put({
            type: "COMM_LOAD_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_LOAD_FAILURE",
            error: err.response.data
        })
    }
} 


//와치
function* watchCommDataLoad() {
    // console.log('watch')
    yield takeLatest("COMM_LOAD_REQUEST", commDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}


export default function* carSaga() {
    yield all([
        fork(watchCommDataLoad),
    ])
}