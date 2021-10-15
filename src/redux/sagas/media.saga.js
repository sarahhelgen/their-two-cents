import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* mediaSaga () {
    yield takeEvery('FETCH_MEDIA', fetchMedia );
    yield takeEvery('DELETE_MEDIA', deleteMedia );
    yield takeEvery('FAVORITE_MEDIA', favoriteMedia );

}

function* fetchMedia() {
    try {
        console.log('fetchMedia saga connected');
        const media = yield axios.get('/api/media');
        console.log('getting media recommendations from db', media.data );
        yield put({ type: 'SET_MEDIA', payload: media.data });
    } catch (error) {
        console.error('error fetching media recommendations from db');
    }
}

function* deleteMedia (action) {
    try{
        yield axios.delete(`/api/media/${action.payload}`);
        yield put({type: 'FETCH_MEDIA'});
    } catch (error) {
        console.error( 'error deleting media from db ', error )
    }
}

function* favoriteMedia (action) {
    try {
        console.log('the mediaId is', action.payload );
        yield axios.put(`/api/media/${action.payload}`);
        yield put ({ type: 'FETCH_MEDIA'});
    } catch (error) {
        console.error( 'Error with media favorite', error );
    }
}





export default mediaSaga;