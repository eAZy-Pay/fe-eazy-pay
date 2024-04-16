import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const checkId = async (id, setId, setSuccessId, setErrorId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/checkid?id=${id}`);
    if (response.status === 200) {
      setId(id);
      setSuccessId('사용 가능한 아이디예요!');
    } else if (response.status === 409) {
      setErrorId('이미 사용 중인 아이디예요');
    }
  } catch (error) {
    console.error('Server error:', error); // 로그로 변경하기
  }
};

checkId.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
  setSuccessId: PropTypes.func.isRequired,
  setErrorId: PropTypes.func.isRequired,
};
