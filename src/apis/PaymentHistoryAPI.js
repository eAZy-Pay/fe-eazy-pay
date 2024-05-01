const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getMonthlyFor6ByUserId = async ({ userId, date, age }) => {
  var url;
  if (age !== undefined && age >= 0) {
    url = `${BASE_URL}/api/payment-history/monthly-for-6?age=${age}`;
  } else if (userId !== undefined || userId >= 0) {
    url = `${BASE_URL}/api/payment-history/monthly-for-6?user_id=${userId}`;
  }
  if (date !== undefined && date !== null) {
    url += `&date=${date}`;
  }
  const response = await fetch(url);
  return await response.json();
};

export const getUsageStaticsByUserIdAndDate = async (userId, date) => {
  var url;
  if (date === undefined) {
    url = `${BASE_URL}/api/payment-history/usage-statistics?user_id=${userId}`;
  } else {
    url = `${BASE_URL}/api/payment-history/usage-statistics?user_id=${userId}&date=${date}`;
  }
  const response = await fetch(url);
  return await response.json();
};
