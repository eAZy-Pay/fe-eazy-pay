// import React from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import ProfileSection from './ProfileSection';
import RecentTransactions from './RecentTransactions';
import AvailableFunds from './AvailableFunds';
import CardManagement from './CardManagement';
import eazy from '../../assets/eAZyCard.svg';

const userMain = {
  userName: '천지민',
  images: [
    eazy,
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/21/1fa0a89f-0811-43b1-9c24-a4bb8bf750f4.png',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/bfee31ee-d644-4bc8-bbdb-1a4f78eb231c.gif',
  ],
  benefitAmount: 200000,
  transactions: [
    { name: '지에스(GS)25 SH상암1..', amount: '3,700원', date: '2024.04.17 08:50' },
    { name: '쿠팡이츠', amount: '10,700원', date: '2024.04.16 22:29' },
    { name: '시험원서접수', amount: '9,700원', date: '2024.04.17 08:50' },
  ],
  availableFunds: 3000000,
  totalLimit: 5000000,
  usedAmount: 2000000,
};

const MyPage = () => (
  <DefaultLayout>
    <div className="flex justify-between h-auto pt-14">
      <div className="flex flex-col w-1/2   gap-10 p-4">
        <ProfileSection name={userMain.userName} />
        <RecentTransactions transactions={userMain.transactions} />
        <AvailableFunds
          funds={userMain.availableFunds}
          totalLimit={userMain.totalLimit}
          usedAmount={userMain.usedAmount}
        />
      </div>
      <CardManagement images={userMain.images} />
    </div>
  </DefaultLayout>
);

export default MyPage;
