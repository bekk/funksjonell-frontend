import React from 'react';
import { connect } from 'react-redux';

import Game from '../components/Game';

const App = props => (
  <Game
    cards={ props.cards }
    flips={ props.game.flips }
    bestScore={ props.game.bestScore }
    isFinished={ props.game.finished }
  />
);

App.propTypes = {
  cards: React.PropTypes.array.isRequired,
  game: React.PropTypes.shape({
    flips: React.PropTypes.number.isRequired,
    bestScore: React.PropTypes.number.isRequired,
    finished: React.PropTypes.bool.isRequired,
  })
};

export default connect(state => ({
  cards: state.cards,
  game: state.game
}))(App);
