import React from 'react';
import { connect } from 'react-redux';

import {cards, game} from '../data.js';

import Game from '../components/Game';

const App = props => (
    <Game
        cards={ cards }
        flips={ game.flips }
        bestScore={ game.bestScore }
    />
);

App.propTypes = {
    cards: React.PropTypes.array,
    game: React.PropTypes.shape({
        flips: React.PropTypes.number,
        bestScore: React.PropTypes.number,
    })
};

export default connect(state => ({
    cards: state.cards
}))(App);
