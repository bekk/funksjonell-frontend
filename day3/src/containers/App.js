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
    cards: React.PropTypes.array,
    game: React.PropTypes.shape({
        rounds: React.PropTypes.number,
        highscore: React.PropTypes.number,
    })
};

export default connect(state => ({
    cards: state.cards
}))(App);