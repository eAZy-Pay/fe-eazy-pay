import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const PinForm = () => {
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
          <TextField id="outlined-basic" label="pin 번호 모달?로 2번 입력받기" variant="outlined" />
        </Box>
      </div>
    </div>
  );
};

export default PinForm;
