import { combineReducers } from 'redux';

import {
  CARD_FLIPPED,
  CARDS_MATCHED,
  GAME_FINISHED,
  GAME_RESET
} from './actions';

const initialStateCards = [
  { id: 0, item: 'http://placekitten.com/200/200?image=1', matched: false, open: false },
  { id: 1, item: 'http://placekitten.com/200/200?image=6', matched: false, open: false },
  { id: 2, item: 'http://placekitten.com/200/200?image=4', matched: false, open: false },
  { id: 3, item: 'http://placekitten.com/200/200?image=5', matched: false, open: false },
  { id: 4, item: 'http://placekitten.com/200/200?image=2', matched: false, open: false },
  { id: 5, item: 'http://placekitten.com/200/200?image=2', matched: false, open: false },
  { id: 6, item: 'http://placekitten.com/200/200?image=1', matched: false, open: false },
  { id: 7, item: 'http://placekitten.com/200/200?image=4', matched: false, open: false },
  { id: 8, item: 'http://placekitten.com/200/200?image=3', matched: false, open: false },
  { id: 9, item: 'http://placekitten.com/200/200?image=6', matched: false, open: false },
  { id: 10, item: 'http://placekitten.com/200/200?image=3', matched: false, open: false },
  { id: 11, item: 'http://placekitten.com/200/200?image=5', matched: false, open: false },
];

const cardReducer = (state = initialStateCards, action) => {
  switch (action.type) {
  case CARD_FLIPPED:
    return state.map(c =>
      c.id === action.payload.id ?
        Object.assign({}, c, { open: !c.open }) :
        c
    );
  case CARDS_MATCHED:
    return state.map(c =>
      c.id === action.payload.firstCard.id || c.id === action.payload.secondCard.id ?
        Object.assign({}, c, {
          matched: true,
          open: true
        }) :
        c
    );
  case GAME_RESET:
    return initialStateCards;
  default:
    return state;
  }
};

const initialStateGame = {
  finished: false,
  rounds: 0,
  highscore: Number.MAX_VALUE
};

const gameReducer = (state = initialStateGame, action) => {
  switch (action.type) {
  case CARD_FLIPPED:
    return Object.assign({}, state, {
      rounds: state.rounds + 1
    });
  case GAME_FINISHED:
    return Object.assign({}, state, {
      finished: true,
      highscore: Math.min(state.rounds, state.highscore)
    });
  case GAME_RESET:
    return Object.assign({}, initialStateGame, {
      highscore: state.highscore
    });
  default:
    return state;
  }
};

export default combineReducers({
  cards: cardReducer,
  game: gameReducer
});
