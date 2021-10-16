import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* otherSaga() {
    yield takeEvery('FETCH_OTHER', fetchOther);
    yield takeEvery('DELETE_OTHER', deleteOther);
    yield takeEvery('FAVORITE_OTHER', favoriteOther);
}

function* fetchOther() {
    try {
        console.log('fetchOther saga connected');
        const other = yield axios.get('/api/other');
        console.log('getting other recommendations from db', other.data);
        yield put({ type: 'SET_OTHER', payload: other.data })
    } catch (error) {
        console.error('error getting other from db', error);
    }
}

function* deleteOther(action) {
    try {
        console.log('deleteOther firing');
        const otherId = action.payload;
        yield axios.delete(`/api/other/${otherId}`);
        yield put({ type: 'FETCH_OTHER' });

    } catch (error) {
        console.error('error with deleting other', error);
    }
}

function* favoriteOther(action) {
    try {
        console.log('favorite other saga firing');
        const otherId = action.payload;
        yield axios.put(`/api/other/${otherId}`);
        yield put({ type: 'FETCH_OTHER' });
    } catch (error) {
        console.error('error with other favorite', error );
    }
}


export default otherSaga;