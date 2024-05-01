import PropTypes from 'prop-types';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const paymentInfo = async (userId, categoryId, price, storeCode, storeName) => {
  const response = await fetch(`${BASE_URL}/api/pay/auto-select-order`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId, categoryId, price, storeCode, storeName }),
  });
  if (!response.ok) {
    console.log(response.status);
    throw new Error('Server error');
  }
  return response.json();
};

paymentInfo.propTypes = {
  userId: PropTypes.string.isRequired,
  categoryId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
};
