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
  const url = `${BASE_URL}/api/user/cards/check?user_id=${userId}&card_id=${cardId}`;

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

export const deleteUserCard = async (userCardId) => {
  const response = await fetch(`${BASE_URL}/api/user/card?userCardId=${userCardId}`, {
    method: 'DELETE',
  });
  return response;
};

export const updateUserCardValid = async (userCardId) => {
  const response = await fetch(`${BASE_URL}/api/user/card/toggle-valid/${userCardId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const updateUserCardLinkEazy = async (userCardId) => {
  const response = await fetch(`${BASE_URL}/api/user/card/toggle-link/${userCardId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
};

export const updateUserCardPaymentLimit = async (userCardId, paymentLimit) => {
  const response = await fetch(`${BASE_URL}/api/user/card/toggle-payment-limit/${userCardId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ paymentLimit }), // JSON으로 전송
  });
  if (response.ok) {
    try {
      return await response.json(); // JSON 응답 처리
    } catch (error) {
      const text = await response.text(); // JSON 파싱 실패 시 텍스트 처리
      return { message: text }; // 텍스트를 JSON으로 래핑
    }
  } else {
    throw new Error('Error while updating payment limit'); // 오류 처리
  }
};

// 유저 카드 전월 실적 충족 여부 조회
export const getUserCardFulfilled = async (userCardId) => {
  const response = await fetch(`${BASE_URL}/api/user/card/fulfilled?userCardId=${userCardId}`);
  return await response.json();
};

export const getUserInfo = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/user?userId=${userId}`);
  return await response.json();
};

export const getRecommendationCard = async (userId) => {
  var url = `${BASE_URL}/api/user/recommendation/card`;

  if (userId !== undefined && userId > 0) {
    url += `?user_id=${userId}`;
  }
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // 상태 체크
    }
    return await response.json(); // 응답 데이터 파싱
  } catch (error) {
    console.error('Fetching recommendation card data failed:', error);
    throw error;
  }
};

export const getSortedValidCards = async (userId) => {
  var url = `${BASE_URL}/api/user/sorted-valid-cards`;

  if (userId !== undefined && userId > 0) {
    url += `?user_id=${userId}`;
  }
  console.log(url);
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // 상태 체크
    }
    return await response.json(); // 응답 데이터 파싱
  } catch (error) {
    console.error('Fetching sorted valid cards data failed:', error);
    throw error;
  }
};
