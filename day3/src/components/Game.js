import React from 'react';

import Score from './Score';
import Highscore from './Highscore';
import Board from './Board';

const Game = ( props ) => {
  return (
    <div className='game'>
      <h1>Memory game</h1>
      <Score score={ props.data.rounds } />
      <Highscore highscore={ props.data.highscore } />
      <Board cards={ props.data.cards } />
    </div>
  )
}

export default Game;

