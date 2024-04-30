import PropTypes from 'prop-types';
import './styles.css'; // 애니메이션 스타일을 위한 CSS 파일 임포트

const StyledFillingSquares = ({ upperPercentile }) => {
  const baseSize = 100; // 각 사각형의 기본 크기
  const variation = 40; // 크기 변형을 위한 편차
  const numSquares = 5; // 사각형의 수
  const animationDuration = 2.5; // 애니메이션 지속 시간
  const squares = [];

  for (let i = 0; i < numSquares; i++) {
    const size = baseSize + (i < numSquares / 2 ? i : numSquares - i - 1) * variation;

    squares.push(
      <div
        key={i}
        className="relative overflow-hidden bg-gray-300"
        style={{
          width: `${baseSize}px`,
          height: `${size * 1.7}px`, // 사각형의 높이
          borderTopLeftRadius: '10px',
          borderTopRightRadius: '10px',
          borderBottom: '1px solid #e5e5e5',
        }}
      >
        <div
          className="absolute bottom-0 left-0 right-0 bg-gray-500"
          style={{
            height: `${Math.min(upperPercentile, 100)}%`, // 상위 퍼센트에 따라 높이 제한
            animation: `fillUp ${animationDuration}s linear`, // 차오르는 애니메이션
          }}
        />
      </div>
    );
  }

  return <div className="flex justify-center items-end">{squares}</div>;
};

StyledFillingSquares.propTypes = {
  upperPercentile: PropTypes.number.isRequired,
};

const LoadingChart = ({ usageStatics, totalAmount }) => {
  var percentileGroup = 100;
  for (let i = 0; i < usageStatics.length; i++) {
    if (usageStatics[i].useAmount >= totalAmount) {
      percentileGroup = usageStatics[i].percentile;
      break;
    }
  }

  const upperPercentile = percentileGroup ? percentileGroup : 100; // 최대값 설정

  return (
    <>
      <div className="flex items-center justify-center w-full relative">
        <StyledFillingSquares upperPercentile={upperPercentile} />
      </div>
    </>
  );
};

LoadingChart.propTypes = {
  usageStatics: PropTypes.array.isRequired,
  totalAmount: PropTypes.number.isRequired,
};

export default LoadingChart;
