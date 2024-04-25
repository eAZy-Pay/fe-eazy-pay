import secureLocalStorage from 'react-secure-storage';

export const isValidSession = (session) => {
  if (
    session &&
    session.uid !== undefined &&
    session.userName !== undefined &&
    session.isAdmin !== undefined &&
    session.timestamp !== undefined
  ) {
    const currentTime = Date.now();
    const timeElapsed = currentTime - new Date(session.timestamp);
    // 30분(1800000밀리초)이 지났는지 확인
    if (timeElapsed > 1800000) {
      //테스트 위해 1.5분으로 수정
      // 시간이 지나면 localStorage에서 사용자 정보 삭제
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      secureLocalStorage.removeItem('user');
      return false; // 만료된 세션
    }

    // 세션 유효 시간 갱신
    session.timestamp = new Date();
    secureLocalStorage.setItem('user', JSON.stringify(session));

    return true; // 유효한 세션
  }
  return false; // 세션이 없거나 필드가 유효하지 않음
};

export const getUserSession = () => {
  const storage = secureLocalStorage.getItem('user');
  const session = storage ? JSON.parse(storage) : null;

  if (isValidSession(session)) {
    return session;
  }

  return false;
};

export const logout = () => {
  secureLocalStorage.removeItem('user');
  alert('로그아웃 되었습니다.');
  window.location.reload();
};

export const refreshSession = () => {
  const user = getUserSession();
  if (user) {
    user.timestamp = new Date();
    secureLocalStorage.setItem('user', JSON.stringify(user));
  }
};
