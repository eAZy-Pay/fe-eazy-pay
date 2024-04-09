// import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const CardAuthenticationForm = ({ onCardAuthDataChange }) => {
  const [cardAuthData, setCardAuthData] = useState({ name: '', birth: '', mobile: '', email: '' });

  const handleChange = (info) => (event) => {
    const newCardAuthData = { ...cardAuthData, [info]: event.target.value };
    setCardAuthData(newCardAuthData); // 상태를 업데이트
    onCardAuthDataChange(newCardAuthData); // 부모 컴포넌트에 변경 사항을 전달
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
          <TextField
            id="name"
            label="이름"
            variant="outlined"
            value={cardAuthData.name}
            onChange={handleChange('name')}
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
            id="birth"
            label="생년월일"
            variant="outlined"
            value={cardAuthData.birth}
            onChange={handleChange('birth')}
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
            id="mobile"
            label="휴대폰 번호"
            variant="outlined"
            value={cardAuthData.mobile}
            onChange={handleChange('mobile')}
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
            value={cardAuthData.email}
            onChange={handleChange('email')}
          />
        </Box>
      </div>
    </div>
  );
};

CardAuthenticationForm.propTypes = {
  onCardAuthDataChange: PropTypes.func.isRequired,
};

export default CardAuthenticationForm;
