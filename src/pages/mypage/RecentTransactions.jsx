import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import ArrowIcon from './ArrowIcon';
import PropTypes from 'prop-types';

const TransactionItem = ({ transaction }) => (
  <>
    <div className="flex justify-between font-extrabold">
      <span>{transaction.name}</span>
      <span>{transaction.amount}</span>
    </div>
    <div className="text-[#666666]">{transaction.date}</div>
    <div />
  </>
);

const RecentTransactions = ({ transactions }) => (
  <DefaultFrame boxShadow={false}>
    {/* 이용내역 */}
    <div className=" flex justify-between items-center text-2xl font-extrabold mx-6 my-4">
      최근 이용내역
      <div className="flex">
        <ArrowIcon />
      </div>
    </div>
    {transactions.slice(0, 5).map((transaction, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col p-6 text-lg gap-1">
          <TransactionItem transaction={transaction} />
        </div>
        {index !== transactions.slice(0, 5).length - 1 && <hr className="mx-6" />}
      </React.Fragment>
    ))}
  </DefaultFrame>
);

RecentTransactions.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    name: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecentTransactions;
