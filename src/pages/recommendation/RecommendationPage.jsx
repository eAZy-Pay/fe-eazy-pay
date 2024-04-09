import { useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import CardRecommendation from './CardRecommendation';
import DonutChart from '../../components/chart/DonutChart';
import MainDashBoard from '../../components/layout/MainDashBoard';
import useCategoryCards from '../../hooks/useCategoryCards';
import useUserMonthlyFor6 from '../../hooks/useUserMonthlyFor6';

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
  const monthlyFor6 = useUserMonthlyFor6(2);
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
