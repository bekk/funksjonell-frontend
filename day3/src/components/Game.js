import React from 'react';
import { connect } from 'react-redux';

import Score from './Score';
import BestScore from './BestScore';
import Board from './Board';
import {
    resetGame
} from '../actions';

const Game = ( props ) => {
  return (
    <div className='game'>
      <h1>Memory game</h1>
      <Score score={ props.flips } />
      <BestScore bestScore={ props.bestScore } />
      <Board cards={ props.cards } />
    </div>
  )
}

export default Game;

