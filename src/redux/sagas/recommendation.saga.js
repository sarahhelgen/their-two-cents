import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';




//root saga for recommendations
function* RecommendationSaga() {
    yield takeEvery('FETCH_RECOMMENDATIONS', fetchAllRecommendations);
    yield takeEvery('POST_REC_TO_SERVER', sendRecToServer);
    yield takeEvery('FETCH_MEDIA', fetchMedia );

}

//generator function to fetch all recommendations from the DB

function* fetchAllRecommendations() {
    try {
        console.log('fetchAllRecommendations saga firing' );
        const recommendations = yield axios.get('/api/recommendation');
        console.log('getting all the recommendations', recommendations.data);
        yield put({ type: 'SET_RECOMMENDATIONS', payload: recommendations.data });
    } catch (error) {
        console.log('error fetching recommendations from db', error);
    }
}

function* sendRecToServer(action) {
    try {
        console.log('sendRecToServer saga firing', action );
        const response = yield axios.post('/api/recommendation', action.payload );
        console.log(' Response from the DB is', response.data );
        yield put({ type: 'ADD_RECOMMENDATION', payload: action.payload })
    } catch (error) {
        console.error('error with saga posting rec to db', error);
    }
}

function* fetchMedia() {
    try {
        console.log('fetchMedia saga connected');
        const media = yield axios.get('/api/media');
        console.log('getting media recommendations from db', media.data );
        yield ({ type: 'SET_MEDIA', payload: media.data });
    } catch (error) {
        console.error('error fetching media recommendations from db');
    }
}

export default RecommendationSaga;