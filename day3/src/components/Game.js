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

import {
  canFlipCard,
  findMatch,
  willMatchFinishGame
} from '../utils';

class Game extends React.Component {
  constructor(props) {
    super(props);

    this.handleCardClick = this.handleCardClick.bind(this);
  }

  handleCardClick(card) {
    const { cards, dispatch } = this.props;

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

