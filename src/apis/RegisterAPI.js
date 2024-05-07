import PropTypes from 'prop-types';
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const checkId = async (id, setId, setSuccessId, setErrorId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/register/checkid?id=${id}`);
    if (response.status === 200) {
      setId(id);
      setSuccessId('사용 가능한 아이디예요!');
    } else if (response.status === 409) {
      setErrorId('이미 사용 중인 아이디예요');
    }
  } catch (error) {
    console.error('Server error:', error); // TODO: 로그로 변경하기
  }
};

checkId.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
  setSuccessId: PropTypes.func.isRequired,
  setErrorId: PropTypes.func.isRequired,
};

export const checkPhoneNumber = async (
  localPhoneNumber,
  setPhoneNumber,
  setSuccessPhoneNumber,
  setErrorPhoneNumber
) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/register/check-phone-number?phoneNumber=${localPhoneNumber}`
    );
    if (response.status === 200) {
      setPhoneNumber(localPhoneNumber);
      setSuccessPhoneNumber('사용 가능한 번호예요!');
    } else if (response.status === 409) {
      setErrorPhoneNumber('이미 가입된 번호예요');
    }
  } catch (error) {
    console.error('Server error:', error); // TODO: 로그로 변경하기
  }
};

checkPhoneNumber.propTypes = {
  phoneNumber: PropTypes.string.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setSuccessPhoneNumber: PropTypes.func.isRequired,
  setErrorPhoneNumber: PropTypes.func.isRequired,
};

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
