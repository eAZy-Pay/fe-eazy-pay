import { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PinForm = ({ setValidPin }) => {
  const [pin, setPin] = useState('');
  const [pinCheck, setPinCheck] = useState('');
  const [errorPin, setErrorPin] = useState('');
  const [errorCheck, setErrorCheck] = useState('');

  const handlePinChange = (event) => {
    const newPin = event.target.value;
    setPin(newPin);
    if (newPin.length !== 6) {
      setErrorPin('pin 번호를 6자리로 입력해주세요');
    } else {
      setErrorPin('');
    }
  };

  const handlePinCheckChange = (event) => {
    const newPinCheck = event.target.value;
    setPinCheck(newPinCheck);
    if (pin !== newPinCheck) {
      setErrorCheck('pin 번호가 일치하지 않습니다.');
    } else {
      setErrorCheck('');
      setValidPin(pin);
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
          <TextField
            id="pin"
            label="pin 번호 입력"
            variant="outlined"
            value={pin}
            onChange={handlePinChange}
            error={!!errorPin}
            helperText={errorPin ? errorPin : ''}
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
            id="pinCheck"
            label="pin 번호 다시 입력"
            variant="outlined"
            value={pinCheck}
            onChange={handlePinCheckChange}
            error={!!errorCheck}
            helperText={errorCheck ? errorCheck : ''}
          />
        </Box>
      </div>
    </div>
  );
};

PinForm.propTypes = {
  setValidPin: PropTypes.func.isRequired,
};
export default PinForm;
