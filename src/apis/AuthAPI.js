const BASE_URL = import.meta.env.VITE_LOCAL_URL;

export const requestSignIn = async (userName, userPassword) => {
  const queryParams = new URLSearchParams({
    user_name: userName,
    user_password: userPassword,
  }).toString();

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
