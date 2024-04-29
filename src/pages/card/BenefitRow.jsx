//import React from 'react';
import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';

const BenefitRow = ({ categoryName, benefitRate, index }) => {
  return (
    <div className="flex w-full my-1" key={index}>
      <div className="flex justify-between items-center w-full text-3xl font-semibold">
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
};

GetCategoryIcon.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default BenefitRow;
