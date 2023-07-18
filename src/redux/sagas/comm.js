import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'


const getLocalData = () => {
    const res = localStorage.getItem('post');
    return JSON.parse(res);
}

// 요청
function commLoadApi(data) {
    localStorage.setItem('post', JSON.stringify([ ...data]) )
    return getLocalData();
} 

function commAddApi(data) {
    localStorage.setItem('post', JSON.stringify([ data, ...getLocalData()]) )
    console.log(data)
    return getLocalData();
} 


// 풋
function* commLoad(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commLoadApi, action.payload) 
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

function* commAdd(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commAddApi, action.payload) 
        console.log('saga res????????', res)
        yield put({
            type: "COMM_ADD_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_ADD_FAILURE",
            error: err.response.data
        })
    }
} 



//와치
function* watchCommLoad() {
    yield takeLatest("COMM_LOAD_REQUEST", commLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}
function* watchCommAdd() {
    yield takeLatest("COMM_ADD_REQUEST", commAdd)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}


export default function* carSaga() {
    yield all([
        fork(watchCommLoad),
        fork(watchCommAdd),
    ])
}