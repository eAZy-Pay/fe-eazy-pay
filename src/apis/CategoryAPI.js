const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCategory = async () => {
  const response = await fetch(`${BASE_URL}/api/categories`);
  return await response.json();
};

export const getEventCategory = async () => {
  const response = await fetch(`${BASE_URL}/api/categories/event`);
  return await response.json();
};
