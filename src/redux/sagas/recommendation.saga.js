import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';




//root saga for recommendations
function* RecommendationSaga () {
    yield takeEvery('FETCH_RECOMMENDATIONS', fetchAllRecommendations );

}

//generator function to fetch all recommendations from the DB

function* fetchAllRecommendations(){
    try {
        const recommendations = yield axios.get('/api/recommendation');
        console.log('getting all the recommendations', recommendations.data);
        yield put({ type: 'SET_RECOMMENDATIONS', payload: recommendations.data });
    } catch (error) {
        console.log('error fetching recommendations from db', error );
    }
}

export default RecommendationSaga;