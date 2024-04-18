// import React from 'react'
import PropTypes from 'prop-types';

const RotatedCard = ({ image, style }) => {
  return (
    <div className="inline-block object-cover">
      <img src={image} style={style} className="rotate-90 ml-9" />
    </div>
  );
};

RotatedCard.propTypes = {
  image: PropTypes.string.isRequired,
  style: PropTypes.object,
};

export default RotatedCard;
