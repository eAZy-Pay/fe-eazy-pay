const BASE_URL = import.meta.env.VITE_BASE_URL;

// 결제 내역 조회
export const getPaymentHistoryData = async (userId, currentYear, currentMonth, offset, limit) => {
  const url = `${BASE_URL}/api/payment-history?user_id=${userId}&year=${currentYear}&month=${currentMonth}&offset=${offset}&limit=${limit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // 상태 체크
    }
    return await response.json(); // 응답 데이터 파싱
  } catch (error) {
    console.error('Fetching payment history data failed:', error);
    throw error; // 에러 전파
  }
};

// 달 별 결제 건수&금액 조회
export const getPaymentHistoryForMonth = async (userId, year, month) => {
  const url = `${BASE_URL}/api/payment-history/count-and-amount?user_id=${userId}&year=${year}&month=${month}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // 상태 체크
    }
    return await response.json(); // 응답 데이터 파싱
  } catch (error) {
    console.error('Fetching payment history data failed:', error);
    throw error; // 에러 전파
  }
};
