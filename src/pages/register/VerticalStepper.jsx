import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: '약관에 동의해주세요',
  },
  {
    label: '기본 정보를 입력해주세요',
  },
  {
    label: '아이디와 비밀번호를 입력해주세요',
  },
  {
    label: 'pin 번호를 등록해주세요',
  },
];

export default function VerticalLinearStepper({ activeStep, setActiveStep }) {
  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
              optional={
                index === 3 ? <Typography variant="caption">마지막 단계예요!</Typography> : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}></Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && <Paper square elevation={0} sx={{ p: 3 }}></Paper>}
    </Box>
  );
}

VerticalLinearStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  setActiveStep: PropTypes.func.isRequired,
};
