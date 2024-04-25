const BASE_URL = import.meta.env.VITE_BASE_URL;
import PropTypes from 'prop-types';

export const getSignIn = async (userName, userPassword) => {
  const queryParams = new URLSearchParams({
    user_name: userName,
    user_password: userPassword,
  }).toString();

  const data = (
    await fetch(`${BASE_URL}/login?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
  ).json();
  return data;
};

export const checkPin = async (uid, pin) => {
  const response = await fetch(`${BASE_URL}/api/checkpin`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ uid, pin }),
  });
  if (!response.ok) {
    throw new Error('Server error');
  }
};

checkPin.propTypes = {
  uid: PropTypes.string.isRequired,
  pin: PropTypes.string.isRequired,
};
