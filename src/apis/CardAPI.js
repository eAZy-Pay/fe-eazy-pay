// const VITE_BASE_URL = import.meta.env.VITE_SERVER_URL;
const VITE_BASE_URL = import.meta.env.VITE_LOCAL_URL;

export const getCategoryCards = async (categoryId) => {
  const response = await fetch(`${VITE_BASE_URL}/api/cards?category_id=${categoryId}`);
  return await response.json();
};
