import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import ProfileSection from './ProfileSection';
import RecentPayment from './RecentPayment';
import AvailableFunds from './AvailableFunds';
import CardManagement from './CardManagement';
import eazy from '../../assets/eAZyCard.svg';
import getPaymentHistoryData from '../../apis/UserAPI';

const MyPage = () => {
  const navigate = useNavigate();

  const [userMain, setUserMain] = useState({
    name: '천지민',
    images: [
      eazy,
      'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
      'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/21/1fa0a89f-0811-43b1-9c24-a4bb8bf750f4.png',
      'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/bfee31ee-d644-4bc8-bbdb-1a4f78eb231c.gif',
    ],
    transactions: [],
    benefitAmount: 200000,
    availableFunds: 3000000,
    totalLimit: 5000000,
    usedAmount: 2000000,
  });

  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      // 사용자 정보가 없으면,
      navigate('/login'); // 로그인 페이지로 리다이렉트합니다.
    } else {
      const fetchData = async () => {
        try {
          const uid = JSON.parse(user).uid;
          const data = await getPaymentHistoryData(uid);
          setUserMain((prev) => ({
            ...prev,
            transactions: data,
          }));
        } catch (error) {
          console.error('Failed to load user data:', error);
        }
      };
      fetchData();
    }
  }, [navigate]);

  return (
    <>
      <DefaultLayout>
        <div className="flex justify-between h-auto pt-14">
          <div className="flex flex-col w-1/2   gap-10 p-4">
            <ProfileSection name={userMain.name} />
            <RecentPayment transactions={userMain.transactions} />
            <AvailableFunds
              funds={userMain.availableFunds}
              totalLimit={userMain.totalLimit}
              usedAmount={userMain.usedAmount}
            />
          </div>
          <CardManagement images={userMain.images} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default MyPage;
