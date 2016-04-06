import React from 'react';
import { connect } from 'react-redux';

import Score from './Score';
import BestScore from './BestScore';
import Board from './Board';
import GameFinished from './GameFinished';

import {
  flipCard,
  matchCards,
  finishGame,
  resetGame,
  closeNonMatchedCards
} from '../actions';

import {
  canFlipCard,
  findMatch,
  willMatchFinishGame
} from '../utils';

function hasOpenCard (cards) {
  return cards.some(card => !card.matched && card.open);
}

const Game = (props) => {
  const {
    flips,
    bestScore,
    cards,
    isFinished,
    dispatch
    } = props;

  const handleCardClick = (card) => {

    if (!canFlipCard(card, cards)) {
      return;
    }

    dispatch(flipCard(card));

    const match = findMatch(card, cards);
    if (match) {
      dispatch(matchCards(card, match));
      if (willMatchFinishGame(cards)) {
        dispatch(finishGame());
      }
    }
    else if (hasOpenCard(cards)) {
       setTimeout(() => dispatch(closeNonMatchedCards()), 1000)
    }
  };
    /*
      TODO:
      Sett spillet helt til venstre på siten for å få plass til devtools.


      actions.js
      export const NONMATCHED_CARDS_CLOSED = 'NONMATCHED_CARDS_CLOSED';

      export function closeNonMatchedCards() {
        return {
          type: NONMATCHED_CARDS_CLOSED
        };
      }

      reducers.js
      //const cardReducer = (state = initialStateCards, action) => {
        switch (action.type) {
        case NONMATCHED_CARDS_CLOSED:
          return state.map(card =>
            !card.mathed ?  Object.assign({}, card, { open: false }) :  card
          );


      TODO: Fjerne funksjonalitet for å lukke et kort.
      Kun flippe et kort hvis det er lukket eller hvis det ikke er matchet.
    */


  return (
    <div className="game">
      <h1>Memory game</h1>
      <Score score={ flips } />
      <BestScore bestScore={ bestScore } />
      { isFinished ?
        <GameFinished score={ flips }
          onResetClick={ () => dispatch(resetGame()) }
        /> :
        <Board
          cards={ cards }
          onCardClick={ handleCardClick }
        />
      }
    </div>
  );
};

Game.propTypes = {
  flips: React.PropTypes.number.isRequired,
  bestScore: React.PropTypes.number.isRequired,
  cards: React.PropTypes.array.isRequired,
  isFinished: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Game);
