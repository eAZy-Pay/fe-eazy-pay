// import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import arrowIcon from '../../assets/arrowIcon.svg';
import PropTypes from 'prop-types';

const AmountDetail = ({ label, amount }) => (
  <div className="flex justify-between font-bold">
    <span className="text-[#666666]">{label}</span>
    <span>{amount.toLocaleString()}원</span>
  </div>
);

AmountDetail.propTypes = {
  label: PropTypes.string,
  amount: PropTypes.number,
};

const AvailableFunds = ({ funds = 0, totalLimit = 0, usedAmount = 0 }) => (
  <DefaultFrame boxShadow={false}>
    <div className="flex items-center justify-between px-6 py-4">
      <h2 className="text-2xl font-extrabold">이용가능금액</h2>
      <img src={arrowIcon} alt="ArrowIcon" />
    </div>
    <div className="px-6">
      <span className="text-3xl font-extrabold">{funds.toLocaleString()}원</span>
    </div>
    <hr className="my-4 mx-6" />
    <div className="flex flex-col p-6 text-xl gap-3">
      <AmountDetail label="총 한도" amount={totalLimit} />
      <AmountDetail label="이용한 금액" amount={usedAmount} />
    </div>
  </DefaultFrame>
);

AvailableFunds.propTypes = {
  funds: PropTypes.number,
  totalLimit: PropTypes.number,
  usedAmount: PropTypes.number,
};

export default AvailableFunds;
