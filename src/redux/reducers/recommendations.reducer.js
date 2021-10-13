import { combineReducers } from 'redux';

const recommendations =(state = [], action ) => {
    switch(action.type) {
        case 'SET_RECOMMENDATIONS':
            return action.payload;
        default: 
            return state;
    }
}





export default combineReducers({
   recommendations,
  });