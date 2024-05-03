import { useState, useEffect } from 'react';
import { getUserCardFulfilled } from '../apis/UserAPI';

export const useFulfillment = (uid) => {
  const [isFulfilled, setIsFulfilled] = useState(false);
  const [fulfilledColor, setFulfilledColor] = useState('');

  useEffect(() => {
    const fetchFulfillment = async () => {
      const fulfilled = await getUserCardFulfilled(uid);
      setIsFulfilled(fulfilled);
      setFulfilledColor(fulfilled ? '' : '#d3d3d3'); // 충족 여부에 따라 색상 업데이트
    };

    if (uid) {
      fetchFulfillment();
    }
  }, [uid]);

  return { isFulfilled, fulfilledColor };
};

export default useFulfillment;
