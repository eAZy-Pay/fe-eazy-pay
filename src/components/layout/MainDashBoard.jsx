import PropTypes from 'prop-types';
import DefaultFrame from './DefaultFrame';

const MainDashBoard = ({ chart, title }) => {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full h-[80px] items-end justify-start">{title}</div>
      <div className="mb-10">
        <DefaultFrame>{chart}</DefaultFrame>
      </div>
    </div>
  );
};

MainDashBoard.propTypes = {
  chart: PropTypes.node.isRequired,
  title: PropTypes.object.isRequired,
};

export default MainDashBoard;
