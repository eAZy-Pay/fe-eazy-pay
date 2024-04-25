import { useEffect, useState } from 'react';
import { getCategoryCards } from '../apis/CardAPI';

// 카테고리 별 카드 정보를 가져오는 커스텀 훅
const useCategoryCards = (categoryId) => {
  const [categoryCards, setCategoryCards] = useState([]);

  useEffect(() => {
    if (categoryId !== undefined || categoryId < 1) {
      getCategoryCards(categoryId).then(setCategoryCards);
    }
  }, [categoryId]);

  return categoryCards;
};

export default useCategoryCards;
