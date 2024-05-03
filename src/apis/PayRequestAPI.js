import PropTypes from 'prop-types';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const payRequest = async (userId, cardId, categoryId, price, storeCode, storeName) => {
  const response = await fetch(`${BASE_URL}/api/pay/user-select-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, cardId, categoryId, price, storeCode, storeName }),
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error('Server error');
  }
  return response.json();
};

payRequest.propTypes = {
  userId: PropTypes.string.isRequired,
  cardId: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
};
