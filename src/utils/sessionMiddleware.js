export const encryptSession = (session) => {
  return session;
};
export const decryptSession = (session) => {
  return session;
}; //암호화 나중 구현

export const sessionValidationCheck = () => {
  let session = sessionStorage.getItem('user');
  if (session) {
    session = JSON.parse(decryptSession(session));
    const currentTime = Date.now();
    const timeElapsed = currentTime - session.timestamp; // 로그인으로부터 시간 차이 계산
    // 30분(1800000밀리초)이 지났는지 확인
    if (timeElapsed > 1800000) {
      //테스트 위해 1.5분으로 수정
      // 시간이 지나면 sessionStorage에서 사용자 정보 삭제
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      sessionStorage.removeItem('user');
      return false; // 만료된 세션
    }
    return session; //유효한 복호화된 세션
  }
  return false; // 세션이 없음
};
