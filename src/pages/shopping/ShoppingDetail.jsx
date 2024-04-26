import { useState, useEffect } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import secureLocalStorage from 'react-secure-storage';
import { checkPin } from '../../apis/AuthAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { paymentInfo } from '../../apis/PaymentInfoAPI';

const PaymentModal = ({ isOpen, closeModal, categoryId, price, storeCode, storeName }) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [wrongPinMessage, setWrongPinMessage] = useState('');
  const [pin, setPin] = useState(''); // 현재 입력 중인 PIN
  const [keypadNumbers, setKeypadNumbers] = useState([]); // 키패드 번호
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]); // 동그라미 상태

  // 키패드 번호 섞기
  const shuffleKeypad = () => {
    const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const shuffledNumbers = numbers.sort(() => Math.random() - 0.5);
    setKeypadNumbers(
      shuffledNumbers.slice(0, 9).concat(['전체삭제', ...shuffledNumbers.slice(9), '삭제'])
    );
  };
  useEffect(() => {
    if (isOpen) {
      shuffleKeypad(); // 모달이 열릴 때마다 키패드 번호를 섞음
      setPin(''); // PIN 리셋
      setPinStatus([false, false, false, false, false, false]); // 동그라미 상태 리셋
      setMessage('PIN 번호를 입력해주세요');
    }
  }, [isOpen]);

  // 핀번호 입력 처리
  const handleKeyClick = async (label) => {
    if (label === '삭제') {
      deletePin();
    } else if (label === '전체삭제') {
      clearPin();
    } else if (pin.length < 6) {
      const newPin = pin + label;
      setPin(newPin);
      console.log(newPin); // TODO: 콘솔 로그 제거

      const updatedStatus = pinStatus.map((status, idx) => (idx < newPin.length ? true : false));
      setPinStatus(updatedStatus); // 동그라미 상태 업데이트

      if (newPin.length === 6) {
        const storage = secureLocalStorage.getItem('user');
        if (storage) {
          const userUid = JSON.parse(storage).uid;

          try {
            await checkPin(userUid, newPin); // 서버에 uid와 pin 번호 전송
            console.log('pin 번호 확인 완료'); // TODO: 콘솔 로그 제거
            const userId = userUid;

            try {
              const response = await paymentInfo(userId, categoryId, price, storeCode, storeName);
              console.log(response); // TODO: 콘솔 로그 제거

              closeModal();

              navigate('/shopping/complete', {
                state: JSON.stringify(response), // 응답 데이터를 상태 객체로 전달
              });
            } catch (error) {
              console.error(error);
            }
          } catch (error) {
            setWrongPinMessage('pin 번호가 올바르지 않습니다. 다시 입력하세요.');
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
      appElement={document.getElementById('root')}
      onRequestClose={closeModal}
      contentLabel="Payment PIN"
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
      {wrongPinMessage && (
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
            }`}
            onClick={() => handleKeyClick(label)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className="text-center mt-4"></div>
    </Modal>
  );
};

const ShoppingDetail = () => {
  // 쿼리 파라미터 읽기
  const { search } = useLocation();
  // 쿼리 파라미터 파싱
  const queryParams = new URLSearchParams(search);
  const categoryId = queryParams.get('categoryId');
  const storeCode = queryParams.get('storeCode');
  const storeName = queryParams.get('storeName');
  const image = queryParams.get('image');
  const name = queryParams.get('name');
  const price = queryParams.get('price');

  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 열기/닫기 함수
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <DefaultLayout>
      <div className="flex justify-between p-6">
        <div className="w-2/4 flex justify-center">
          <img src={image} alt="Example" className="w-100 h-100" />
        </div>
        <div className="w-2/4 flex flex-col items-start bg-gray-100 p-4 rounded-lg">
          <p>category id : {categoryId}</p>
          <p>상품명 : {name}</p>
          <p>가격 : {price}</p>
          <button className="bg-gray-300 text-black py-2 px-4 mt-4 rounded-lg" onClick={openModal}>
            eAZy pay로 결제
          </button>
        </div>
      </div>
      <PaymentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        categoryId={categoryId}
        price={price}
        storeCode={storeCode}
        storeName={storeName}
      />
    </DefaultLayout>
  );
};

PaymentModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  categoryId: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
};

export default ShoppingDetail;
