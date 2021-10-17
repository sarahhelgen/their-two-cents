import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* favoriteSaga() {
    yield takeEvery('FETCH_FAVORITES', fetchFavorites);
    yield takeEvery('DELETE_FAVORITE', deleteFavorite );

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

function* deleteFavorite (action) {
    try{
        console.log('deleteFavorite saga firing');
        const favoriteId = action.payload;
        yield axios.delete(`/api/favorite/${favoriteId}`);
        yield put({type: 'FETCH_FAVORITES'});

    } catch (error) {
        console.error('error deleting favorite from db', error );
    }
}


export default favoriteSaga;