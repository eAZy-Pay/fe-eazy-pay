const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getFaqData = async () => {
  const response = await fetch(`${BASE_URL}/api/faqs/all`);
  return response.json();
};
