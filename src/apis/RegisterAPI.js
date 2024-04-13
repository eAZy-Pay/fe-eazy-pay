// const BASE_URL = import.meta.env.VITE_SERVER_URL;
const BASE_URL = import.meta.env.VITE_LOCAL_URL;

export const submitAllData = async ({ name, birth, phoneNumber, email, id, pw, pin }) => {
  const response = await fetch(`${BASE_URL}/api/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name, birth, phoneNumber, email, id, pw, pin }),
  });
  if (!response.ok) {
    throw new Error('Server error');
  }

  return await response.json();
};
