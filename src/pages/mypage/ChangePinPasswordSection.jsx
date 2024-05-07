import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { changePinPassword } from '../../apis/AuthAPI';

const ChangePinPasswordSection = ({ pin: existingPin, uid }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState(existingPin);
  const [newPin, setNewPin] = useState('');
  const [stage, setStage] = useState(1); // 1: 기존 PIN 확인, 2: 새 PIN 설정, 3: 새 PIN 확인
  const [keypadNumbers, setKeypadNumbers] = useState([]);
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]);
  const [message, setMessage] = useState('기존 PIN 번호를 입력해주세요');
  const [wrongPinMessage, setWrongPinMessage] = useState('');

  const handlePinPasswordChange = async () => {
    try {
      const response = await changePinPassword(uid, newPin);
      if (response.ok) {
        alert('PIN비밀번호가 성공적으로 변경되었습니다.');
        // Clear input fields and reset all states
        setStoredPin(newPin);
        setPin('');
        setNewPin('');
        setStage(1);
        setPinStatus([false, false, false, false, false, false]);
        setMessage('기존 PIN 번호를 입력해주세요');
        setWrongPinMessage('');
      } else {
        alert('PIN비밀번호 변경에 실패했습니다. 다시 시도해주세요.');
      }
    } catch (error) {
      console.error('Password change failed:', error);
      alert('PIN비밀번호 변경 중 오류가 발생했습니다.');
    }
  };

  const shuffleKeypad = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    setKeypadNumbers(
      shuffledNumbers.slice(0, 9).concat(['전체삭제', ...shuffledNumbers.slice(9), '삭제'])
    );
  };

  useEffect(() => {
    shuffleKeypad();
  }, []);

  const handleKeyClick = (label) => {
    if (label === '삭제') {
      deleteLastPin();
    } else if (label === '전체삭제') {
      clearPin();
    } else if (pin.length < 6) {
      setPin(pin + label);
      const updatedStatus = pinStatus.map((status, idx) => idx < pin.length + 1);
      setPinStatus(updatedStatus);
    }
  };

  const deleteLastPin = () => {
    if (pin.length > 0) {
      const newPin = pin.slice(0, -1);
      setPin(newPin);

      const updatedStatus = pinStatus.map((status, idx) => idx < pin.length - 1);
      setPinStatus(updatedStatus);
    }
  };

  const clearPin = () => {
    setPin('');
    setPinStatus([false, false, false, false, false, false]);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  useEffect(() => {
    if (pin.length === 6) {
      if (stage === 1 && pin === storedPin) {
        setStage(2);
        setMessage('새로운 PIN 번호를 입력해주세요');
        setPin('');
        setWrongPinMessage('');
        setPinStatus([false, false, false, false, false, false]);
      } else if (stage === 2) {
        if (pin === storedPin) {
          setWrongPinMessage('새로운 PIN 번호는 기존 PIN 번호와 달라야 합니다');
          setPin('');
          setPinStatus([false, false, false, false, false, false]);
        } else {
          setNewPin(pin);
          setStage(3);
          setMessage('새로운 PIN 번호를 다시 입력해주세요');
          setWrongPinMessage('');
          setPin('');
          setPinStatus([false, false, false, false, false, false]);
        }
      } else if (stage === 3 && pin === newPin) {
        closeModal();
        handlePinPasswordChange();
      } else {
        setMessage('PIN번호를 다시 입력해주세요');
        setWrongPinMessage('PIN번호가 일치하지 않아요');
        setPin('');
        setPinStatus([false, false, false, false, false, false]);
      }
    }
  }, [pin, stage]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="PIN 입력"
      appElement={document.getElementById('root')}
      style={{
        content: {
          width: '22rem',
          height: '28rem',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {/* 작은 폰트로 메시지 출력 */}
      {wrongPinMessage !== '' && (
        <>
          <h2 className="mt-8 text-center text-xl">{message}</h2>
          <p className="mt-1 mb-5 text-sm text-center text-red-700">{wrongPinMessage}</p>
        </>
      )}

      {wrongPinMessage === '' && (
        <>
          <h2 className="my-8 text-center text-xl">{message}</h2>
        </>
      )}

      <div className="flex justify-center">
        {pinStatus.map((status, idx) => (
          <div
            key={idx}
            className={`w-6 h-6 rounded-full mx-1 ${status ? 'bg-gray-800' : 'bg-neutral-200'}`}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 gap-0 mt-12">
        {keypadNumbers.map((label) => (
          <button
            key={label}
            className={`p-3 font-bold ${
              label === '삭제' || label === '전체삭제' ? 'text-base' : 'text-2xl'
            }`} // 숫자는 크게, 삭제/전체삭제는 작게
            onClick={() => handleKeyClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
    </Modal>
  );
};

ChangePinPasswordSection.propTypes = {
  pin: PropTypes.string,
  uid: PropTypes.number.isRequired,
};

export default ChangePinPasswordSection;
