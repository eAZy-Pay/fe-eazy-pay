import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// LoadData 컴포넌트에 onLoadingComplete props 추가
const LoadData = ({ onLoadingComplete }) => {
  const [localloading, setLoading] = useState(true);
  useEffect(() => {
    // 시뮬레이션을 위한 타이머 설정
    const timer = setTimeout(() => {
      setLoading(false); // 여기에서 setLoading을 호출하여 상태를 업데이트
      onLoadingComplete(); // 로딩이 완료되면 이 함수를 호출합니다.
    }, 1300);

    return () => clearTimeout(timer);
  }, [onLoadingComplete]); // 의존성 배열에 콜백을 추가합니다.

  return (
    <div className="flex ml-56">
      <div className="flex flex-col items-center justify-center h-full">
        {localloading ? (
          <>
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
            <h2 className="text-xl text-slate-700 mt-8">데이터를 불러오는 중입니다...</h2>
          </>
        ) : (
          <h2 className="text-xl text-slate-700">우리카드 데이터를 불러왔어요!</h2>
        )}
      </div>
    </div>
  );
};

LoadData.propTypes = {
  onLoadingComplete: PropTypes.func.isRequired,
};

export default LoadData;
