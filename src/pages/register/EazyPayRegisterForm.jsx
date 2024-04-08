import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { FormControl, FormHelperText } from '@mui/material';

const EazyPayRegisterForm = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length >= 8) {
      setError('');
    } else {
      setError('비밀번호는 8자리 이상으로 입력해주세요.');
    }
  };

  return (
    <div className="flex ml-48">
      <div className="flex flex-col bg-white">
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="이름" variant="outlined" />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="아이디" variant="outlined" />
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '30ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <FormControl error={!!error}>
            <TextField
              id="outlined-basic"
              label="비밀번호"
              variant="outlined"
              type="password"
              value={password}
              onChange={handlePasswordChange}
              error={error}
              helperText={error}
            />
          </FormControl>
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
            id="outlined-basic"
            label="비밀번호를 한 번 더 입력해주세요"
            variant="outlined"
          />
        </Box>

        {/* <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-base text-[#f00]">비밀번호가 일치하지 않습니다</p>
          <div className="flex flex-col w-80 gap-4">
            <p className="text-base font-semibold text-black">비밀번호를 한 번 더 입력해주세요</p>
          </div>

          <p className="text-xs text-black">
            같은 숫자, 연속된 숫자는 3개 이상 이어서 사용할 수 없어요
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-xs text-black">아이디와 생년월일은 비밀번호로 사용할 수 없어요</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-xs text-black">특수문자를 포함해주세요</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-xs text-black">숫자를 포함해주세요</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-xs text-black">8자 이상으로 작성해주세요</p>
        </div>

        <div className="flex flex-col items-center space-y-4 mb-6">
          <p className="text-base text-[#f00]">다른 아이디를 입력해주세요</p>
        </div> */}
      </div>
    </div>
  );
};

export default EazyPayRegisterForm;
