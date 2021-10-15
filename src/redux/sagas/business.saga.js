import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* businessSaga () {
    yield takeEvery( 'FETCH_BUSINESS', fetchBusiness );
    

}

function* fetchBusiness () {
    try {
        console.log('fetchBusiness saga connected');
        const business = yield axios.get('/api/business');
        console.log('getting media recommendations from db', business.data );
        yield put({ type: 'SET_BUSINESS', payload: business.data });
    } catch (error) {
        console.error('error fetching media recommendations from db');
    }
}







export default businessSaga;