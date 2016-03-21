import React from 'react';
import { connect } from 'react-redux';

import '../app.css';

import Game from '../components/Game';

const App = props => (
  <Game
    cards={ props.cards }
    rounds={ props.game.rounds }
    highscore={ props.game.highscore }
    isFinished={ props.game.finished }
  />
);

App.propTypes = {
  cards: React.PropTypes.array.isRequired,
  game: React.PropTypes.shape({
    rounds: React.PropTypes.number.isRequired,
    highscore: React.PropTypes.number.isRequired,
    finished: React.PropTypes.bool.isRequired,
  })
};

export default connect(state => ({
  cards: state.cards,
  game: state.game
}))(App);
