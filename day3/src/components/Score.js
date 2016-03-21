import React from 'react';

const Score = (props) => (
  <div className="score">Score: { props.score }</div>
);

Score.propTypes = {
  score: React.PropTypes.number.isRequired
};

export default Score;

