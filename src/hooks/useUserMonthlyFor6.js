import { useEffect, useState } from 'react';
import { getMonthlyFor6ByUserId } from '../apis/PaymentHistoryAPI';

// 사용자 지출 데이터를 가져오는 커스텀 훅
const useUserMonthlyFor6 = (userId) => {
  const [monthlyFor6, setMonthlyFor6] = useState([]);

  useEffect(() => {
    getMonthlyFor6ByUserId(userId).then(setMonthlyFor6);
  }, [userId]);

  return monthlyFor6;
};

export default useUserMonthlyFor6;
