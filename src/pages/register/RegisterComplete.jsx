import PropTypes from 'prop-types';

const RegisterComplete = ({ memberValid }) => {
  return (
    <>
      {memberValid ? (
        <>
          <h1 className="text-lg font-bold">이지페이 가입이 완료됐어요!</h1>
          <h1 className="text-lg font-bold">이지카드를 사용할 수 있어요.</h1>
          <h1 className="text-lg font-bold">이지카드로 모든 카드의 혜택과 실적을 관리하세요.</h1>
        </>
      ) : (
        <div className="bg-white p-10 shadow-lg rounded-lg flex flex-col justify-between items-center">
          <h1 className="text-lg font-bold text-gray-800">이지페이 가입이 완료됐어요!</h1>
          <h1 className="text-lg font-bold text-gray-800">
            이지카드는 우리카드가 1장 이상 있어야 사용할 수 있어요.
          </h1>
          {/* <h1 className="text-lg font-bold text-gray-800">우리카드를 발급받으러 가볼까요?</h1> */}
          <h1 className="text-lg font-bold text-gray-800">카드를 추천받으러 가볼까요?</h1>
          {/* '다음' 버튼을 '카드 추천받기' 등으로 변경, 카드 추천 페이지로 이동 */}
        </div>
      )}
    </>
  );
};

RegisterComplete.propTypes = {
  memberValid: PropTypes.bool.isRequired,
};

export default RegisterComplete;
