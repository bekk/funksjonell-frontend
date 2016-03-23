import React from 'react';
import { connect } from 'react-redux';

import '../app.css';
import {cards, game} from '../data.js';

import Game from '../components/Game';

const App = props => (
    <Game
        cards={ cards }
        rounds={ game.rounds }
        highscore={ game.highscore }
    />
);

App.propTypes = {
    cards: React.PropTypes.array.isRequired,
    game: React.PropTypes.shape({
        rounds: React.PropTypes.number.isRequired,
        highscore: React.PropTypes.number.isRequired,
    })
};

export default connect(state => ({
    game: state.game
}))(App);