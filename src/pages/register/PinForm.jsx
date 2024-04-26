import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import { submitAllData } from '../../apis/RegisterAPI';

const PinForm = ({ setStepperIndex, name, id, password, email, phoneNumber, birthday }) => {
  const [modalIsOpen, setModalIsOpen] = useState(true);
  const [pin, setPin] = useState('');
  const [storedPin, setStoredPin] = useState(null);
  const [keypadNumbers, setKeypadNumbers] = useState([]);
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]);
  const [message, setMessage] = useState('PIN 번호를 입력해주세요');
  const [wrongPinMessage, setWrongPinMessage] = useState('');

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

  const regInfoSubmit = async () => {
    try {
      await submitAllData({
        name,
        id,
        password,
        email,
        phoneNumber,
        birthday,
        pin,
      });
      setStepperIndex(4);
    } catch (error) {
      console.error('Registration Failed:', error);
    }
  };

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
      if (storedPin === null) {
        setStoredPin(pin);
        setMessage('PIN번호를 다시 입력해주세요');
        setPin('');
        setPinStatus([false, false, false, false, false, false]);
        shuffleKeypad();
      } else if (storedPin === pin) {
        regInfoSubmit();
        closeModal();
      } else {
        setMessage('PIN번호를 다시 입력해주세요');
        setWrongPinMessage('PIN번호가 일치하지 않아요');
        setPin('');
        setPinStatus([false, false, false, false, false, false]);
      }
    }
  }, [pin]);

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

PinForm.propTypes = {
  setStepperIndex: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired,
  birthday: PropTypes.string.isRequired,
};

export default PinForm;
