import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({ localBirth, setLocalBirth }) {
  // useEffect(() => {
  //   if (localBirth !== null) {
  //     console.log(`localBirth: ${localBirth}`);
  //   }
  // }, [localBirth]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} dateFormats={{ monthShort: 'M' }}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker
          className="w-full"
          label="생년월일"
          value={localBirth || null}
          views={['year', 'month', 'day']}
          format="YYYY / MM / DD"
          onChange={(newValue) => {
            // setLocalBirth(newValue);
            // setLocalBirth(newValue.format('YYYY-MM-DD'));
            if (newValue) {
              setLocalBirth(newValue);
            } else {
              setLocalBirth(null);
            }
          }}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}

BasicDatePicker.propTypes = {
  localBirth: PropTypes.string.isRequired,
  setLocalBirth: PropTypes.func.isRequired,
};
