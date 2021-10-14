import { combineReducers } from 'redux';

const recommendations = (state = [], action) => {
    switch (action.type) {
        case 'SET_RECOMMENDATIONS':
            return action.payload;
        case 'ADD_RECOMMENDATION':
            return [...state, action.payload];
        case 'SET_MEDIA':
            return action.payload;
        default:
            return state;
    }
}





export default combineReducers({
    recommendations,
});