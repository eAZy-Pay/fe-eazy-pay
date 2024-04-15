const BASE_URL = import.meta.env.VITE_BASE_URL;

export const submitAllData = async ({ name, id, password, email, phoneNumber, birthday, pin }) => {
  const response = await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, id, password, email, phoneNumber, birthday, pin }),
  });
  if (!response.ok) {
    throw new Error('Server error');
  }

  return await response.json();
};
