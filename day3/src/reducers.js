import {
    CARD_FLIPPED,
    GAME_FINISHED,
    GAME_RESET
} from '../actions';

const initialState = {
    rounds: 0,
    highscore: Number.MAX_VALUE
};

const gameReducer = (state = initialState, action) => {
    switch (action.type) {
        case GAME_FINISHED:
            return Object.assign({}, state, {
                finished: true,
                highscore: Math.min(state.rounds, state.highscore)
            });
        case GAME_RESET:
            return Object.assign({}, initialState, {
                highscore: state.highscore
            });
        default:
            return state;
    }
};

export default gameReducer;