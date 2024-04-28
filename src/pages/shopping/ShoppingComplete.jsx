import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import DefaultLayout from '../../components/layout/DefaultLayout';
import eAZyCard from '../../assets/eAZyCard.svg';

const ShoppingComplete = () => {
  const location = useLocation(); // 이전 페이지에서 넘어온 상태 데이터 가져오기
  const { response, productName } = location.state; // 상태에서 변수 추출

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
            width: '22rem',
            height: '28rem',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }} // 반응형 모달 스타일
      >
        <div className="text-center">
          <h1 className="text-2xl font-bold">결제 완료</h1>

          <div className="mt-4">
            <p className="text-base font-bold">이지카드가</p>
            <img src={eAZyCard} alt="이지카드" className="w-32 h-20 rotate-90 mx-auto" />
          </div>

          <div className="">
            <p className="text-base font-bold">{productName}에 딱 맞는</p>
            <p className="text-lg font-bold">{parsedResponse.cardName} 카드로</p>
            <img src={parsedResponse.cardImage} alt="카드 이미지" className="w-32 h-20  mx-auto" />
          </div>

          {/* 결제 정보 */}
          <div className="flex flex-col mt-4">
            {' '}
            {/* 다음 달에 페이백 받은 금액이 있을 때는 그 금액을 보여줌 */}
            {parsedResponse.discount !== 0 && (
              <div className="flex ">
                {' '}
                <p className="flex justify-end ml-20 w-20 text-gray-500 line-through">
                  {parsedResponse.originalAmount}
                  {' 원'}
                </p>
              </div>
            )}
            <div className="flex text-lg font-bold">
              <span className="flex justify-end ml-16 w-20 ">
                {parsedResponse.paidAmount} {' 원'}
              </span>
              <span className="ml-1"> 결제했어요!</span>
            </div>
          </div>
          <div className="mt-2">
            <button
              className="bg-gray-300 text-black py-2 px-4 mt-4 rounded"
              onClick={handleCloseModal}
            >
              확인
            </button>
          </div>
        </div>
      </Modal>
    </DefaultLayout>
  );
};

export default ShoppingComplete;
