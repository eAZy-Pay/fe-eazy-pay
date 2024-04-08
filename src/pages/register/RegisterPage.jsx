import DefaultLayout from '../../components/layout/DefaultLayout';
import MainLogo from '../../assets/mainLogo.svg';
import VerticalStepper from './VerticalStepper';
import AgreementForm from './AgreementForm';
import { useState } from 'react';
import EazyPayRegisterForm from './EazyPayRegisterForm';

const RegisterPage = () => {
  const [stepperIndex] = useState(1);

  return (
    <DefaultLayout>
      <div className="w-full h-full flex flex-col items-center justify-center bg-white p-10">
        <img src={MainLogo} className="mb-1" />
        <p className="text-base font-semibold text-slate-600 mb-10">
          세상에서 가장 쉽고 편리한 결제
        </p>

        <div className="flex items-start w-full">
          <VerticalStepper />
          {stepperIndex === 0 && <AgreementForm />}
          {stepperIndex === 1 && <EazyPayRegisterForm />}
        </div>

        <button className="w-20 py-2 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-700 transition duration-300">
          다음
        </button>
      </div>
    </DefaultLayout>
  );
};

export default RegisterPage;
