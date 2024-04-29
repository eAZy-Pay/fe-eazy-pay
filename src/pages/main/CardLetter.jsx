// import React from "react";
import PropTypes from 'prop-types';

const CardLetter = ({ color = '', label = '', amount = 0, total = 1 }) => {
  let totalDisplay;
  let specialStyle = '';

  if (total === 0) {
    totalDisplay = '/ 무실적';
    specialStyle = ' text-2xl font-bold text-red-500'; // 무실적인 경우의 스타일
  } else if (total >= 1000000000) {
    totalDisplay = '/ 제한없음';
    specialStyle = 'text-2xl font-bold text-green-500'; // 제한없음 경우의 스타일
  } else {
    totalDisplay = `/ ${total.toLocaleString()}`; // 숫자 포맷으로 출력
  }

  return (
    <div className="flex justify-center ml-8">
      <div className="flex">
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
          <div className="">
            <span className="text-2xl font-semibold">{amount.toLocaleString()}</span>
            <span className={specialStyle.length > 0 ? specialStyle : 'text-base'}>
              {' '}
              {totalDisplay}
            </span>
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
