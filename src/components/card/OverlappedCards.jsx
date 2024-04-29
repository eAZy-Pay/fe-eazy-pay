import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
const OverlappedCards = ({ images }) => {
  const [move, setMove] = useState(0);
  useEffect(() => {
    setMove(1);
    setTimeout(() => {
      setMove(0);
    }, 1000); // 1초 후에 카드가 다시 합쳐지도록 설정
  }, []);

  return (
    <>
      <div
        className={`flex w-[18.5em] h-[13em] z-10 relative ml-12`}
        style={{ marginRight: `${images.length * 0.5}em` }}
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
              transition: `transform ${images.length > 2 ? (move ? 0.1 * index * 1.5 : 0.3) : 0.3}s ${move ? 'ease-out' : 'ease'}`,
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
