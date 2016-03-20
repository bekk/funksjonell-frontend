import React from 'react';

import Card from './Card';

const Board = ( props ) => {
  const cards = props.cards.map(( cardData, idx ) => {
    return ( <Card key={ idx } data={ cardData } /> );
  });

  return (
    <div className='board'>
      { cards }
    </div>
  );
};

export default Board;

