import React from 'react';

import Card from './Card';

const Board = props => {
  const cards = props.cards.map(card =>
    <Card
      key={ card.id }
      { ...card }
      onClick={ () => props.onCardClick(card) }
    />
  );

  return (
    <div className="board">
      { cards }
    </div>
  );
};

Board.propTypes = {
  cards: React.PropTypes.array.isRequired,
  onCardClick: React.PropTypes.func.isRequired
};

export default Board;

