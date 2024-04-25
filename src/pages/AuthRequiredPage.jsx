import PropTypes from 'prop-types';
import { Navigate } from 'react-router-dom';
import { getUserSession } from '../utils/authUtils';

const AuthRequiredPage = ({ children, requiredAdmin }) => {
  const user = getUserSession();

  // 로그인 안되어 있으면 로그인 페이지로 이동
  // 로그인 되어 있으면 children을 그대로 렌더링
  // requiredAdmin이 true이면 관리자만 접근 가능
  return user ? (
    requiredAdmin ? (
      user.isAdmin ? (
        children
      ) : (
        <Navigate to="/" />
      )
    ) : (
      children
    )
  ) : (
    <Navigate to="/login" />
  );
};

AuthRequiredPage.defaultProps = {
  requiredAdmin: false,
};

AuthRequiredPage.propTypes = {
  children: PropTypes.node.isRequired,
  requiredAdmin: PropTypes.bool,
};

export default AuthRequiredPage;
