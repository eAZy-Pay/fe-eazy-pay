import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import DefaultLayout from '../../components/layout/DefaultLayout';
import eAZyCard from '../../assets/eAZyCard.svg';

const ShoppingComplete = () => {
  const location = useLocation(); // 이전 페이지에서 넘어온 상태 데이터 가져오기
  const navigate = useNavigate();
  const [isModalOpen, setModalOpen] = useState(true); // 페이지 로드 시 모달을 자동으로 열기 위해 true로 설정

  const handleCloseModal = () => {
    setModalOpen(false);
    navigate('/shopping'); // '확인' 버튼을 누르면 '/shopping'으로 이동
  };

  // 모달이 열리면 자동으로 닫히지 않도록 설정
  const modalStyle = {
    content: {
      width: '80%',
      maxWidth: '400px',
      height: '70vh',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)', // 가운데 정렬
    },
  };

  // 전달받은 상태 데이터를 파싱하여 JSON 객체로 변환
  const stateData = location.state ? JSON.parse(location.state) : {};

  return (
    <DefaultLayout>
      {/* 페이지 로드 시 모달이 자동으로 열리도록 설정 */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={handleCloseModal} // 모달 닫는 함수
        appElement={document.getElementById('root')}
        style={modalStyle} // 반응형 모달 스타일
      >
        <div className="text-center">
          <h1 className="text-xl font-bold">결제 완료</h1>

          <div className="my-4">
            <h2 className="text-lg font-bold">이지카드가</h2>
            <img
              src={eAZyCard}
              alt="이지카드가"
              className="w-32 h-20 rotate-90 mx-auto" // 적절한 크기 및 중앙 정렬
            />
          </div>

          <div className="my-4">
            <h2 className="text-lg font-bold">{stateData.cardName}카드로</h2>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx8ny-OtWRahC7nMfUzYMaQuDqYumdHgPppQ&usqp=CAU"
              alt="정석카드"
              className="w-20 h-12 mx-auto" // 적절한 크기 및 중앙 정렬
            />
          </div>

          {/* 결제 정보 */}
          <div className="flex flex-col mt-4">
            {' '}
            {/* 할인받은 금액이 있을 때만 원래 가격을 보여줌 */}
            {stateData.discount !== 0 && (
              <div className="flex ">
                {' '}
                <p className="flex justify-end ml-20 w-20 text-gray-500 line-through">
                  {stateData.originalAmount}
                  {' 원'}
                </p>
              </div>
            )}
            <div className="flex">
              <p className="flex justify-end ml-20 w-20 font-bold">
                {stateData.paidAmount} {' 원'}
              </p>
              <span className="ml-1 text-bold"> 결제했어요!</span>
            </div>
          </div>
          <button
            className="bg-gray-300 text-black py-2 px-4 mt-4 rounded"
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
