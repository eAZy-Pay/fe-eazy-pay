const BASE_URL = 'http://localhost:3030';

export const requestSignIn = async (userName, userPassword) => {
  const queryParams = new URLSearchParams({ userName, userPassword }).toString();
  const data = (
    await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryParams,
    })
  ).json();
  return data;
};
