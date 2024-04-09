import DefaultLayout from '../../components/layout/DefaultLayout';
import MainLogo from '../../assets/mainLogo.svg';
import VerticalStepper from './VerticalStepper';
import AgreementForm from './AgreementForm';
import { useState } from 'react';
import EazyPayRegisterForm from './EazyPayRegisterForm';
import CardAuthenticationForm from './CardAuthenticationForm';
import PinForm from './PinForm';

const RegisterPage = () => {
  const [stepperIndex, setStepperIndex] = useState(0);
  const [eazyRegData, setEazyRegData] = useState({ name: '', id: '', pw1: '', pw2: '' });
  const [cardAuthData, setCardAuthData] = useState({ name: '', birth: '', mobile: '', email: '' });
  const [pinData, setPinData] = useState({ pin1: '', pin2: '' });

  const submitAllData = async () => {
    const allData = {
      eazyReg: eazyRegData,
      cardAuth: cardAuthData,
      pin: pinData,
    };

    try {
      const response = await fetch('YOUR_BACKEND_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(allData),
      });
      if (!response.ok) {
        throw new Error('Server error');
      }
      // 요청 성공 처리 로직 (예: 상태 초기화, 사용자에게 성공 알림 등)
    } catch (error) {
      // 에러 처리 로직
    }
  };

  const handleNext = () => {
    if (stepperIndex === 3) {
      console.log(cardAuthData.birth);
      submitAllData();
      setStepperIndex(4);
    } else {
      setStepperIndex((prevStepperIndex) => prevStepperIndex + 1);
    }
  };

  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white p-10">
        <img src={MainLogo} className="mb-1" />
        <p className="text-base font-semibold text-slate-600 mb-10">
          세상에서 가장 쉽고 편리한 결제
        </p>

        <div className="flex items-start w-full">
          <VerticalStepper activeStep={stepperIndex} setActiveStep={setStepperIndex} />
          {stepperIndex === 0 && <AgreementForm />}
          {stepperIndex === 1 && <EazyPayRegisterForm onEazyRegDataChange={setEazyRegData} />}
          {stepperIndex === 2 && <CardAuthenticationForm onCardAuthDataChange={setCardAuthData} />}
          {stepperIndex === 3 && <PinForm onPinDataChange={setPinData} />}
          {stepperIndex === 4 && <AgreementForm />}
        </div>

        {/* StepperIndex === 3 일 때 다음 버튼 누르면 spring으로 값 날아가게 */}
        <button
          className="w-20 py-2 bg-blue-500 text-white font-bold rounded-lg
         hover:bg-blue-700 transition duration-300"
          onClick={handleNext}
        >
          {stepperIndex === 3 ? '제출' : '다음'}
        </button>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
