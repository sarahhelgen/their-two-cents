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
        case 'SET_MEDIA_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const business = (state = [], action ) => {
    switch(action.type) {
        case 'SET_BUSINESS':
            return action.payload;
        case 'SET_BUSINESS_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const product = (state = [], action ) => {
    switch(action.type) {
        case'SET_PRODUCTS':
            return action.payload;
        case 'SET_PRODUCT_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const other = (state = [], action ) => {
    switch(action.type) {
        case 'SET_OTHER':
            return action.payload;
        case 'SET_OTHER_COUNT':
            return action.payload;
        default:
            return state;
    }
}

const favorite = (state = [], action ) => {
    switch(action.type) {
        case 'SET_FAVORITES':
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
    other,
    favorite,
});