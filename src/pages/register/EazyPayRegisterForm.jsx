import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { checkId } from '../../apis/CheckIdAPI';

const EazyPayRegisterForm = ({ setId, setPw }) => {
  const [id, setLocalId] = useState('');
  const [pw, setPwLocal] = useState('');
  const [checkPw, setCheckPw] = useState('');
  const [successId, setSuccessId] = useState('');
  const [errorId, setErrorId] = useState('');
  const [errorPw, setErrorPw] = useState('');
  const [errorCheckPw, setErrorCheckPw] = useState('');

  const handleIdChange = (event) => {
    const newId = event.target.value;
    setLocalId(newId);
    if (newId.length < 2) {
      setErrorId('아이디는 2글자 이상이어야 합니다');
    } else {
      setErrorId('');
    }
  };

  const handleIdBlur = () => {
    checkId(id, setId, setSuccessId, setErrorId);
  };

  const validatePassword = (password) => {
    const specialChars = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>?]+/;
    const numericChars = /[0-9]/;
    const repeatedChars = /(.)\1\1/;

    if (password.length < 8) {
      return '8자 이상으로 작성해주세요';
    }
    if (!specialChars.test(password)) {
      return '특수문자를 포함해주세요';
    }
    if (!numericChars.test(password)) {
      return '숫자를 포함해주세요';
    }
    if (repeatedChars.test(password)) {
      return '같은 숫자나 문자를 3개 이상 연속해서 사용할 수 없어요';
    }
    return '';
  };

  const handlePwChange = (event) => {
    const pwValue = event.target.value;
    setPwLocal(pwValue);
    const validationMessage = validatePassword(pwValue);
    if (validationMessage) {
      setErrorPw(validationMessage);
    } else {
      setErrorPw('');
      setPw(pwValue);
    }
  };

  const handleCheckPwChange = (event) => {
    const checkPwValue = event.target.value;
    setCheckPw(checkPwValue);
    if (checkPwValue !== pw) {
      setErrorCheckPw('비밀번호가 일치하지 않습니다');
    } else {
      setErrorCheckPw('');
    }
  };

  return (
    <div className="flex ml-48">
      <div className="flex flex-col bg-white">
        <div className="flex items-center space-x-2 my-1">
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '30ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="id"
              label="아이디"
              variant="outlined"
              onChange={handleIdChange}
              onBlur={handleIdBlur} // 포커스를 잃을 때 중복 확인
              error={!!errorId}
              helperText={errorId || successId}
            />
          </Box>
        </div>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="pw"
            label="비밀번호"
            variant="outlined"
            value={pw}
            onChange={handlePwChange}
            error={!!errorPw}
            helperText={errorPw}
            type="password"
          />
        </Box>

        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="checkPw"
            label="비밀번호를 한 번 더 입력해주세요"
            variant="outlined"
            value={checkPw}
            onChange={handleCheckPwChange}
            type="password"
            error={!!errorCheckPw}
            helperText={errorCheckPw ? errorCheckPw : ''}
          />
        </Box>

        {/* 
        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-xs text-black">아이디와 생년월일은 비밀번호로 사용할 수 없어요</p>
        </div> */}
      </div>
    </div>
  );
};

EazyPayRegisterForm.propTypes = {
  setId: PropTypes.func.isRequired,
  setPw: PropTypes.func.isRequired,
};

export default EazyPayRegisterForm;
