// import React from "react";
import PropTypes from 'prop-types';

const CardsLetter = ({ color, label, amount, total }) => {
  return (
    <div className="ml-8">
      <div className="flex items-start">
        <div className="font-semibold text-[#bfbdbd] mr-4">
          <div
            className="w-[44px] h-[34px] text-2xl"
            style={{
              color: color,
            }}
          >
            {label}
          </div>
        </div>
        <div>
          <div className="w-[200px] h-[34px]">
            <span className="text-2xl font-semibold">{amount}</span>
            <span className="text-base"> / {total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardsLetter.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CardsLetter;
