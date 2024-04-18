import { useState } from 'react';
import PropTypes from 'prop-types';
const OverlappedCards = ({ images }) => {
  const [move, setMove] = useState(0);
  return (
    <>
      <div
        className="w-[18.5em] h-[13em] z-10 relative"
        onPointerEnter={() => {
          setMove(1);
        }}
        onPointerLeave={() => {
          setMove(0);
        }}
      >
        {images.map((image, index) => (
          <img
            className="absolute h-[18.5em] "
            style={{
              zIndex: `${-1 * index}`,
              transform: `translateX(${15.5 + index * move}em) translateY(${index * move}em) rotate(90deg)`,
              transformOrigin: 'top left',
              cursor: 'pointer',
              transition: 'transform 0.3s ease',
            }}
            src={image}
            key={index}
          ></img>
        ))}
      </div>
    </>
  );
};

OverlappedCards.propTypes = {
  images: PropTypes.array.isRequired,
};

export default OverlappedCards;
