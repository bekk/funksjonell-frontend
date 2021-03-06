import { combineReducers } from 'redux';

import {
    GAME_RESET
} from './actions';

const initialStateCards = [];

const cardsReducer = (state = initialStateCards, action) => {
    switch (action.type) {
    case GAME_RESET:
        console.log('The game reset action creator was called');
    default:
        return state;
    }
}







export default combineReducers({
    cards: cardsReducer,
});
