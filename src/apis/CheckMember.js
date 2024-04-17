import PropTypes from 'prop-types';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export const checkMember = async (name, phoneNumber, setMemberValid) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/register/checkmember?name=${name}&phoneNumber=${phoneNumber}`
    );
    if (response.status === 200) {
      setMemberValid(true);
    } else if (response.status === 409) {
      setMemberValid(false);
    }
  } catch (error) {
    // console.error('Server error:', error); // 로그로 변경하기
  }
};

checkMember.propTypes = {
  name: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  setMemberValid: PropTypes.func.isRequired,
};
