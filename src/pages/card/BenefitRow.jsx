import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';

const BenefitRow = ({ categoryName, benefitRate, className, index }) => {
  return (
    <div className="flex w-full my-1" key={index}>
      <div
        className={`flex justify-center items-center w-full text-base gap-1 sm:text-lg md:text-xl md:gap-2 lg:text-2xl lg:gap-2 font-semibold ${className}`}
      >
        <div className="flex w-full items-center gap-1 sm:gap-2 md:gap-4 lg:gap-4">
          <GetCategoryIcon categoryName={categoryName} />
          <div className="w-28 md:w-36 lg:w-40 text-center">{categoryName}</div>
          <div className="w-28 md:w-32 lg:w-36 hidden md:block lg:block">카테고리에서</div>
          <div className="w-10 md:w-12 lg:w-14 text-center">{`${benefitRate}%`}</div>
          <div className="w-12">적립</div>
        </div>
      </div>
    </div>
  );
};

BenefitRow.propTypes = {
  categoryName: PropTypes.string,
  benefitRate: PropTypes.number,
  index: PropTypes.number,
  className: PropTypes.string,
};

GetCategoryIcon.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default BenefitRow;
