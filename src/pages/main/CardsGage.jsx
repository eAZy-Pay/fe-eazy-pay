// import React from "react"; // React 17 이전의 경우 필요
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardsGage = ({ color, amount = 0, total = 1 }) => {
  const [width, setWidth] = useState('0%'); // 초기 width 상태를 0%로 설정

  useEffect(() => {
    // 백분율 계산
    const percentage = total > 0 ? (amount / total) * 100 : 0;
    // 마운트 후에 width 상태를 백분율 값으로 변경해 애니메이션 적용
    const animationTimeout = setTimeout(() => setWidth(`${percentage}%`), 0);
    return () => clearTimeout(animationTimeout);
  }, [amount, total]);

  return (
    <div className="flex items-center ml-36 space-x-4 w-[378px]">
      <div className="w-full h-[1.5rem] rounded-[1.7rem] bg-[#115]/40 overflow-hidden relative">
        {/* 계산된 백분율을 가로 길이로 설정 */}
        <div
          className="h-full rounded-[1.7rem] absolute bottom-0 left-0"
          style={{
            width: width,
            backgroundColor: color,
            transition: 'width 1s ease-out',
          }}
        ></div>
      </div>
    </div>
  );
};

CardsGage.propTypes = {
  color: PropTypes.string.isRequired, // 'color' prop이 반드시 문자열이어야 함을 지정합니다.
  amount: PropTypes.number.isRequired, // 'amount' prop이 반드시 숫자여야 함을 지정합니다.
  total: PropTypes.number.isRequired, // 'total' prop이 반드시 숫자여야 함을 지정합니다.
};

export default CardsGage;
