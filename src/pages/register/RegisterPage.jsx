import DefaultLayout from '../../components/layout/DefaultLayout';
import MainLogo from '../../assets/mainLogo.svg';
import VerticalStepper from './VerticalStepper';
import AgreementForm from './AgreementForm';
import { useState } from 'react';
import EazyPayRegisterForm from './EazyPayRegisterForm';
import CardAuthenticationForm from './CardAuthenticationForm';
import PinForm from './PinForm';
import RegisterComplete from './RegisterComplete';
import { useNavigate } from 'react-router-dom';
const RegisterPage = () => {
  const [stepperIndex, setStepperIndex] = useState(0);
  const [checkBox1, setCheckBox1] = useState(false);
  const [checkBox2, setCheckBox2] = useState(false);
  const [name, setName] = useState('');
  const [birthday, setBirth] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');
  const [password, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate('/'); // 로고를 클릭하면 '/'로 이동
  };

  // 다음 버튼 클릭 로직
  const handleNext = () => {
    console.log(`stepperIndex : ${stepperIndex}`); // TODO: 추후 로그 삭제
    if (stepperIndex === 4) {
      navigate('/');
    } else {
      setStepperIndex((prevStepperIndex) => prevStepperIndex + 1);
    }
  };

  const handleBack = () => {
    console.log(`stepperIndex : ${stepperIndex}`); // TODO: 추후 로그 삭제
    if (stepperIndex > 0) {
      setStepperIndex((prevStepperIndex) => prevStepperIndex - 1);
    }
  };

  // 다음 버튼의 활성화/비활성화 조건 설정. true일 때 비활성화
  const isButtonDisabled = () => {
    // if (stepperIndex === 0) { //TODO: 페이지 완성하면 주석 해제
    //   return !(checkBox1 && checkBox2);
    // }
    // if (stepperIndex === 1) {
    //   return !(name && birthday && phoneNumber && email);
    // }
    // if (stepperIndex === 3) {
    //   return !(id && password);
    // }

    return false;
  };

  return (
    <DefaultLayout showNavBar={false}>
      <div className="flex flex-col items-center mt-8">
        {/* 상단 로고 */}
        <div onClick={handleLogoClick} className="cursor-pointer">
          <div className="flex justify-center">
            <img src={MainLogo} className="mb-1" />
          </div>
          <p className="text-base font-semibold text-slate-600 mb-10">
            세상에서 가장 쉽고 편리한 결제
          </p>
        </div>
        {/* 가운데 바디 */}
        <div className="flex justify-center bg-white p-10 w-full">
          {/* stepperIndex가 0일 때와 1~4일 때의 높이 조정 */}
          <div className="flex justify-end pr-10 w-1/3">
            <div className={`hidden md:flex items-center justify-center`}>
              <VerticalStepper activeStep={stepperIndex} setActiveStep={setStepperIndex} />
            </div>
          </div>
          <div className={`flex justify-start w-1/3 ${stepperIndex === 0 ? '' : 'h-64'}`}>
            {' '}
            {/* 조건에 따라 높이 설정 */}
            <div className="flex justify-center w-full items-center">
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
              {stepperIndex === 3 && (
                <PinForm
                  setStepperIndex={setStepperIndex}
                  name={name}
                  id={id}
                  password={password}
                  email={email}
                  phoneNumber={phoneNumber}
                  birthday={birthday}
                />
              )}
              {stepperIndex === 4 && <RegisterComplete />}
            </div>
          </div>
          <div className="w-1/3"></div>
          {/* 동일한 정렬 및 패딩을 사용해 버튼 위치 고정 */}
        </div>
        {/* 하단 버튼 */}
        <div className="flex space-x-4 ">
          {' '}
          {stepperIndex !== 4 ? (
            <div className="flex justify-center items-center space-x-4">
              <button
                className="w-20 py-2 bg-gray-400 text-white font-bold rounded-lg hover:bg-gray-600 transition duration-300"
                onClick={handleBack}
                disabled={stepperIndex === 0}
              >
                이전
              </button>
              <button
                className="w-20 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={handleNext}
                disabled={isButtonDisabled()}
              >
                다음
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <button
                className="w-20 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300"
                onClick={handleNext}
              >
                확인
              </button>
            </div>
          )}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
