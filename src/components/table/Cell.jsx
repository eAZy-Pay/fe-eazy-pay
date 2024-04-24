import PropTypes from 'prop-types';

const Cell = ({ value, width, bgColor }) => {
  return (
    <>
      <div
        className={`flex flex-col justify-center items-start self-stretch flex-grow`}
        style={{ width: width, backgroundColor: bgColor }}
      >
        <div
          className={`flex justify-start items-center self-stretch flex-grow flex-shrink-0 relative overflow-hidden gap-2 px-3 py-4`}
        >
          <p className={`flex-grow flex-shrink-0 text-sm font-medium text-left text-[#121619]`}>
            {value}
          </p>
          <div className="flex-grow flex-shrink-0 w-4 h-4 relative overflow-hidden" />
        </div>
      </div>
    </>
  );
};

Cell.propTypes = {
  value: PropTypes.string,
  width: PropTypes.string,
  bgColor: PropTypes.string,
};

export default Cell;
