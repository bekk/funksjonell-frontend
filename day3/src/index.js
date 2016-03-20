import React from 'react';
import { render } from 'react-dom';

import './app.css';

import Game from './components/Game';
import Data from './data';

render(<Game data={ Data } />, document.querySelector('#app'));
