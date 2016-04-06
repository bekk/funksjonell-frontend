import React from 'react';

const ResetGame = props => (
    <button onClick={ props.onButtonClick }>
        Restart
    </button>
);

ResetGame.propTypes = {
    onButtonClick: React.PropTypes.func.isRequired
};

export default ResetGame;

