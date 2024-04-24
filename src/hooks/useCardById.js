import { useEffect, useState } from 'react';
import { getCardById } from '../apis/CardAPI';

const useCardById = (id) => {
  const [cardWithBenefit, setCardWithBenefit] = useState(null);

  useEffect(() => {
    if (id !== undefined || id > 0) {
      getCardById(id).then(setCardWithBenefit);
    }
  }, [id]);

  return cardWithBenefit;
};

export default useCardById;
