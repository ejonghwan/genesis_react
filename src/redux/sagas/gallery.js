import {all, call, delay, fork, put, takeLatest, throttle} from 'redux-saga/effects'
import axios from 'axios';




// 기본
function galleryDataApi(data) {
    const { key, num } = data;
    return axios.get(`https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${key}&per_page=${num}&method=flickr.interestingness.getList`)
} 

// 유저
function galleryUserDataApi(data) {
    const { key, num, userId } = data;
    return axios.get(`https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${key}&per_page=${num}&method=flickr.people.getPhotos&user_id=${userId}`)
}

// 검색
function gallerySearchDataApi(data) {
    const { key, num, tags } = data;
    return axios.get(`https://www.flickr.com/services/rest/?format=json&nojsoncallback=1&api_key=${key}&per_page=${num}&method=flickr.photos.search&tags=${tags}`)
}


// 기본
function* galleryDataLoad(action) {
    try {
        const res = yield call(galleryDataApi, action.payload) 
        // console.log('res????????', res)
        yield put({
            type: "GALLERY_LOAD_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "GALLERY_LOAD_FAILURE",
            error: err.response
        })
    }
} 


// 유저
function* galleryUserDataLoad(action) {
    try {
        const res = yield call(galleryUserDataApi, action.payload) 
        // console.log('res????????', res)
        yield put({
            type: "GALLERY_USER_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "GALLERY_USER_FAILURE",
            error: err.response
        })
    }
} 


// 검색
function* gallerySearchDataLoad(action) {
    try {
        const res = yield call(gallerySearchDataApi, action.payload) 
        // console.log('res????????', res)
        yield put({
            type: "GALLERY_SEARCH_SUCCESS",
            payload: res.data
        })
    } catch(err) {
        console.log(err)
        yield put({
            type: "GALLERY_SEARCH_FAILURE",
            error: err.response
        })
    }
} 


//와치
function* watchGalleryDataLoad() {
    yield takeLatest("GALLERY_LOAD_REQUEST", galleryDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}

function* watchGalleryUserDataLoad() {
    yield takeLatest("GALLERY_USER_REQUEST", galleryUserDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}

function* watchGallerySearchDataLoad() {
    yield takeLatest("GALLERY_SEARCH_REQUEST", gallerySearchDataLoad)
    // yield throttle(5000, LOAD_USER_POSTS_REQUEST, loaduserposts);
}





export default function* gallerySaga() {
    yield all([
        fork(watchGalleryDataLoad),
        fork(watchGalleryUserDataLoad),
        fork(watchGallerySearchDataLoad),
    ])
}