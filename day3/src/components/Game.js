import React from 'react';

import Score from './Score';
import Highscore from './Highscore';
import Board from './Board';
import {
    resetGame
} from '../actions';

const Game = ( props ) => {
  return (
    <div className='game'>
      <h1>Memory game</h1>
      <Score score={ props.rounds } />
      <Highscore highscore={ props.highscore } />
      <Board cards={ props.cards } />
    </div>
  )
}

export default Game;

