import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { checkPhoneNumber } from '../../apis/RegisterAPI';
import DatePicker from './DatePicker';

const CardAuthenticationForm = ({ setName, setBirth, setPhoneNumber, setEmail }) => {
  const [errorName, setErrorName] = useState('');
  const [errorPhoneNumber, setErrorPhoneNumber] = useState('');
  const [successPhoneNumber, setSuccessPhoneNumber] = useState('');
  const [localBirth, setLocalBirth] = useState('');
  const [phoneNumSTR, setPhoneNumSTR] = useState('');
  const [localPhoneNumber, setLocalPhoneNumber] = useState('');
  const [errorEmail, setErrorEmail] = useState('');

  const handleNameChange = (event) => {
    const name = event.target.value;
    const isValid = /^[a-zA-Z가-힣0-9]+$/.test(name);
    if (name.length < 2) {
      setErrorName('이름은 2글자 이상으로 적어주세요');
    } else if (!isValid) {
      setErrorName('특수문자, 공백을 포함할 수 없어요');
    } else {
      setErrorName('');
      setName(name);
    }
  };

  const handlePhoneNumberChange = (event) => {
    const input = event.target.value;
    const onlyNums = input.replace(/[^0-9]/g, '');
    // 000-0000-0000 형태로 만들기
    // 글자수가 3, 7, 11일 때 - 추가
    if (onlyNums.length < 4) {
      setPhoneNumSTR(onlyNums);
    } else if (onlyNums.length < 8) {
      setPhoneNumSTR(`${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`);
    } else {
      setPhoneNumSTR(`${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(7, 11)}`);
    }
    if (onlyNums.length === 11) {
      setErrorPhoneNumber(''); // 에러 메시지를 지움
      setLocalPhoneNumber(onlyNums);
      // setPhoneNumber(onlyNums); // 최종 상태를 업데이트
    } else {
      setErrorPhoneNumber('휴대폰 번호를 11자리로 입력해주세요'); // 에러 메시지 설정
    }
  };

  const handlePhoneNumberBlur = () => {
    checkPhoneNumber(localPhoneNumber, setPhoneNumber, setSuccessPhoneNumber, setErrorPhoneNumber);
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    if (!email.includes('@' && '.')) {
      // 정규식 - 알파벳최소1글자 + @ + 알파벳최소1글자 + . + 알파벳최소1글자 로 변경!!
      setErrorEmail('정확한 이메일 주소를 입력해주세요');
    } else {
      setErrorEmail('');
      setEmail(email);
    }
  };

  // useEffect(() => {
  //   if (localBirth !== '') {
  //     setBirth(String(localBirth.format('YYYYMMDD')));
  //     console.log(`birth: ${String(localBirth.format('YYYYMMDD'))}`);
  //   }
  // }, [localBirth]);

  return (
    <div className="flex">
      <div className="flex flex-col bg-white">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            onChange={handleNameChange}
            error={!!errorName}
            helperText={errorName ? errorName : ''}
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
          <DatePicker localBirth={localBirth} setLocalBirth={setLocalBirth} />
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
            id="phoneNumber"
            label="휴대폰 번호"
            variant="outlined"
            value={phoneNumSTR}
            onChange={handlePhoneNumberChange}
            onBlur={handlePhoneNumberBlur}
            error={!!errorPhoneNumber}
            helperText={errorPhoneNumber || successPhoneNumber}
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
            id="email"
            label="이메일 주소"
            variant="outlined"
            onChange={handleEmailChange}
            error={!!errorEmail}
            helperText={errorEmail ? errorEmail : ''}
          />
        </Box>
      </div>
    </div>
  );
};

CardAuthenticationForm.propTypes = {
  setName: PropTypes.func.isRequired,
  setBirth: PropTypes.func.isRequired,
  setPhoneNumber: PropTypes.func.isRequired,
  setEmail: PropTypes.func.isRequired,
};

export default CardAuthenticationForm;
