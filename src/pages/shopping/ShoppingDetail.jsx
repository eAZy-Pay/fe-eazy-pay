import { useState, useEffect } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import secureLocalStorage from 'react-secure-storage';
import { checkPin } from '../../apis/AuthAPI';
import { useLocation, useNavigate } from 'react-router-dom';
import { paymentInfo } from '../../apis/PaymentInfoAPI';
import mainLogo from '../../assets/mainLogo.svg';
import { getSortedValidCards } from '../../apis/UserAPI';
import { getUserSession } from '../../utils/authUtils';
import Slider from '../../components/slider/Slider';

const PaymentModal = ({
  isOpen,
  closeModal,
  categoryId,
  productName,
  formattedPrice,
  storeCode,
  storeName,
}) => {
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [wrongPinMessage, setWrongPinMessage] = useState('');
  const [pin, setPin] = useState(''); // 현재 입력 중인 PIN
  const [keypadNumbers, setKeypadNumbers] = useState([]); // 키패드 번호
  const [pinStatus, setPinStatus] = useState([false, false, false, false, false, false]); // 동그라미 상태
  const [isEnteringPin, setIsEnteringPin] = useState(false);
  const user = getUserSession();
  const userId = user?.uid;
  const [cards, setCards] = useState([]); // 유저의 카드 목록
  const [contents, setContents] = useState([]);
  const [recommendedCardName, setRecommendedCardName] = useState(''); // 추천 카드 이름
  const [activeIndex, setActiveIndex] = useState(0);

  const makeContents = (cards) => {
    setContents(
      cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center justify-center gap-2">
          <p>{card.cardName}</p>
          <img
            className="w-[90px] h-[130px]"
            key={card.cardId}
            src={card.image}
            alt={card.cardName}
          />
        </div>
      ))
    );
  };

  // useEffect(() => {
  //   getSortedValidCards(userId).then((response) => {
  //     makeContents(response);
  //     setCards(response);
  //   });
  // }, [userId]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSortedValidCards(userId);
        console.log('getSortedValidCards response data:', data); // TODO: 추후 로그 삭제
        makeContents(data);
        setCards(data);
        console.log(cards);
        setRecommendedCardName(data[0].cardName);
      } catch (error) {
        console.error('Error fetching or parsing sorted valid cards data:', error);
      }
    };

    fetchData();
  }, [userId]);

  useEffect(() => {
    console.log(`Current Recommended Card: ${recommendedCardName}`); // TODO: 추후 로그 삭제
  }, [recommendedCardName]);

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
      setIsEnteringPin(false); // 모달이 열릴 때마다 모달의 첫 화면으로 돌아감
      shuffleKeypad(); // 모달이 열릴 때마다 키패드 번호를 섞음
      setPin(''); // PIN 리셋
      setPinStatus([false, false, false, false, false, false]); // 동그라미 상태 리셋
      setMessage('PIN 번호를 입력해주세요');
      setWrongPinMessage('');
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
              const price = Number(formattedPrice.replace(/,/g, ''));
              console.log(`price: ${price}`); // TODO: 콘솔 로그 제거
              const response = await paymentInfo(userId, categoryId, price, storeCode, storeName);
              console.log(response); // TODO: 콘솔 로그 제거

              closeModal();

              console.log(`ShoppingDetail에서 productName: ${productName}`); // TODO: 콘솔 로그 제거
              navigate('/shopping/complete', {
                state: {
                  response: JSON.stringify(response), // 응답 데이터를 상태 객체로 전달
                  productName: productName,
                },
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

  const handleEnteringPin = () => {
    setIsEnteringPin(true);
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
          height: '30rem',
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      }}
    >
      {isEnteringPin ? (
        <>
          {wrongPinMessage ? (
            // pin 번호 틀렸을 때 빨간 글씨 메시지를 추가적으로 출력
            <>
              <h2 className="mt-8 text-center text-xl">{message}</h2>
              <p className="mt-1 mb-5 text-sm text-center text-red-700">{wrongPinMessage}</p>
            </>
          ) : (
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
        </>
      ) : (
        <>
          {' '}
          <div className="flex flex-col justify-center items-center p-4">
            <div className="flex justify-between items-center w-3/4">
              <Slider Contents={contents} className="w-full" setActiveIndex={setActiveIndex} />
              <p className=" text-white">{activeIndex}</p>
              {/* TODO: activeIndex 사용 위한 p 태그. 추후 삭제 예정 */}
            </div>
            {/* <p className="border-lime-700 border-2 w-full">{str}</p> */}
            <div className="flex flex-col items-center mt-3 mb-3">
              <p className="text-base text-gray-700 mb-1">eAZy 카드가 추천하는 카드는</p>
              <p className="text-base font-extrabold text-gray-700 ">{recommendedCardName}</p>
            </div>

            <div className="flex flex-col w-full mt-2">
              <div className="flex justify-between items-baseline">
                <p className="text-lg font-semibold text-gray-600 ">최종 결제 금액</p>
                <p className="text-2xl font-bold text-blue-600">{formattedPrice} 원</p>
              </div>

              <div className="flex justify-between items-baseline mt-2">
                <p className="text-lg text-gray-600">예상 혜택</p>
                <p className="text-2xl font-bold text-gray-900 ml-2">0 원</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <button
              className="text-lg bg-blue-100 text-gray-600 py-2 rounded-lg hover:bg-blue-200 transition duration-300"
              onClick={handleEnteringPin}
            >
              결제
            </button>
          </div>
        </>
      )}
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

  const formattedPrice = new Intl.NumberFormat().format(price); // 가격을 세 자리마다 쉼표로 구분하여 형식화

  const [isModalOpen, setModalOpen] = useState(false);

  // 모달 열기/닫기 함수
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <DefaultLayout>
      <div className="flex justify-between py-4">
        <div className=" flex w-1/2 justify-center">
          <div className="flex items-center">
            <img src={image} alt="Example" className="object-cover h-[26rem] w-[26rem]" />
          </div>
        </div>
        {/* 오른쪽 상품 정보 영역 */}
        <div className="flex w-1/2">
          <div className="w-3/4 flex flex-col items-start mx-4 bg-gray-50 p-6 rounded-lg shadow-lg">
            {' '}
            <div className="flex flex-col w-full">
              <div className="flex flex-col justify-end p-6">
                <p className="my-6 text-3xl font-semibold text-gray-800">{storeName}</p>{' '}
                <p className="my-6 text-2xl font-semibold text-gray-800">{name}</p>{' '}
              </div>
              <div className="flex flex-col items-end justify-end p-6">
                <p className="text-2xl  text-gray-600">결제 금액</p>
                <p className="mt-6 text-3xl font-bold text-blue-700">{formattedPrice}원</p>
              </div>
              <button
                className="mt-2 mb-6 mx-6 text-lg bg-blue-100 text-gray-600 py-2 rounded-lg hover:bg-blue-200 transition duration-300"
                onClick={openModal}
              >
                <img src={mainLogo} alt="Main Logo" className="inline-block h-10 w-20 mr-3" />
                결제
              </button>
            </div>
          </div>
        </div>
      </div>

      <PaymentModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        categoryId={categoryId}
        productName={name}
        formattedPrice={formattedPrice}
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
  productName: PropTypes.string.isRequired,
  formattedPrice: PropTypes.string.isRequired,
  storeCode: PropTypes.string.isRequired,
  storeName: PropTypes.string.isRequired,
};

export default ShoppingDetail;
