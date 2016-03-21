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
  resetGame
} from '../actions';

const findMatch = (card, cards) =>
  cards.find(c =>
    c.id !== card.id &&
    c.open &&
    !c.matched &&
    c.item === card.item
  );

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(card) {
    if (card.matched) {
      return;
    }

    const { cards, dispatch } = this.props;
    const countOpenUnmatchedCards = cards
      .reduce((sum, c) => c.open && !c.matched ? sum + 1 : sum, 0);
    const matchedCards = cards
      .reduce((sum, c) => c.matched ? sum + 1 : sum, 0);

    if (card.open) {
      dispatch(flipCard(card));
    } else if (countOpenUnmatchedCards < 2) {
      dispatch(flipCard(card));

      const match = findMatch(card, cards);
      if (match) {
        dispatch(matchCards(card, match));

        if (matchedCards === cards.length - 2) {
          dispatch(finishGame());
        }
      }
    }
  }

  render() {
    const {
      flips,
      bestScore,
      cards,
      isFinished,
      dispatch
    } = this.props;
    return (
      <div className="game">
        <h1>Memory game</h1>
        <Score score={ flips } />
        <BestScore bestScore={ bestScore } />
        { isFinished ?
          <GameFinished
            score={ flips }
            onResetClick={ () => dispatch(resetGame()) }
          /> :
          <Board
            cards={ cards }
            onCardClick={ this.handleCardClick }
          />
        }
      </div>
    );
  }
}

Game.propTypes = {
  flips: React.PropTypes.number.isRequired,
  bestScore: React.PropTypes.number.isRequired,
  cards: React.PropTypes.array.isRequired,
  isFinished: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired
};

export default connect()(Game);

