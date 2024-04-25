import { useEffect, useState } from 'react';
import { getCards } from '../apis/CardAPI';

// 카드 정보를 가져오는 커스텀 훅
const useCards = (page, size) => {
  const [cards, setCards] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCards = async (page, size) => {
    const response = await getCards(page, size);
    setCards(response.content);
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchCards(page, size);
  }, [page, size]);

  return { cards, totalPages, fetchCards };
};

export default useCards;
