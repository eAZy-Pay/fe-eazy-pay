import { useEffect, useState } from 'react';
import { getMonthlyFor6ByUserId } from '../apis/PaymentHistoryAPI';

// 사용자 지출 데이터를 가져오는 커스텀 훅
const useUserMonthlyFor6 = ({ userId, age, date }) => {
  const [monthlyFor6, setMonthlyFor6] = useState([]);

  useEffect(() => {
    if (age !== undefined || age >= 0) {
      if (date !== undefined || date !== null) {
        getMonthlyFor6ByUserId({ age: age, date: date }).then(setMonthlyFor6);
      } else {
        getMonthlyFor6ByUserId({ age: age }).then(setMonthlyFor6);
      }
    } else if (userId !== undefined || userId >= 0) {
      if (date !== undefined || date !== null) {
        getMonthlyFor6ByUserId({ userId: userId, date: date }).then(setMonthlyFor6);
      } else {
        getMonthlyFor6ByUserId({ userId: userId }).then(setMonthlyFor6);
      }
    }
  }, [userId, age, date]);
  return monthlyFor6;
};

export default useUserMonthlyFor6;
