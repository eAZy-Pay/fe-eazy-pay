// import React from "react";
import PropTypes from 'prop-types';

const CardLetter = ({ color = '', label = '', amount = 0, total = 0 }) => {
  return (
    <div className="flex justify-center ml-8">
      <div className="flex items-start">
        <div className="mr-4 font-semibold text-[#bfbdbd]">
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
  color: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.number,
  total: PropTypes.number,
};

export default CardLetter;
