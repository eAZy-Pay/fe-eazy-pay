import { useState, useEffect } from 'react';
import useRecommendationCard from '../../hooks/useRecommendationCard';
import Slider from '../../components/slider/Slider';
import { getUserSession } from '../../utils/authUtils';
import CardRecommendationItem from './CardRecommendationItem'; // 분리한 컴포넌트 import

const CardRecommendation = () => {
  const user = getUserSession();
  const userId = user?.uid;
  const recommendationCard = useRecommendationCard(userId || 0);
  const otherRecommendationCard = useRecommendationCard(0);
  const recommendList = recommendationCard.recommendList || otherRecommendationCard.recommendList;
  const userTop3UseAmountCardList = recommendationCard?.userTop3UseAmountCardList || [];
  const userTop3CategoryUseAmountList =
    recommendationCard.userTop3CategoryUseAmountList ||
    otherRecommendationCard.userTop3CategoryUseAmountList;
  const [contents, setContents] = useState([]);

  useEffect(() => {
    if (recommendList?.length > 0) {
      const newContents = recommendList.map((cardWithBenefit, index) => (
        <CardRecommendationItem
          key={index}
          cardWithBenefit={cardWithBenefit}
          index={index}
          userTop3UseAmountCardList={userTop3UseAmountCardList}
          userTop3CategoryUseAmountList={userTop3CategoryUseAmountList}
        />
      ));
      setContents(newContents);
    }
  }, [recommendList, userTop3CategoryUseAmountList, userTop3UseAmountCardList, userId]);

  return <Slider Contents={contents} className={'max-w-[400px]'} />;
};

export default CardRecommendation;
