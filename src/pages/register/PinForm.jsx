// import * as React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

// props로 상태 변경 함수(onPinsChange)를 받도록 수정
const PinForm = ({ onPinDataChange }) => {
  // pin1과 pin2 값을 관리하기 위한 상태
  const [pinData, setPinData] = useState({ pin1: '', pin2: '' });

  // TextField에서 값이 변경될 때 호출되는 핸들러
  const handleChange = (pinNumber) => (event) => {
    const newPinData = { ...pinData, [pinNumber]: event.target.value };
    setPinData(newPinData); // 상태를 업데이트
    onPinDataChange(newPinData); // 부모 컴포넌트에 변경 사항을 전달
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
            id="pin1"
            label="pin 번호 입력"
            variant="outlined"
            value={pinData.pin1} // TextField의 값으로 pinData 객체의 pin1을 사용
            onChange={handleChange('pin1')} // 값이 변경될 때마다 handleChange를 호출
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
            id="pin2"
            label="pin 번호 다시 입력"
            variant="outlined"
            value={pinData.pin2}
            onChange={handleChange('pin2')}
          />
        </Box>
      </div>
    </div>
  );
};

PinForm.propTypes = {
  onPinDataChange: PropTypes.func.isRequired,
};
export default PinForm;
