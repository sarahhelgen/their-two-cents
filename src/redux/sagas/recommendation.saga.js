import { takeEvery, put } from "@redux-saga/core/effects";
import axios from 'axios';




//root saga for recommendations
function* RecommendationSaga() {
    yield takeEvery('POST_REC_TO_SERVER', sendRecToServer);
    yield takeEvery('FETCH_MEDIA_COUNT', fetchMediaCount );
    yield takeEvery('FETCH_PRODUCT_COUNT', fetchProductCount );
    yield takeEvery('FETCH_BUSINESS_COUNT', fetchBusinessCount );
    yield takeEvery( 'FETCH_OTHER_COUNT', fetchOtherCount );

}

//generator function to fetch all recommendations from the DB


function* fetchMediaCount() {
    try{
        console.log('fetchMediaCount saga firing');
        const mediaCount = yield axios.get('/api/recommendation/media');
        console.log('getting the media count', mediaCount.data );
        yield put ({ type: 'SET_MEDIA_COUNT', payload: mediaCount.data })
    } catch (error) {
        console.error( 'error fetching media count from db', error );
    }
}

function* fetchProductCount () {
    try {
        console.log('fetchProductCount saga firing');
        const productCount = yield axios.get('/api/recommendation/product');
        console.log('getting the product count', productCount.data );
        yield put({ type: 'SET_PRODUCT_COUNT', payload: productCount.data })

    } catch (error) {
        console.error( 'error fetching product count from db', error );
    }

}

function* fetchBusinessCount () {
    try{
        console.log( 'fetchBusinessCount saga firing');
        const businessCount = yield axios.get('/api/recommendation/business');
        console.log(' getting business count from db', businessCount.data );
        yield put ({ type: 'SET_BUSINESS_COUNT', payload: businessCount.data });

    } catch (error) {
        console.error( 'error fetching business count from db', error );
    }
}

function * fetchOtherCount () {
    try{
        console.log( 'fetchOtherCount saga firing');
        const otherCount = yield axios.get('/api/recommendation/other');
        console.log( 'getting other count from db', otherCount.data );
        yield put ({ type: 'SET_OTHER_COUNT', payload: otherCount.data })
    } catch (error) {
        console.error ('error fetching other count', error );
    }
}



function* sendRecToServer(action) {
    try {
        console.log('sendRecToServer saga firing', action);
        const response = yield axios.post('/api/recommendation', action.payload);
        console.log(' Response from the DB is', response.data);
        yield put({ type: 'ADD_RECOMMENDATION', payload: action.payload })
    } catch (error) {
        console.error('error with saga posting rec to db', error);
    }
}




export default RecommendationSaga;