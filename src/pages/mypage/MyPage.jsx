import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import ProfileSection from './ProfileSection';
import RecentPayment from './RecentPayment';
import AvailableFunds from './AvailableFunds';
import CardManagement from './CardManagement';
import { getPaymentHistoryData } from '../../apis/UserAPI';
import { getCardsSummary } from '../../apis/CardAPI';
import { getUserSession } from '../../utils/authUtils';

const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MyPage = () => {
  const navigate = useNavigate();

  const [userMain, setUserMain] = useState({
    name: '',
    cards: [],
    transactions: [],
    availableFunds: 0,
    totalPayemntLimit: 0,
    totalUsedAmount: 0,
    totalBenefitAmount: 0,
  });

  useEffect(() => {
    const user = getUserSession();
    if (!user) {
      // 사용자 정보가 없으면,
      navigate('/login'); // 로그인 페이지로 리다이렉트합니다.
    } else {
      const fetchData = async () => {
        try {
          const uid = user.uid;
          const name = user.userName;

          const [data, mainBanner] = await Promise.all([
            getPaymentHistoryData(uid, currentYear, currentMonth, 0, 5),
            getCardsSummary(uid, 1, 0),
          ]);

          const cards = Array.isArray(mainBanner.cards) ? mainBanner.cards : [];

          const availableFunds = mainBanner?.availableFunds || 0;
          const totalUsedAmount = mainBanner?.totalUsedAmount || 0;
          const totalBenefitAmount = mainBanner?.totalBenefitAmount || 0;
          const totalPaymentLimit = mainBanner?.totalPaymentLimit || 0;

          setUserMain((prev) => ({
            ...prev,
            name,
            cards,
            transactions: Array.isArray(data) ? data : [],
            availableFunds,
            totalPaymentLimit,
            totalUsedAmount,
            totalBenefitAmount,
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
              totalLimit={userMain.totalPaymentLimit}
              usedAmount={userMain.totalUsedAmount}
            />
          </div>
          <CardManagement cards={userMain.cards} amount={userMain.totalBenefitAmount} />
        </div>
      </DefaultLayout>
    </>
  );
};

export default MyPage;
