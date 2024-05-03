const BASE_URL = import.meta.env.VITE_BASE_URL;
import PropTypes from 'prop-types';

export const getSignIn = async (userName, userPassword) => {
  const requestBody = JSON.stringify({
    user_name: userName,
    user_password: userPassword,
  });

  try {
    const response = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: requestBody,
    });

    if (!response.ok) {
      throw new Error('Failed to sign in');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error signing in:', error);
    throw error;
  }
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

export const changePassword = async (user_uid, new_password) => {
  const response = await fetch(`${BASE_URL}/change-password`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ user_uid: user_uid.toString(), new_password }),
  });

  if (!response.ok) {
    throw new Error('Server error');
  }

  return response;
};

checkPin.propTypes = {
  uid: PropTypes.string.isRequired,
  pin: PropTypes.string.isRequired,
};
