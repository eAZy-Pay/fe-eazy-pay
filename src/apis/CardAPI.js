const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCategoryCards = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/api/cards?category_id=${categoryId}`);
  return await response.json();
};

export const getMainBanner = async (userId, month) => {
  const response = await fetch(
    `${BASE_URL}/api/cards/simple-user-card-benefit-performance?user_id=${userId}&month=${month}`
  );

  return await response.json();
};

export const getCardsLikeName = async (cardName) => {
  const response = await fetch(`${BASE_URL}/api/cards?name=${cardName}`);
  return await response.json();
};

export const getCardById = async (cardId) => {
  const response = await fetch(`${BASE_URL}/api/cards/${cardId}`);
  return await response.json();
};
