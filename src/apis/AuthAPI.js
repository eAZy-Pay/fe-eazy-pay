const BASE_URL = 'http://localhost:8080';

function createBasicAuthToken(username, password) {
  return `Basic ${btoa(`${username}:${password}`)}`;
}

export const requestSignIn = async (userName, userPassword) => {
  const queryParams = new URLSearchParams({ userName, userPassword }).toString();
  console.log(userName, userPassword);
  const data = (
    await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        authorization: createBasicAuthToken(userName, userPassword),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: queryParams,
      mode: 'cors',
    })
  ).json();

  return data;
};
