import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';

function* productSaga() {
    yield takeEvery('FETCH_PRODUCTS', fetchProducts);
    yield takeEvery('DELETE_PRODUCT', deleteProduct);
    yield takeEvery('FAVORITE_PRODUCT', favoriteProduct);
}

function* fetchProducts() {
    try {
        console.log('fetchProducts saga connected');
        const products = yield axios.get('/api/product');
        console.log('getting product recommendations from db', products.data);
        yield put({ type: 'SET_PRODUCTS', payload: products.data })
    } catch (error) {
        console.error('error getting products from db', error);
    }
}

function* deleteProduct(action) {
    try {
        console.log('deleteSaga firing');
        const productId = action.payload;
        yield axios.delete(`/api/product/${productId}`);
        yield put({ type: 'FETCH_PRODUCTS' });

    } catch (error) {
        console.error('error with deleting product', error);
    }
}

function* favoriteProduct(action) {
    try {
        console.log('favorite product saga firing');
        const productId = action.payload;
        yield axios.put(`/api/product/${productId}`);
        yield put({ type: 'FETCH_PRODUCTS' });
    } catch (error) {
        console.error('error with product favorite', error );
    }
}


export default productSaga;