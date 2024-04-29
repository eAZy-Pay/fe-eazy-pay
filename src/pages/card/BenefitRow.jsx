// import React from 'react';
import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';

const BenefitRow = ({ categoryName, benefitRate, className }) => {
  return (
    <div className="flex w-full my-1">
      <div
        className={`flex justify-center items-center w-full text-3xl font-semibold ${className}`}
      >
        <div className="flex items-center">
          <GetCategoryIcon categoryName={categoryName} />
          <div className="mx-2 w-40 text-center">{categoryName}</div>
          <div className="mx-2">{`카테고리에서`}</div>
          <div className="mx-2 w-16 text-center">{`${benefitRate}%`}</div>
          <div className="font-semibold">{`할인`}</div>
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
