const BASE_URL = import.meta.env.VITE_BASE_URL;

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
