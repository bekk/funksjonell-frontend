import React from 'react';

const BestScore = (props) => {
  return (
    <div className="bestScore">
      Best score: { props.bestScore === Number.MAX_VALUE ? '-' : props.bestScore }
    </div>
  );
};

BestScore.propTypes = {
  bestScore: React.PropTypes.number.isRequired
};

export default BestScore;
