import { useEffect, useState } from 'react';
import { getRecommendationCard } from '../apis/UserAPI';

// 사용자에게 추천할 카드 정보를 가져오는 커스텀 훅
const useRecommendationCard = (userId) => {
  const [recommendationCard, setRecommendationCard] = useState([]);
  useEffect(() => {
    getRecommendationCard(userId).then(setRecommendationCard);
  }, [userId]);
  return recommendationCard;
};

export default useRecommendationCard;
