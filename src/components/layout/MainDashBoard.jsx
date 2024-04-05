import PropTypes from 'prop-types';
import DefaultFrame from './DefaultFrame';

const MainDashBoard = ({ bgColor, chart }) => {
  return (
    <div className="flex flex-col w-full items-center" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col w-[1200px]">
        <div className="flex w-full h-[80px] items-end justify-start">
          <div className="text-3xl flex justify-between items-center mt-8 mb-4 mr-2">천지민</div>
          <p className="text-2xl text-left mt-8 mb-4">님의 6개월 간 소비 내역으로 카드를 </p>
          <div className="text-3xl text-left mb-4 ml-2">추천</div>
          <div className="text-2xl text-left mt-8 mb-4">해드릴게요</div>
        </div>
        <div className="mb-10">
          <DefaultFrame>{chart}</DefaultFrame>
        </div>
      </div>
    </div>
  );
};

MainDashBoard.propTypes = {
  bgColor: PropTypes.string.isRequired,
  chart: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
};

export default MainDashBoard;
