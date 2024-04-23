import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

// 모달 창 안에 핀번호 입력 폼 및 키패드
const PinForm = ({ setValidPin, setStepperIndex }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pin, setPin] = useState(''); // 현재 입력 중인 핀번호
  const [storedPin, setStoredPin] = useState(null); // 저장된 PIN
  const [keypadNumbers, setKeypadNumbers] = useState([]); // 키패드에 표시될 숫자
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]); // 동그라미 표시
  const [message, setMessage] = useState('PIN 번호를 입력해주세요'); // 메시지 상태

  // 자동으로 모달 열기
  useEffect(() => {
    setModalIsOpen(true); // 모달을 자동으로 열기
  }, []); // 이펙트가 한 번 실행되도록 빈 배열을 사용

  // 랜덤한 키패드 번호 생성
  const shuffleKeypad = () => {
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5); // 숫자를 섞음
    setKeypadNumbers(shuffledNumbers); // 새롭게 섞은 숫자 배열로 업데이트
  };

  useEffect(() => {
    shuffleKeypad(); // 처음 키패드를 섞음
  }, []);

  // 핀 입력 처리
  const handleKeyClick = (number) => {
    if (pin.length < 6) {
      const newPin = pin + number; // 새로운 PIN 추가
      setPin(newPin); // 현재 입력된 핀번호 업데이트

      const updatedStatus = pinStatus.map((status, idx) => (idx < newPin.length ? true : false));
      setPinStatus(updatedStatus); // 동그라미 표시 업데이트

      if (newPin.length === 6) {
        if (storedPin === null) {
          setStoredPin(newPin); // 첫 번째 PIN 저장
          setMessage('PIN 번호 확인을 위해 다시 입력해주세요'); // 메시지 업데이트
          setPin(''); // 핀번호 초기화
          setPinStatus([false, false, false, false, false, false]); // 동그라미 초기화
          shuffleKeypad(); // 키패드를 다시 섞음
        } else if (storedPin === newPin) {
          setValidPin(newPin); // 입력된 PIN이 저장된 PIN과 일치하면
          setStepperIndex(4); // 다음 스텝으로 이동하고
          closeModal(); // 모달 닫기
        } else {
          setMessage('PIN 번호가 일치하지 않습니다. 다시 입력해주세요'); // 메시지 업데이트
          setPin(''); // 핀번호 초기화
          setPinStatus([false, false, false, false, false, false]); // 동그라미 초기화
          shuffleKeypad(); // 키패드를 다시 섞음
        }
      }
    }
  };

  // 핀번호 삭제 함수
  const deletePin = () => {
    if (pin.length > 0) {
      const newPin = pin.slice(0, -1); // 마지막 숫자 삭제
      setPin(newPin);

      const updatedStatus = pinStatus.map((status, idx) => (idx < pin.length - 1 ? true : false));
      setPinStatus(updatedStatus); // 동그라미 상태 업데이트
    }
  };

  // 전체 삭제 버튼
  const clearPin = () => {
    setPin('');
    setPinStatus([false, false, false, false, false, false]); // 전체 초기화
  };

  // 모달 열기/닫기 함수
  const closeModal = () => setModalIsOpen(false);

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="PIN 입력"
        appElement={document.getElementById('root')}
        style={{
          content: {
            width: '30rem',
            height: '30rem',
            top: '40%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // 중앙 정렬
          },
        }}
      >
        <h2 className="text-center">{message}</h2> {/* 메시지 상태 */}
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
    </div>
  );
};

PinForm.propTypes = {
  setValidPin: PropTypes.func.isRequired,
  setStepperIndex: PropTypes.func.isRequired,
};

export default PinForm;
