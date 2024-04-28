const BASE_URL = import.meta.env.VITE_BASE_URL;

export const getCards = async (page = 0, size = 10) => {
  const response = await fetch(`${BASE_URL}/api/cards?page=${page}&size=${size}`);
  return await response.json();
};

export const getCategoryCards = async (categoryId) => {
  const response = await fetch(`${BASE_URL}/api/cards?category_id=${categoryId}`);
  return await response.json();
};

export const getCardsSummary = async (userId, month, count) => {
  const response = await fetch(
    `${BASE_URL}/api/cards/summary?user_id=${userId}&month=${month}&count=${count}`
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

export const postCard = async (card) => {
  const response = await fetch(`${BASE_URL}/api/cards`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  return await response.json();
};

export const deleteCard = async (cardId) => {
  const response = await fetch(`${BASE_URL}/api/cards/${cardId}`, {
    method: 'DELETE',
  });
  return response;
};

export const updateCard = async (card) => {
  const response = await fetch(`${BASE_URL}/api/cards/${card.id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(card),
  });
  return await response.json();
};

export const getHighlightedCardByEventCategory = async (eventCategoryId) => {
  if (!eventCategoryId) {
    return [];
  }

  const response = await fetch(
    `${BASE_URL}/api/cards/highlighted?event_category_id=${eventCategoryId}`
  );
  return await response.json();
};
