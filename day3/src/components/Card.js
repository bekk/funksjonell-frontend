import React from 'react';

const cardBacksideUrl = 'http://lorempixel.com/image_output/abstract-q-g-200-200-10.jpg';

const Card = props => {
  const imageUrl = props.open ? props.item : cardBacksideUrl;
  const style = props.matched ? 'card matched' : 'card';
  return (
    <img
      className={ style }
      src={ imageUrl }
      onClick={ props.onClick }
    />
  );
};

Card.propTypes = {
  open: React.PropTypes.bool.isRequired,
  matched: React.PropTypes.bool.isRequired,
  item: React.PropTypes.string.isRequired,
  onClick: React.PropTypes.func.isRequired
};

export default Card;

