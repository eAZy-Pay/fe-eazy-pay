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
import LoadingChart from '../../components/chart/LoadingChart';
import DefaultFrame from '../../components/layout/DefaultFrame';
import CardRecommendation from './CardRecommendation';

const RecommendationPage = () => {
  const [checkedIndex, setcheckedIndex] = useState(0);
  const handleLegendClick = (seriesIndex) => {
    setcheckedIndex(seriesIndex);
  };
  const [totalAmount, setTotalAmount] = useState(0);

  const user = getUserSession();
  const userId = user?.uid;
  const monthlyFor6 = useUserMonthlyFor6({ userId: userId });
  const usageStatics = useUsageStaticsByUserIdAndDate(user?.uid || 0);
  const otherMonthlyFor6 = useUserMonthlyFor6({ age: usageStatics[0]?.age });
  const categoryId =
    monthlyFor6[checkedIndex]?.categoryId || otherMonthlyFor6[checkedIndex]?.categoryId;
  const categoryCards = useCategoryCards(categoryId);

  var percentileGroup = 0;
  for (let i = 0; i < usageStatics.length; i++) {
    if (usageStatics[i].useAmount >= totalAmount) {
      percentileGroup = usageStatics[i].percentile;
      break;
    }
    if (i === usageStatics.length - 1) {
      percentileGroup = 100;
    }
  }

  const upperPercentile = percentileGroup;

  useEffect(() => {
    if (monthlyFor6.length > 0) {
      const total = monthlyFor6.reduce((acc, cur) => acc + cur.useAmount, 0);
      setTotalAmount(total);
    }
  }, [monthlyFor6, userId]);

  return (
    <>
      <DefaultLayout
        banner={
          <div className="flex gap-4">
            <DefaultFrame>
              <div className="flex flex-col w-full h-full items-center justify-between p-4 gap-4">
                <div className="flex items-center justify-center">
                  {user ? (
                    <div className="text-2xl text-center">
                      <p>{user?.userName}님의 월평균 사용 금액은</p>
                      <div className="flex items-center justify-center">
                        <p className="text-4xl font-bold">{totalAmount.toLocaleString()}원</p>
                        <p className="text-2xl">입니다. </p>
                      </div>
                      {/* 상위 몇 %에 속하는지 표시 */}
                      <p>
                        상위 <span className="text-4xl font-bold">{upperPercentile}%</span>에
                        속합니다.
                      </p>
                      <p>
                        {usageStatics[0]?.age}~{usageStatics[0]?.age + 5}세의 중위값은{' '}
                        {usageStatics
                          .find((usage) => usage.percentile === 50)
                          ?.useAmount.toLocaleString()}
                        원입니다.
                      </p>
                    </div>
                  ) : (
                    <div className="text-2xl text-center">
                      <p>사용자들의 중위값은</p>
                      <div className="flex items-center justify-center">
                        <p className="text-4xl font-bold">
                          {usageStatics
                            .find((usage) => usage.percentile === 50)
                            ?.useAmount.toLocaleString()}
                          원
                        </p>
                        <p className="text-2xl">입니다. </p>
                      </div>
                    </div>
                  )}
                </div>
                {usageStatics.length > 0 ? (
                  <LoadingChart usageStatics={usageStatics} totalAmount={totalAmount} />
                ) : null}
              </div>
            </DefaultFrame>
            <DefaultFrame>
              {
                <div className="flex flex-col w-full h-full items-center justify-between p-4 gap-4">
                  <CardRecommendation />
                </div>
              }
            </DefaultFrame>
          </div>
        }
        bannerClassName={'py-14 bg-[#F4F7FC]'}
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
            자주 사용하시는 카테고리별로 좋은카드 모와드렸어요!
          </p>
        ) : (
          <p className="text-3xl font-bold text-left mt-8 mb-4">
            사용자들이 자주 사용하는 카테고리별로 좋은카드 모와드렸어요!
          </p>
        )}

        <HashTagSearch
          tags={monthlyFor6}
          checkedIndex={checkedIndex}
          setCheckedIndex={setcheckedIndex}
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
