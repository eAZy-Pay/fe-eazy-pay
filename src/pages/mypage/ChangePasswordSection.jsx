import { useState } from 'react';
import { getSignIn, changePassword } from '../../apis/AuthAPI';
import PropTypes from 'prop-types';

const ChangePasswordSection = ({ id, uid }) => {
  const [nowPassword, setNowPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkNewPassword, setCheckNewPassword] = useState('');

  const [nowError, setNowError] = useState(null);
  const [newError, setNewError] = useState(null);
  const [checkNewError, setCheckNewError] = useState(null);

  const [passwordMatch, setPasswordMatch] = useState(false);
  const [newPasswordMatch, setNewPasswordMatch] = useState(false);
  const [checkNewPasswordMatch, setCheckNewPasswordMatch] = useState(false);

  const handlePasswordChange = async () => {
    if (passwordMatch && newPasswordMatch && checkNewPasswordMatch) {
      try {
        const response = await changePassword(uid, newPassword);
        if (response.ok) {
          alert('비밀번호가 성공적으로 변경되었습니다.');
          // Clear input fields and reset all states
          setNowPassword('');
          setNewPassword('');
          setCheckNewPassword('');
          setNowError(null);
          setNewError(null);
          setCheckNewError(null);
          setPasswordMatch(false);
          setNewPasswordMatch(false);
          setCheckNewPasswordMatch(false);
        } else {
          alert('비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
        }
      } catch (error) {
        console.error('Password change failed:', error);
        alert('비밀번호 변경 중 오류가 발생했습니다.');
      }
    } else {
      alert('비밀번호 유효성 검사를 통과해야 변경이 가능합니다.');
    }
  };

  const validateNowPassword = async () => {
    try {
      const data = await getSignIn(id, nowPassword);
      if (data.status === 'OK') {
        // 현재 비밀번호가 일치하는 경우
        setNowError(null);
        setPasswordMatch(true);
      } else {
        // 현재 비밀번호가 일치하지 않는 경우
        setNowError('현재 비밀번호가 일치하지 않습니다.');
      }
    } catch (error) {
      console.error('Failed to validate password:', error);
      setNowError('비밀번호 검증에 실패했습니다.');
    }
  };

  const validateNewPassword = () => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/;
    const numericChars = /[0-9]/;
    const repeatedChars = /(.)\1\1/;

    if (passwordMatch === false) {
      setNewError('기존 비밀번호를 먼저 입력해주세요.');
      return;
    }
    if (!newPassword) {
      setNewError('비밀번호를 입력해주세요.');
      return;
    }
    if (newPassword.length < 8) {
      setNewError('비밀번호는 8자 이상이어야 합니다.');
      return;
    }
    if (!specialChars.test(newPassword)) {
      setNewError('비밀번호에는 특수 문자가 포함되어야 합니다.');
      return;
    }
    if (!numericChars.test(newPassword)) {
      setNewError('비밀번호에는 숫자가 포함되어야 합니다.');
      return;
    }
    if (repeatedChars.test(newPassword)) {
      setNewError('비밀번호에 같은 문자를 3번 이상 사용할 수 없습니다.');
      return;
    }
    if (nowPassword === newPassword) {
      setNewError('새 비밀번호는 기존 비밀번호와 달라야 합니다.');
      return;
    }
    setNewError(null);
    setNewPasswordMatch(true);
  };

  const validateCheckNewPassword = () => {
    if (newPasswordMatch === false) {
      setCheckNewError('새 비밀번호를 먼저 입력해주세요.');
      return;
    }
    if (newPassword === checkNewPassword) {
      setCheckNewError(null);
      setCheckNewPasswordMatch(true);
    } else {
      setCheckNewError('비밀번호가 일치하지 않습니다.');
    }
  };

  const handleNowPasswordChange = (event) => {
    setNowPassword(event.target.value);
  };

  const handleNewPasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleCheckNewPasswordChange = (event) => {
    setCheckNewPassword(event.target.value);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full">
        <div className="flex w-4/5 items-center justify-between">
          <p className="text-2xl">아이디</p>
          <input
            type="text"
            value={id}
            readOnly
            className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
          />
        </div>
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex w-4/5 items-center justify-between">
          <p className="text-2xl">기존 비밀번호 입력</p>
          <input
            type="password"
            value={nowPassword}
            onChange={handleNowPasswordChange}
            onBlur={validateNowPassword}
            className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
          />
        </div>
        {passwordMatch && !nowError && (
          <p className="flex justify-center ml-52 text-green-500">기존 비밀번호와 일치합니다</p>
        )}
        {nowError && <p className="flex justify-center ml-52 text-red-500">{nowError}</p>}
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex w-4/5 items-center justify-between">
          <p className="text-2xl">새 비밀번호 입력</p>
          <input
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
            onBlur={validateNewPassword}
            className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
          />
        </div>
        {newPasswordMatch && !newError && (
          <p className="flex justify-center ml-52 text-green-500">사용 가능한 비밀번호입니다</p>
        )}
        {newError && <p className="flex justify-center ml-52 text-red-500">{newError}</p>}
      </div>

      <div className="flex flex-col items-center w-full">
        <div className="flex w-4/5 items-center justify-between">
          <p className="text-2xl">한 번 더 입력</p>
          <input
            type="password"
            value={checkNewPassword}
            onChange={handleCheckNewPasswordChange}
            onBlur={validateCheckNewPassword}
            className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
          />
        </div>
        {checkNewPasswordMatch && !checkNewError && (
          <p className="flex ml-52 text-green-500">비밀번호가 일치합니다</p>
        )}
        {checkNewError && <p className="flex justify-center ml-52 text-red-500">{checkNewError}</p>}
      </div>

      <button
        onClick={handlePasswordChange}
        className="flex justify-center items-center w-[6rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black"
        disabled={!(passwordMatch && newPasswordMatch && checkNewPasswordMatch)}
      >
        <p className="text-lg">변경하기</p>
      </button>
    </>
  );
};

ChangePasswordSection.propTypes = {
  id: PropTypes.string.isRequired,
  uid: PropTypes.number.isRequired,
};

export default ChangePasswordSection;
