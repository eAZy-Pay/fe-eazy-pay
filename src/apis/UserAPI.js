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

    // 사용자가 해당 카드를 가지고 있지 않은 경우 255 반환
    if (response.status === 255) {
      return null;
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
  try {
    const response = await fetch(`${BASE_URL}/api/user/card/toggle-payment-limit/${userCardId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ paymentLimit }), // JSON으로 전송
    });

    const result = await response.json(); // JSON 응답 처리
    if (response.ok) {
      return result; // 성공 응답 반환
    } else {
      // 서버 응답에 에러 메시지가 포함되어 있을 경우, 에러 메시지를 예외로 던짐
      throw new Error(result.error || 'Error while updating payment limit');
    }
  } catch (error) {
    // 네트워크 에러 또는 response.json() 파싱 에러를 처리
    console.error('Error occurred:', error);
    throw new Error('Network error or response parsing failed');
  }
};

// 유저 카드 전월 실적 충족 여부 조회
export const getUserCardFulfilled = async (userCardId) => {
  const response = await fetch(`${BASE_URL}/api/user/card/fulfilled?userCardId=${userCardId}`);
  return await response.json();
};

export const getUserInfo = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/user?user_id=${userId}`);
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
