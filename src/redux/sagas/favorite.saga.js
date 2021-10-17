import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* favoriteSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);

}

function* fetchFavorites() {
    try {
        console.log('fetchFavorites saga firing');
        const favorites = yield axios.get('/api/favorite');
        console.log('getting favorite recs from db', favorites.data);
        yield put({ type: 'SET_FAVORITES', payload: favorites.data });
    } catch (error) {
        console.error('error getting favorites from db', error);
    }
}


export default favoriteSaga;