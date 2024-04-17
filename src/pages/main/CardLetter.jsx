// import React from "react";
import PropTypes from 'prop-types';

const CardLetter = ({ color = '', label = '', amount = 0, total = 0 }) => {
  return (
    <div className="ml-8 flex justify-center">
      <div className="flex items-start">
        <div className="font-semibold text-[#bfbdbd] mr-4">
          <div
            className=" text-2xl"
            style={{
              color: color,
            }}
          >
            {label}
          </div>
        </div>
        <div>
          <div className="w-[200px] h-[34px]">
            <span className="text-2xl font-semibold">{amount.toLocaleString()}</span>
            <span className="text-base"> / {total.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

CardLetter.propTypes = {
  color: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};

export default CardLetter;
