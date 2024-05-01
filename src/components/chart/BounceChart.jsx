import PropTypes from 'prop-types';
import './styles.css'; // 애니메이션 스타일을 위한 CSS 파일 임포트

const StyledFillingSquares = ({ rank, setRank }) => {
  const baseSize = 2.5; // 각 사각형의 기본 크기
  const variation = 1.2; // 크기 변형을 위한 편차
  const numSquares = 10; // 사각형의 수
  const squares = [];

  for (let i = 0; i < numSquares; i++) {
    const size = baseSize + i * variation;
    const width = baseSize + 'rem'; // 사각형의 너비
    const height = size * 1.43 + 'rem'; // 사각형의 높이

    if (i === rank) {
      squares.push(
        <div
          key={i}
          className="flex flex-col items-center justify-center mx-1 bounce cursor-pointer"
        >
          <div className="w-10 h-10 bg-blue-500 rounded-full"></div>
          <div
            style={{
              width: width,
              height: height,
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              borderWidth: '0.5rem',
              borderBottomWidth: '0',
              borderColor: 'black',
            }}
          ></div>
        </div>
      );
    } else {
      squares.push(
        <div
          key={i}
          className="mx-1 cursor-pointer"
          style={{
            width: width,
            height: height, // 사각형의 높이
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
            borderWidth: '0.5rem',
            borderBottomWidth: '0',
            borderColor: 'black',
          }}
          onClick={() => {
            setRank(i);
          }}
        ></div>
      );
    }
  }

  return <div className="flex justify-center items-end">{squares}</div>;
};

StyledFillingSquares.propTypes = {
  rank: PropTypes.number.isRequired,
  setRank: PropTypes.func.isRequired,
};

const BounceChart = ({ rank, setRank }) => {
  return (
    <>
      <div className="flex flex-col w-full justify-around">
        <div className="w-full relative gap-10">
          <StyledFillingSquares rank={rank} setRank={setRank} />
        </div>
        <div
          style={{
            borderWidth: '0.5rem',
            borderColor: 'black',
          }}
        ></div>
      </div>
    </>
  );
};

BounceChart.propTypes = {
  rank: PropTypes.number.isRequired,
  setRank: PropTypes.func.isRequired,
};

export default BounceChart;
