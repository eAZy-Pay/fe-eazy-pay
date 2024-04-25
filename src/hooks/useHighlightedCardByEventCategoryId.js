import { useEffect, useState } from 'react';
import { getHighlightedCardByEventCategory } from '../apis/CardAPI';

const useHighlightedCardByEventCategoryId = (eventCategoryId) => {
  const [highlightedCard, setHighlightedCard] = useState(null);

  useEffect(() => {
    getHighlightedCardByEventCategory(eventCategoryId).then(setHighlightedCard);
  }, [eventCategoryId]);

  return highlightedCard;
};

export default useHighlightedCardByEventCategoryId;
