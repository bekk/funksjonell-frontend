import React from 'react';

const Highscore = props => (
  <div className="highscore">
    Highscore: { props.highscore === Number.MAX_VALUE ? '-' : props.highscore }
  </div>
);

Highscore.propTypes = {
  highscore: React.PropTypes.number.isRequired
};

export default Highscore;
