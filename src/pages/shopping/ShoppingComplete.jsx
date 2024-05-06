import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import DefaultLayout from '../../components/layout/DefaultLayout';

const ShoppingComplete = () => {
  const location = useLocation(); // 이전 페이지에서 넘어온 상태 데이터 가져오기
  const { response } = location.state; // 상태에서 변수 추출

  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(true); // 페이지 로드 시 모달을 자동으로 열기 위해 true로 설정

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/shopping'); // '확인' 버튼을 누르면 '/shopping'으로 이동
  };

  // 전달받은 상태 데이터를 파싱하여 JSON 객체로 변환
  const parsedResponse = JSON.parse(response);

  return (
    <DefaultLayout>
      {/* 페이지 로드 시 모달이 자동으로 열리도록 설정 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal} // 모달 닫는 함수
        appElement={document.getElementById('root')}
        style={{
          content: {
            width: '28rem',
            height: '40rem',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }} // 반응형 모달 스타일
      >
        <div className="text-center">
          <div className="">
            <img
              src={parsedResponse.cardImage}
              alt="카드 이미지"
              className="my-8 w-40 h-26 mx-auto"
            />
          </div>

          {/* 결제 정보 */}
          <div className="flex flex-col mt-4">
            <h1 className="my-4 text-3xl font-semibold">결제 완료</h1>{' '}
            <div className="mt-1">
              <span className="text-lg font-bold">{parsedResponse.cardName}</span>
              <span> 카드로</span>
            </div>
            <div className="flex justify-center items-center mb-2">
              <span className="text-xl font-semibold  text-main-color">{parsedResponse.price}</span>
              <span className="text-lg">원 결제했어요!</span>
            </div>
            {/* 다음 달에 페이백 받을 금액이 있을 때는 그 금액을 보여줌 */}
            {parsedResponse.payback !== 0 && (
              <div className="flex justify-center items-center">
                <span className="text-3xl font-semibold  text-[#FF9169]">
                  {parsedResponse.payback}
                </span>
                <span className="text-2xl">원 혜택을 받았어요</span>
              </div>
            )}
          </div>
          <button
            className="text-lg bg-main-color text-white py-2 rounded-lg hover:bg-[#0051ffee] transition duration-300 w-4/5 mt-6"
            onClick={handleCloseModal}
          >
            확인
          </button>
        </div>
      </Modal>
    </DefaultLayout>
  );
};

export default ShoppingComplete;
