// import React from "react"; // React 17 이전의 경우 필요
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const CardsGage = ({ color, amount = 0, total = 1, width = 'w-full', margin = ' ' }) => {
  const [barWidth, setBarWidth] = useState('0%'); // 초기 width 상태를 0%로 설정

  useEffect(() => {
    // 백분율 계산
    const percentage = total > 0 ? (amount / total) * 100 : 0;
    const finalWidth = percentage > 100 ? '100%' : `${percentage}%`; // 최종 width 설정

    // 마운트 후에 width 상태를 백분율 값으로 변경해 애니메이션 적용
    const animationTimeout = setTimeout(() => setBarWidth(finalWidth), 0);
    return () => {
      setBarWidth('0%');
      clearTimeout(animationTimeout);
    };
  }, [amount, total]);

  return (
    <div className={`flex justify-center items-center space-x-4 w-[23.6rem] ${margin}`}>
      <div className={`rounded-[1.7em] bg-[#115]/40 overflow-hidden relative h-[1.5em]  ${width}`}>
        {/* 계산된 백분율을 가로 길이로 설정 */}
        <div
          className="h-full rounded-[1.7em] absolute bottom-0 left-0"
          style={{
            width: barWidth,
            backgroundColor: color,
            transition: 'width 1s ease-out',
          }}
        ></div>
      </div>
    </div>
  );
};

CardsGage.propTypes = {
  color: PropTypes.string.isRequired,
  amount: PropTypes.number,
  total: PropTypes.number,
  width: PropTypes.string,
  margin: PropTypes.string,
};

export default CardsGage;
