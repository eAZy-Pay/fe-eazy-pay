import { useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import DonutChart from '../../components/chart/DonutChart';
import MainDashBoard from '../../components/layout/MainDashBoard';
import useCategoryCards from '../../hooks/useCategoryCards';
import useUserMonthlyFor6 from '../../hooks/useUserMonthlyFor6';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import SearchImg from '../../assets/searchImg.png';
import Banner from '../../components/Banner';

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
        <HashTagSearch
          tags={monthlyFor6}
          checkedIndex={checkedIndex}
          setCheckedIndex={setcheckedIndex}
        />
        <CategoryCards categoryCards={categoryCards} />
        <Banner
          to={'/card-search'}
          title="찾으시는 카드가 없나요?"
          description="검색하러 가기"
          imageSrc={SearchImg}
        />
        <CategoryCards categoryCards={categoryCards} />
      </DefaultLayout>
    </>
  );
};

export default RecommendationPage;
