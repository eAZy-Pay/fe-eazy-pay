import checkCircle from '../../assets/checkCircleIcon.svg';
const RegisterComplete = () => {
  return (
    <>
      <div className="bg-white p-10 w-full shadow-lg rounded-lg flex flex-col items-center">
        <img src={checkCircle} className="w-20 h-20 opacity-25 mb-10" />
        <p className="text-2xl font-bold text-center">이지페이 회원 가입 완료</p>
        <p className="text-lg font-bold text-center">이지카드로 혜택과 실적을 모두 관리하세요.</p>
      </div>
    </>
  );
};

export default RegisterComplete;
