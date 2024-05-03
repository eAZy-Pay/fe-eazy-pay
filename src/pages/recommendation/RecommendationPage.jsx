import { useEffect, useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import DonutChart from '../../components/chart/DonutChart';
import MainDashBoard from '../../components/layout/MainDashBoard';
import useCategoryCards from '../../hooks/useCategoryCards';
import useUserMonthlyFor6 from '../../hooks/useUserMonthlyFor6';
import useUsageStaticsByUserIdAndDate from '../../hooks/useUsageStaticsByUserIdAndDate';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import SearchImg from '../../assets/searchImg.png';
import Banner from '../../components/Banner';
import { getUserSession } from '../../utils/authUtils';
import DefaultFrame from '../../components/layout/DefaultFrame';
import CardRecommendation from './CardRecommendation';
import PercentileChart from './PercentileChart';

const RecommendationPage = () => {
  const [checkedIndex, setCheckedIndex] = useState(0);
  const handleLegendClick = (seriesIndex) => {
    setCheckedIndex(seriesIndex);
  };
  const [totalAmount, setTotalAmount] = useState(0);
  const [userTitle, setUserTitle] = useState('');
  const [userState, setUserState] = useState(2); // 초기 상태는 비로그인 상태로 설정

  const user = getUserSession();
  const userId = user?.uid;
  const monthlyFor6 = useUserMonthlyFor6({ userId: userId });
  const usageStatics = useUsageStaticsByUserIdAndDate(user?.uid || 0);
  const otherMonthlyFor6 = useUserMonthlyFor6({ age: usageStatics[0]?.age });
  const categoryId =
    monthlyFor6[checkedIndex]?.categoryId || otherMonthlyFor6[checkedIndex]?.categoryId;
  const categoryCards = useCategoryCards(categoryId);

  useEffect(() => {
    if (userId) {
      if (monthlyFor6.length > 0) {
        setUserState(0); // 로그인하고 사용자 소비 정보가 있을 때
        setUserTitle(user.userName + '님');
      } else {
        setUserState(1); // 로그인했지만 소비 정보가 없을 때
        setUserTitle(`${usageStatics[0]?.age}~${usageStatics[0]?.age + 5}세`);
      }
    } else {
      setUserState(2); // 로그인하지 않았을 때
      setUserTitle('사용자들');
    }

    if (monthlyFor6.length > 0) {
      const total = monthlyFor6.reduce((acc, cur) => acc + cur.useAmount, 0);
      setTotalAmount(total);
    }
  }, [monthlyFor6, userId, user, usageStatics]);

  return (
    <>
      <DefaultLayout
        banner={
          // 화면 크기가 클때는 flex-row, 작을때는 flex-col 반응형으로 변경
          <div className="flex flex-col lg:flex-row lg:w-full lg:h-full gap-4 ">
            <PercentileChart
              userState={userState}
              userTitle={userTitle}
              usageStatics={usageStatics}
              totalAmount={totalAmount}
            />
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div className="flex w-full justify-start items-center">
                <div className="text-4xl font-bold mt-8 mb-4 mr-2 text-main-color">eAZy</div>
                <p className="text-3xl text-left mt-8 mb-4">가 추천해요</p>
              </div>
              <DefaultFrame>
                {
                  <div className="flex flex-col w-full items-center justify-between p-4 gap-4 h-[32rem]">
                    <CardRecommendation />
                  </div>
                }
              </DefaultFrame>
            </div>
          </div>
        }
        bannerClassName={'py-14'}
      >
        <MainDashBoard
          title={
            <>
              {user ? (
                monthlyFor6.length > 0 ? (
                  <>
                    <div className="text-4xl flex justify-between items-center mt-8 mb-4 mr-2">
                      {user.userName}
                    </div>
                    <p className="text-3xl text-left mt-8 mb-4">
                      님의 6개월 간 월평균 사용 금액입니다.{' '}
                    </p>
                  </>
                ) : (
                  <p className="text-3xl text-left mt-8 mb-4">
                    {usageStatics[0]?.age}~{usageStatics[0]?.age + 5}세의 사용자들이 6개월 간 월평균
                    사용 금액입니다.{' '}
                  </p>
                )
              ) : (
                <p className="text-3xl text-left mt-8 mb-4">
                  사용자들의 6개월 간 월평균 사용 금액입니다.{' '}
                </p>
              )}
            </>
          }
          chart={
            <DonutChart
              data={monthlyFor6.length === 0 ? otherMonthlyFor6 : monthlyFor6}
              handleLegendClick={handleLegendClick}
              checkedIndex={checkedIndex}
            />
          }
        />
        {user ? (
          <p className="text-3xl font-bold text-left mt-8 mb-4">
            자주 사용하시는 카테고리별로 좋은 카드 모아봤어요!
          </p>
        ) : (
          <p className="text-3xl font-bold text-left mt-8 mb-4">
            사용자들이 자주 사용하는 카테고리별로 좋은카드 모아봤어요!
          </p>
        )}

        <HashTagSearch
          tags={monthlyFor6}
          checkedIndex={checkedIndex}
          setCheckedIndex={setCheckedIndex}
        />
        <CategoryCards categoryCards={categoryCards || []} maxColumn={3} maxRow={1} />
        <Banner
          to={'/card-search'}
          title="찾으시는 카드가 없나요?"
          description="검색하러 가기"
          imageSrc={SearchImg}
        />
      </DefaultLayout>
    </>
  );
};

export default RecommendationPage;
