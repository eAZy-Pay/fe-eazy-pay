// import React from 'react'

const RotatedCard = ({ image }) => {
  return (
    <div className="inline-block w-[127.98px] h-[202.5px] object-cover">
      <img src={image} className="rotate-90 ml-9" />
    </div>
  );
};

export default RotatedCard;
