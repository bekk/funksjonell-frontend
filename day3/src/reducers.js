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
    return state.map(card =>
      card.id === action.payload.id ?
        Object.assign({}, card, { open: !card.open }) :
        card
    );
  case CARDS_MATCHED:
    return state.map(card =>
      card.id === action.payload.firstCard.id || card.id === action.payload.secondCard.id ?
        Object.assign({}, card, {
          matched: true,
          open: true
        }) :
        card
    );
  case GAME_RESET:
    return initialStateCards;
  default:
    return state;
  }
};

const initialStateGame = {
  finished: true,
  flips: 0,
  bestScore: Number.MAX_VALUE
};

const gameReducer = (state = initialStateGame, action) => {
  switch (action.type) {
  case CARD_FLIPPED:
    return Object.assign({}, state, {
      flips: state.flips + 1
    });
  case GAME_FINISHED:
    return Object.assign({}, state, {
      finished: true,
      bestScore: Math.min(state.flips, state.bestScore)
    });
  case GAME_RESET:
    return Object.assign({}, initialStateGame, {
      bestScore: state.bestScore,
      finished: false
    });
  default:
    return state;
  }
};

export default combineReducers({
  cards: cardReducer,
  game: gameReducer
});
