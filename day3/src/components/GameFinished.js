import React from 'react';

const GameFinished = props => (
  <div>
    <h2>Game finished! Final score: { props.score }</h2>
    <button onClick={ props.onResetClick }>
      Restart
    </button>
  </div>
);

GameFinished.propTypes = {
  score: React.PropTypes.number.isRequired,
  onResetClick: React.PropTypes.func.isRequired
};

export default GameFinished;
