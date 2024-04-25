import PropTypes from 'prop-types';
import DefaultFrame from './DefaultFrame';

const MainDashBoard = ({ chart, title, bgColor }) => {
  return (
    <div className="flex flex-col w-full items-center" style={{ backgroundColor: bgColor }}>
      <div className="flex flex-col w-[1200px]">
        <div className="flex w-full h-[80px] items-end justify-start">{title}</div>
        <div className="mb-10">
          <DefaultFrame>{chart}</DefaultFrame>
        </div>
      </div>
    </div>
  );
};

MainDashBoard.defaultProps = {
  bgColor: '',
};

MainDashBoard.propTypes = {
  chart: PropTypes.node.isRequired,
  title: PropTypes.object.isRequired,
  bgColor: PropTypes.string,
};

export default MainDashBoard;
