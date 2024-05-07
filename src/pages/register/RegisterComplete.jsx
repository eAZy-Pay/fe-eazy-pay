import checkCircle from '../../assets/checkCircleIcon.svg';

const RegisterComplete = () => {
  return (
    <>
      <div className="bg-white p-5 md:p-10 w-full flex flex-col items-center">
        <img src={checkCircle} className="w-16 h-16 md:w-20 md:h-20 opacity-25 mb-5 md:mb-10" />
        <p className="my-1 text-xl md:text-2xl font-bold text-center break-words md:whitespace-nowrap">
          이지페이 회원 가입 완료
        </p>
        <p className="text-base md:text-lg font-bold text-center">
          이지카드로 혜택과 실적을 모두 관리하세요.
        </p>
      </div>
    </>
  );
};

export default RegisterComplete;
