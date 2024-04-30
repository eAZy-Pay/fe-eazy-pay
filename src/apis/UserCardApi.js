const BASE_URL = import.meta.env.VITE_BASE_URL;

// 유저 카드 전월 실적 충족 여부 조회
export const getUserCardFulfilled = async (userCardId) => {
  const response = await fetch(
    `${BASE_URL}/api/user-card-history/fulfilled?userCardId=${userCardId}`
  );
  return await response.json();
};
