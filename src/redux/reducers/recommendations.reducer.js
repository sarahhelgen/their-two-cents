import { combineReducers } from 'redux';

const recommendations = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECOMMENDATIONS':
            return action.payload;
        case 'ADD_RECOMMENDATION':
            return [...state, action.payload];
        default:
            return state;
    }
}

const media = (state = [], action ) => {
    switch (action.type) {
        case 'SET_MEDIA':
            return action.payload;
        default:
            return state;
    }
}

const business = (state = [], action ) => {
    switch(action.type) {
        case 'SET_BUSINESS':
            return action.payload;
        default:
            return state;
    }
}

const product = (state = [], action ) => {
    switch(action.type) {
        case'SET_PRODUCTS':
            return action.payload;
        default:
            return state;
    }
}





export default combineReducers({
    recommendations,
    media,
    business,
    product,
});