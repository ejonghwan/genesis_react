import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'


const getLocalData = () => {
    const res = localStorage.getItem('post');
    return JSON.parse(res);
}

// 요청
function commLoadApi(data) {
    if(!getLocalData()) { localStorage.setItem('post', JSON.stringify([...data]) ) }
    return getLocalData();
} 

function commAddApi(data) {
    localStorage.setItem('post', JSON.stringify([ data, ...getLocalData()]) )
    return data;
} 

function commEditApi(data) {
    return data;
} 

function commCancelApi(data) {
    return data;
} 

function commUpdateApi(data) {
    const update = data.comm.map(item => item.id === data.id ? {...item, title: data.title, content: data.content, modify: false} : item);
    localStorage.setItem('post', JSON.stringify(update) )
    // return getLocalData();
    return data;
} 

function commDeleteApi(data) {
    const del = data.comm.filter(item => item.id !== data.id)
    localStorage.setItem('post', JSON.stringify(del) )
    return data;
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

function* commEdit(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commEditApi, action.payload) 
        console.log('saga res????????', res)
        yield put({
            type: "COMM_EDIT_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_EDIT_FAILURE",
            error: err.response.data
        })
    }
} 

function* commCancel(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commCancelApi, action.payload) 
        console.log('saga res????????', res)
        yield put({
            type: "COMM_CANCEL_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_CANCEL_FAILURE",
            error: err.response.data
        })
    }
} 

function* commUpdate(action) {
    try {
        // action은 api함수에 줄때 사용. call 두번쨰 인자로
        const res = yield call(commUpdateApi, action.payload) 
        console.log('saga res????????', res)
        yield put({
            type: "COMM_UPDATE_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_UPDATE_FAILURE",
            error: err.response.data
        })
    }
} 

function* commDelete(action) {
    try {
        const res = yield call(commDeleteApi, action.payload) 
        console.log('saga res????????', res)
        yield put({
            type: "COMM_DELETE_SUCCESS",
            payload: res,
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "COMM_DELETE_FAILURE",
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
}

function* watchCommEdit() {
    yield takeLatest("COMM_EDIT_REQUEST", commEdit)
}

function* watchCommCancel() {
    yield takeLatest("COMM_CANCEL_REQUEST", commCancel)
}

function* watchCommUpdate() {
    yield takeLatest("COMM_UPDATE_REQUEST", commUpdate)
}

function* watchCommDelete() {
    yield takeLatest("COMM_DELETE_REQUEST", commDelete)
}


export default function* carSaga() {
    yield all([
        fork(watchCommLoad),
        fork(watchCommAdd),
        fork(watchCommEdit),
        fork(watchCommCancel),
        fork(watchCommUpdate),
        fork(watchCommDelete),
    ])
}