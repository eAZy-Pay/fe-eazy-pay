import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import arrowIcon from '../../assets/arrowIcon.svg';
import PropTypes from 'prop-types';

const PaymentItem = ({ paymentDate, paymentAmount, storeName }) => {
  // ISO 문자열을 받아서 'yyyy.MM.dd HH:mm' 형식으로 변환
  const formattedDate =
    paymentDate.substring(0, 10).replace(/-/g, '.') + ' ' + paymentDate.substring(11, 16);

  // 이름이 일정 길이를 초과할 경우 축약
  const maxStoreNameLength = 10;
  const displayStoreName = storeName.length > maxStoreNameLength
    ? storeName.substring(0, maxStoreNameLength) + '..'
    : storeName;

  return (
    <>
      <div className="flex justify-between font-extrabold">
        <span>{displayStoreName}</span>
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
    {transactions.slice(0, 4).map((transaction, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col p-6 text-lg gap-1">
          <PaymentItem {...transaction} />
        </div>
        {index !== transactions.slice(0, 4).length - 1 && <hr className="mx-6" />}
      </React.Fragment>
    ))}
  </DefaultFrame>
);

RecentPayment.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      paymentDate: PropTypes.string,
      paymentAmount: PropTypes.number,
      storeName: PropTypes.string,
    })
  ),
};

PaymentItem.propTypes = {
  paymentDate: PropTypes.string,
  paymentAmount: PropTypes.number,
  storeName: PropTypes.string,
};

export default RecentPayment;
