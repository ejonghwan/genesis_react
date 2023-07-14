import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'
import axios from 'axios';




// 요청
function youtubeDataApi(data) {
    const { list, key, num } = data;
    return axios.get(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${list}&key=${key}&maxResults=${num}`)
} 


// 로드
function* youtubeDataLoad(action) {
    try {
        const res = yield call(youtubeDataApi, action.payload) 
        // console.log('res????????', res)
        yield put({
            type: "YOUTUBE_LOAD_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "YOUTUBE_LOAD_FAILURE",
            error: err.response
        })
    }
} 


//와치
function* watchYoutubeDataLoad() {
    yield takeLatest("YOUTUBE_LOAD_REQUEST", youtubeDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}





export default function* youtubeSaga() {
    yield all([
        fork(watchYoutubeDataLoad),
    ])
}