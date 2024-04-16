import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const checkId = async (id, setId) => {
  try {
    const response = await fetch(`${BASE_URL}/api/checkid?id=${id}`);
    if (response.status === 200) {
      setId(id);
      alert('이 아이디를 사용할 수 있어요');
    } else if (response.status === 555) {
      alert('이미 사용 중인 아이디예요');
    }
  } catch (error) {
    alert('서버 오류가 발생했습니다.');
  }
};

checkId.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
};
