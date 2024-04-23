import { useState, useEffect } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import secureLocalStorage from 'react-secure-storage';
import { checkPin } from '../../apis/CheckPinAPI';

const PaymentModal = ({ isOpen, closeModal }) => {
  const [message, setMessage] = useState('PIN 번호를 입력해주세요');
  const [pin, setPin] = useState(''); // 현재 입력 중인 PIN
  const [keypadNumbers, setKeypadNumbers] = useState([]); // 키패드 번호
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]); // 동그라미 상태

  // 키패드 번호 섞기
  const shuffleKeypad = () => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    setKeypadNumbers(shuffledNumbers);
  };

  useEffect(() => {
    shuffleKeypad(); // 처음 모달이 열리면 키패드 번호를 섞음
  }, []);

  // 핀번호 입력 처리
  const handleKeyClick = async (number) => {
    if (pin.length < 6) {
      const newPin = pin + number;
      setPin(newPin);

      const updatedStatus = pinStatus.map((status, idx) => (idx < newPin.length ? true : false));
      setPinStatus(updatedStatus); // 동그라미 상태 업데이트

      if (newPin.length === 6) {
        const storage = secureLocalStorage.getItem('user');
        if (storage) {
          const userUid = JSON.parse(storage).uid;

          try {
            await checkPin(userUid, newPin); // 서버에 uid와 pin 번호 전송
            // 성공적으로 확인되면 결제 완료
            closeModal();
            //
            // TODO: 결제 완료 페이지로 이동. 결제가 완료된 것을 어떻게 시각화?
            //
          } catch (error) {
            setMessage('pin 번호가 올바르지 않습니다. 다시 입력하세요.');
            setPinStatus([false, false, false, false, false, false]);
            setPin('');
            shuffleKeypad();
          }
        }
      }
    }
  };

  // 한 글자 지우기 함수
  const deletePin = () => {
    if (pin.length > 0) {
      const newPin = pin.slice(0, -1);
      setPin(newPin);

      const updatedStatus = pinStatus.map((status, idx) => (idx < pin.length - 1 ? true : false));
      setPinStatus(updatedStatus);
    }
  };

  // 전체 삭제 함수
  const clearPin = () => {
    setPin('');
    setPinStatus([false, false, false, false, false, false]); // 동그라미 초기화
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Payment PIN"
      style={{
        content: {
          width: '30rem',
          height: '30rem',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {message && <p className="text-center">{message}</p>}
      <div className="flex justify-center mb-4">
        {pinStatus.map((status, idx) => (
          <div
            key={idx}
            className={`w-6 h-6 rounded-full mx-1 ${status ? 'bg-gray-800' : 'bg-gray-300'}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-3 justify-center">
        {keypadNumbers.map((number) => (
          <button
            key={number}
            className="border border-gray-400 p-3"
            onClick={() => handleKeyClick(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <div className="flex justify-between mt-4">
        <button className="bg-red-500 text-white p-2" onClick={deletePin}>
          한 글자 지우기
        </button>
        <button className="bg-red-700 text-white p-2" onClick={clearPin}>
          전체 삭제
        </button>
      </div>
      <div className="text-center mt-4">
        <button className="bg-blue-500 text-white p-2" onClick={closeModal}>
          닫기
        </button>
      </div>
    </Modal>
  );
};

const ShoppingPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 열기/닫기 함수
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <DefaultLayout>
      <div className="flex justify-between p-6">
        <div className="w-2/4 flex justify-center">
          <img
            src="https://shop-phinf.pstatic.net/20240403_215/1712109653675QFhUl_JPEG/113245552356995930_1814069674.jpg?type=m510"
            alt="Example"
            className="w-100 h-100"
          />
        </div>
        <div className="w-2/4 flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <p>햇반 24개입 15,000원</p>
          <p>배송비: 2,500원</p>
          <p>총 결제 금액: 20,000원</p>
          <button className="bg-gray-300 text-black py-2 px-4 mt-4 rounded-lg" onClick={openModal}>
            eAZy 페이로 결제
          </button>
        </div>
      </div>
      <PaymentModal isOpen={isModalOpen} closeModal={closeModal} />
    </DefaultLayout>
  );
};

PaymentModal.propTypes = {
  isOpen: PropTypes.func.isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default ShoppingPage;
