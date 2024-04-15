const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMonthlyFor6ByUserId = async (userId) => {
  const response = await fetch(`${BASE_URL}/api/payment-history/monthly-for-6?user_id=${userId}`);
  return await response.json();
};
