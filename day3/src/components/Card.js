import React from 'react';

const cardBacksideUrl = 'http://lorempixel.com/image_output/abstract-q-g-200-200-10.jpg';

const Card = ( props ) => {
  const imageUrl = props.data.open ? props.data.item : cardBacksideUrl;
  const style = props.data.matched ? 'card matched' : 'card';
  return (
    <img className={ style } src={ imageUrl } />
  );
};

export default Card;

