const BASE_URL = import.meta.env.VITE_BASE_URL;

// 사용자 마이페이지 정보를 가져오는 API 함수
const getPaymentHistoryData = async (userId, limit) => {
  const url = `${BASE_URL}/api/payment-history?user_id=${userId}&limit=${limit}`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`); // 응답 상태가 OK가 아니면 에러 처리
    }
    return await response.json(); // JSON 형태로 응답 데이터 파싱
  } catch (error) {
    console.error('Fetching my page data failed:', error);
    throw error; // 오류 발생 시 오류를 호출 측으로 전파
  }
};

export default getPaymentHistoryData;
