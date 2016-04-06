import React from 'react';
import ResetGame from './ResetGame'

const GameFinished = props => (
  <div>
    <h2>Game finished! Final score: { props.score }</h2>
    <ResetGame onButtonClick={() => props.onResetClick()}/>
  </div>
);

GameFinished.propTypes = {
  score: React.PropTypes.number.isRequired,
  onResetClick: React.PropTypes.func.isRequired
};

export default GameFinished;
