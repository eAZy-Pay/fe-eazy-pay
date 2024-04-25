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

// 사용자 카드 신청 api
export const postUserCardApplication = async (cardApplication) => {
  const url = `${BASE_URL}/api/user/card`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(cardApplication),
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// 사용자가 해당 카드를 가지고 있고 사용 가능한지 확인하는 API 함수
export const checkUserCard = async (userId, cardId) => {
  const url = `${BASE_URL}/api/user/cards/check?userId=${userId}&cardId=${cardId}`;

  try {
    const response = await fetch(url);

    // 사용자가 해당 카드를 가지고 있지 않은 경우 404 에러가 발생
    if (response.status === 404) {
      return;
    }

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Error: ${response.status} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Failed to check user card:', error.message);
    throw error;
  }
};
