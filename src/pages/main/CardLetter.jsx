// import React from "react";
import PropTypes from 'prop-types';

const CardLetter = ({
  color = '',
  label = '',
  amount = 0,
  total = 1,
  fulfilledColor = '',
  fulfilled = false,
  className,
}) => {
  let totalDisplay;
  let specialStyle = '';

  if (total === 0) {
    totalDisplay = '/ 무실적';
    specialStyle = 'sm:text-2xl font-bold text-red-500'; // 무실적인 경우의 스타일
  } else if (total >= 1000000000) {
    totalDisplay = '/ 무제한';
    specialStyle = 'sm:text-2xl font-bold text-green-500'; // 제한없음 경우의 스타일
  } else {
    totalDisplay = `/ ${total.toLocaleString()}`; // 숫자 포맷으로 출력
  }

  const dynamicColor =
    label === '받은 혜택' && !fulfilled ? '#bfbdbd' : label === '채운 실적' ? color : color;

  return (
    <div className={`flex justify-center ${className}`}>
      <div className="flex items-center">
        <div className="mr-4 font-semibold text-[#bfbdbd]">
          <div className="sm:text-2xl" style={{ color: dynamicColor }}>
            {label}
          </div>
        </div>
        <div>
          <div className="">
            <span className="sm:text-2xl font-semibold" style={{ color: fulfilledColor }}>
              {amount.toLocaleString()}
            </span>
            <span
              className={specialStyle.length > 0 ? specialStyle : 'sm:text-base'}
              style={{ color: fulfilledColor }}
            >
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
  fulfilledColor: PropTypes.string,
  fulfilled: PropTypes.bool,
  className: PropTypes.string,
};

export default CardLetter;
