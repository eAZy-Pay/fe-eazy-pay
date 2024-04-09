// import React from 'react'
import PropTypes from 'prop-types';

const RotatedCard = ({ image }) => {
  return (
    <div className="inline-block w-[127.98px] h-[202.5px] object-cover">
      <img src={image} className="rotate-90 ml-9" />
    </div>
  );
};

RotatedCard.propTypes = {
  image: PropTypes.string.isRequired, // 예를 들어 'image'가 반드시 문자열이어야 함을 지정합니다.
};

export default RotatedCard;
