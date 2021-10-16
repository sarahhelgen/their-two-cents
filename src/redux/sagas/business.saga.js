
import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* businessSaga () {
    yield takeEvery( 'FETCH_BUSINESS', fetchBusiness );
    yield takeEvery('FAVORITE_BUSINESS', favoriteBusiness );
    yield takeEvery('DELETE_BUSINESS', deleteBusiness )
    

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

function* favoriteBusiness (action) {

    try {
        console.log('favoriteBusiness saga working');
        console.log('the action.payload is', action.payload );
        const businessId = action.payload;
        yield axios.put(`/api/business/${businessId}`);
        yield put ({ type: 'FETCH_BUSINESS'})
    } catch (error) {
        console.error( 'error with favoriting business', error );
    }
}

function* deleteBusiness (action) {
    try {
        console.log( 'deleteBusiness saga firing');
        const businessId = action.payload;
        yield axios.delete(`/api/business/${businessId}`);
        yield put ({ type: 'FETCH_BUSINESS '});
    } catch (error) {
        console.error('error with deleting business', error );
    }
}







export default businessSaga;