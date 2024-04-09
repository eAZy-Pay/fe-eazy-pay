import { useState, useEffect } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import CardRecommendation from './CardRecommendation';
import DonutChart from '../../components/chart/DonutChart';
import MainDashBoard from '../../components/layout/MainDashBoard';
import { getCategoryCards } from '../../apis/CardAPI';
import { getMonthlyFor6ByUserId } from '../../apis/PaymentHistoryAPI';

// 사용자 지출 데이터를 가져오는 커스텀 훅
function useUserExpenses(userId) {
  const [monthlyFor6, setMonthlyFor6] = useState([]);

  useEffect(() => {
    getMonthlyFor6ByUserId(userId).then(setMonthlyFor6);
  }, [userId]);

  return monthlyFor6;
}

// 카테고리 별 카드 정보를 가져오는 커스텀 훅
function useCategoryCards(categoryId) {
  const [categoryCards, setCategoryCards] = useState([]);

  useEffect(() => {
    if (categoryId !== undefined) {
      getCategoryCards(categoryId).then(setCategoryCards);
    }
  }, [categoryId]);

  return categoryCards;
}

const RecommendationPage = () => {
  const [checkedIndex, setcheckedIndex] = useState(0);
  const handleLegendClick = (seriesIndex) => {
    // if (checkedIndex === seriesIndex) {
    //   setcheckedIndex(-1);
    // } else {
    //   setcheckedIndex(seriesIndex);
    // }
    setcheckedIndex(seriesIndex);
  };
  const monthlyFor6 = useUserExpenses(2);
  const categoryId = monthlyFor6[checkedIndex]?.categoryId;
  const categoryCards = useCategoryCards(categoryId);

  return (
    <>
      <DefaultLayout
        banner={
          <MainDashBoard
            name="천지민"
            // title="<div className='text-2xl font-bold text-left mt-8 mb-4 ml-4'><div> </>"
            // title="님의 6개월 간 소비 내역으로 카드를 추천드릴게요"
            bgColor="#F4F7FC"
            chart={
              <DonutChart
                data={monthlyFor6}
                handleLegendClick={handleLegendClick}
                checkedIndex={checkedIndex}
              />
            }
          />
        }
      >
        <CardRecommendation
          data={monthlyFor6}
          categoryCards={categoryCards}
          handleLegendClick={handleLegendClick}
          checkedIndex={checkedIndex}
        />
      </DefaultLayout>
    </>
  );
};

export default RecommendationPage;
