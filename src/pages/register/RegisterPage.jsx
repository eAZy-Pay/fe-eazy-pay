import DefaultLayout from '../../components/layout/DefaultLayout';
import MainLogo from '../../assets/mainLogo.svg';
import VerticalStepper from './VerticalStepper';
import AgreementForm from './AgreementForm';
import { useState } from 'react';
import EazyPayRegisterForm from './EazyPayRegisterForm';
import CardAuthenticationForm from './CardAuthenticationForm';
import PinForm from './PinForm';
import RegisterComplete from './RegisterComplete';
import { submitAllData } from '../../apis/RegisterAPI';
import { useNavigate } from 'react-router-dom';
import { checkMember } from '../../apis/CheckMember';
const RegisterPage = () => {
  const [stepperIndex, setStepperIndex] = useState(0);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [memberValid, setMemberValid] = useState(''); // 처음에 빈 문자열, 회원 인증이 완료되면 true 또는 false
  const [name, setName] = useState('');
  const [birthday, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const [pin, setPin] = useState('');
  const navigate = useNavigate();

  // 다음 버튼 클릭 로직
  const handleNext = () => {
    console.log(`stepperIndex : ${stepperIndex}`); // 추후 로그 삭제
    if (stepperIndex === 1) {
      // 회원 인증 API 호출
      checkMember(name, phoneNumber, setMemberValid);
      //
    }
    if (stepperIndex === 3) {
      regInfoSubmit();
    } else if (stepperIndex === 5 && memberValid) {
      navigate('/');
    } else if (stepperIndex === 5 && !memberValid) {
      navigate('/card-recommend');
    } else {
      setStepperIndex((prevStepperIndex) => prevStepperIndex + 1);
    }
  };

  const regInfoSubmit = async () => {
    // API를 호출하고 응답을 처리합니다.
    try {
      await submitAllData({ name, id, password, email, phoneNumber, birthday, pin });
      setStepperIndex(4);
    } catch (error) {
      console.error('Registration Failed:', error);
    }
  };

  // 다음 버튼의 활성화/비활성화 조건 설정. true일 때 비활성화
  const isButtonDisabled = () => {
    if (stepperIndex === 0) {
      return !(checkBox1 && checkBox2);
    }
    if (stepperIndex === 1) {
      return !(name && birthday && phoneNumber && email);
    }
    if (stepperIndex === 3) {
      return !(id && password);
    }

    if (stepperIndex === 4) {
      return pin.length !== 6;
    }

    return false;
  };

  return (
    <DefaultLayout showNavBar={false}>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white p-10">
        <img src={MainLogo} className="mb-1" />
        <p className="text-base font-semibold text-slate-600 mb-10">
          세상에서 가장 쉽고 편리한 결제
        </p>
        <div className="flex items-start w-full">
          <VerticalStepper activeStep={stepperIndex} setActiveStep={setStepperIndex} />

          {stepperIndex === 0 && (
            <AgreementForm
              checkBox1={checkBox1}
              setCheckBox1={setCheckBox1}
              checkBox2={checkBox2}
              setCheckBox2={setCheckBox2}
            />
          )}
          {stepperIndex === 1 && (
            <CardAuthenticationForm
              setName={setName}
              setBirth={setBirth}
              setPhoneNumber={setPhoneNumber}
              setEmail={setEmail}
            />
          )}

          {stepperIndex === 2 && <EazyPayRegisterForm setId={setId} setPw={setPw} />}
          {stepperIndex === 3 && <PinForm setValidPin={setPin} />}
          {stepperIndex === 4 && <RegisterComplete memberValid={memberValid} />}
        </div>

        <button
          className="w-20 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
          onClick={handleNext}
          disabled={isButtonDisabled()}
        >
          {stepperIndex === 4
            ? '가입'
            : stepperIndex === 5
              ? memberValid
                ? '홈'
                : '카드 추천받기'
              : '다음'}
        </button>
        {/* )} */}
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
