import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import arrowIcon from '../../assets/arrowIcon.svg';
import PropTypes from 'prop-types';

const PaymentItem = ({ paymentDate, paymentAmount, storeCode }) => {
  // ISO 문자열을 받아서 'yyyy.MM.dd HH:mm' 형식으로 변환
  const formattedDate =
    paymentDate.substring(0, 10).replace(/-/g, '.') + ' ' + paymentDate.substring(11, 16);

  return (
    <>
      <div className="flex justify-between font-extrabold">
        <span>{storeCode}</span>
        <span>{paymentAmount.toLocaleString()}원</span>
        <></>
      </div>
      <div className="text-[#666666]">{formattedDate}</div>
    </>
  );
};

const RecentPayment = ({ transactions = [] }) => (
  <DefaultFrame boxShadow={false}>
    <div className="flex justify-between items-center text-2xl font-extrabold mx-6 my-4">
      최근 이용내역
      <div className="flex">
        <img src={arrowIcon} alt="Arrow Icon" />
      </div>
    </div>
    {transactions.slice(0, 5).map((transaction, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col p-6 text-lg gap-1">
          <PaymentItem {...transaction} />
        </div>
        {index !== transactions.slice(0, 5).length - 1 && <hr className="mx-6" />}
      </React.Fragment>
    ))}
  </DefaultFrame>
);

RecentPayment.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      paymentDate: PropTypes.string,
      paymentAmount: PropTypes.number,
      storeCode: PropTypes.string,
    })
  ),
};

PaymentItem.propTypes = {
  paymentDate: PropTypes.string,
  paymentAmount: PropTypes.number,
  storeCode: PropTypes.string,
};

export default RecentPayment;
