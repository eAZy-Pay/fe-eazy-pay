import { useEffect, useState } from 'react';
import { getUsageStaticsByUserIdAndDate } from '../apis/PaymentHistoryAPI';

// 사용자와 비슷한 사용자의 월별 지출 데이터 통계를 가져오는 커스텀 훅
const useUsageStaticsByUserIdAndDate = (userId, date) => {
  const [usageStatics, setUsageStatics] = useState([]);

  useEffect(() => {
    // userId 0이면 사용자들의 평균 지출 데이터 통계를 가져옴
    if (userId !== undefined || userId >= 0) {
      getUsageStaticsByUserIdAndDate(userId, date).then(setUsageStatics);
    }
  }, [userId, date]);
  return usageStatics;
};

export default useUsageStaticsByUserIdAndDate;
