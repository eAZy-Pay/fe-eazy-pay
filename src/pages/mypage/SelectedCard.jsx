// import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DefaultFrame from '../../components/layout/DefaultFrame';
import useCardById from '../../hooks/useCardById';
import BenefitRow from '../card/BenefitRow';
import SelectedCardModal from './SelectedCardModal';
import { getUserSession } from '../../utils/authUtils';
import { getCardsSummary } from '../../apis/CardAPI';
import {
  deleteUserCard,
  updateUserCardValid,
  updateUserCardLinkEazy,
  updateUserCardPaymentLimit,
} from '../../apis/UserAPI';

import cardPause from '../../assets/pauseIcon.svg';
import cardUnpause from '../../assets/playIcon.svg';
import cardDelete from '../../assets/cardDelete.svg';
import paymentLimit from '../../assets/paymentLimit.svg';
import unlink from '../../assets/unlink.svg';
import link from '../../assets/link.svg';

const SelectedCard = () => {
  const location = useLocation(); // 현재 위치 정보를 가져옴
  const [userCards, setUserCards] = useState([]); // 배열로 초기화
  const [selectedCard, setSelectedCard] = useState({});
  const cardWithBenefit = useCardById(selectedCard?.card?.uid); // card ID를 가져옴
  const benefitList = cardWithBenefit?.benefitList || []; // benefitList가 존재하지 않으면 빈 배열
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // 드롭다운 열림/닫힘 상태 관리
  const [desiredLimit, setDesiredLimit] = useState(''); // 카드 한도 변경값
  const navigate = useNavigate(); // 화면 전환을 위해

  const [modalContent, setModalContent] = useState({
    isOpen: false,
    title: '',
    content: '',
    actionType: '',
    errorMessage: '',
  });

  const openModal = (title, content, actionType) => {
    setModalContent({ isOpen: true, title, content, actionType, errorMessage: '' });
  };

  const closeModal = () => {
    setModalContent({
      isOpen: false,
      title: '',
      content: '',
      actionType: '',
      errorMessage: '',
    });
  };

  const confirmAction = async () => {
    try {
      switch (modalContent.actionType) {
        case 'limitChange':
          await updateUserCardPaymentLimit(selectedCard.uid, parseInt(desiredLimit, 10));
          setSelectedCard((prev) => ({ ...prev, paymentLimit: parseInt(desiredLimit, 10) }));
          break;
        case 'link':
          await updateUserCardLinkEazy(selectedCard.uid);
          setSelectedCard((prev) => ({ ...prev, linkEazy: true }));
          break;
        case 'unlink':
          await updateUserCardLinkEazy(selectedCard.uid);
          setSelectedCard((prev) => ({ ...prev, linkEazy: false }));
          break;
        case 'pause':
          await updateUserCardValid(selectedCard.uid);
          setSelectedCard((prev) => ({ ...prev, cardValid: false }));
          break;
        case 'unpause':
          await updateUserCardValid(selectedCard.uid);
          setSelectedCard((prev) => ({ ...prev, cardValid: true }));
          break;
        case 'delete':
          deleteUserCard(selectedCard.uid);
          navigate('/mypage/card-management');
          break;
        default:
          console.log(`Unknown action: ${modalContent.actionType}`);
      }
      // 성공 시 모달을 닫습니다.
      closeModal();
    } catch (error) {
      console.error('Action failed:', error);
      setModalContent((prev) => ({
        ...prev,
        errorMessage: error.message,
      }));
    }
  };

  const renderCardAction = (imgSrc, text, actionType) => (
    <div className="flex">
      <button
        onClick={() => {
          let content;
          if (actionType === 'limitChange') {
            content = (
              <div>
                <p>변경하고 싶은 한도 금액을 입력해주세요:</p>
                <input
                  type="number"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder={`${selectedCard.paymentLimit}`}
                  step={100000} // 10만 단위로 조정
                  onChange={(e) => setDesiredLimit(e.target.value)}
                />
              </div>
            );
          } else {
            content = `정말 ${text}를 하시겠습니까?`;
          }
          openModal('확인', content, actionType);
        }}
        className="flex items-center gap-5"
      >
        <img src={imgSrc} className="w-10 h-10" alt="Icon" />
        <div>{text}</div>
      </button>
    </div>
  );

  // 모든 카테고리에서 적립 가능한 카드인지 확인
  const isAllCategory =
    benefitList.length > 8 &&
    benefitList.every((benefit) => benefit.benefitRate === benefitList[0].benefitRate);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserSession();
        const uid = user.uid;

        const cardsSummary = await getCardsSummary(uid, 1, 0);

        // cardsSummary에서 cards를 추출
        const cards = Array.isArray(cardsSummary.cards) ? cardsSummary.cards : [];

        // cards에서 uid가 location.state와 일치하는 카드 찾기
        const cardWithUid = cards.find((card) => card.uid === location.state);

        setSelectedCard(cardWithUid);
        setUserCards(cards); // 상태 업데이트
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, [location.state]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // 드롭다운 상태 토글
  };

  const selectCard = (card) => {
    setSelectedCard(card); // 카드 선택 시 selectedCard 업데이트
    setIsDropdownOpen(false); // 드롭다운 닫기
  };

  // num이 undefined가 아니면 마스킹 처리
  const maskedNum = selectedCard.num ? selectedCard.num.slice(-4).replace(/\d(?=\d{0}$)/, '*') : '';

  // 카드 번호 포맷팅 함수
  const formatCardNumber = (number) => {
    // 숫자만 남기고 나머지 문자 제거
    const cleanNumber = number.replace(/\D/g, '');
    // 4자리씩 끊어서 '-' 추가
    const formattedNumber = cleanNumber.replace(/(.{4})/g, '$1-');
    // 마지막에 추가된 '-' 제거 후 반환
    return formattedNumber.slice(0, -1);
  };

  // 만료 날짜 포맷팅
  const formattedDate = selectedCard?.expirationDate
    ? selectedCard?.expirationDate.split('T')[0]
    : ''; // "T"를 기준으로 문자열을 분할하여 첫 번째 부분(날짜)만 선택

  // 드롭다운 CSS 및 배경
  const dropdownStyles = {
    top: '100%',
    left: 0,
    right: 0,
    zIndex: 1000,
    backgroundColor: 'white',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.15)',
    borderRadius: '8px',
    overflowY: 'auto', // 스크롤 가능하도록
    maxHeight: '15rem', // 최대 높이 설정
    padding: '1rem', // 드롭다운 안쪽 여백
  };

  return (
    selectedCard &&
    selectedCard.card && (
      <DefaultLayout>
        {modalContent.isOpen && (
          <SelectedCardModal
            isOpen={modalContent.isOpen}
            title={modalContent.title}
            content={modalContent.content}
            actionType={modalContent.actionType}
            onConfirm={confirmAction}
            onClose={closeModal}
          />
        )}

        <DefaultFrame className="border-solid border-x-[#962DFF] border-y-[#962DFF] p-7 mt-10 mb-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={selectedCard.card.image}
                className="mx-5"
                style={{ width: '5rem', height: 'auto' }}
                alt="Selected Card"
              />
              <div className="flex flex-col gap-3">
                <div className="text-2xl">{selectedCard.card.name}</div>
                <div className="text-xl text-gray-400">카드 번호 {maskedNum}</div>
              </div>
            </div>
            <button
              className="flex justify-center items-center w-32 h-10 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              onClick={toggleDropdown}
            >
              <div className="text-xl text-center">카드변경</div>
            </button>
          </div>
        </DefaultFrame>

        {/* 드롭다운 */}
        {isDropdownOpen && (
          <div style={dropdownStyles}>
            {userCards.map((card) => (
              <div
                key={card.uid}
                onClick={() => selectCard(card)}
                className="flex items-center justify-between p-3 hover:bg-gray-100 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={card.card.image}
                    style={{ width: '2.5rem', height: 'auto' }}
                    alt={card.card.name}
                  />
                  <div className="flex flex-col">
                    <div className="text-2xl">{card.card.name}</div>
                    <div className="text-gray-400">카드 번호 {card.num}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex h-auto gap-10">
          <div className="flex w-1/2 gap-10 p-4 mt-5">
            <DefaultFrame className="border-none " boxShadow={false}>
              <div
                className="flex flex-col justify-center items-center rounded-lg p-5"
                style={{
                  backgroundColor: '#F4F7FC',
                }}
              >
                <img src={selectedCard.card.image} className="p-10" alt="Selected Card" />
                {isAllCategory ? (
                  <BenefitRow
                    key="all"
                    categoryName="모든"
                    benefitRate={benefitList[0].benefitRate}
                    index={0}
                    className="text-lg"
                  />
                ) : (
                  benefitList.map((benefit, index) => (
                    <BenefitRow
                      key={index}
                      categoryName={benefit.categoryName.toString()}
                      benefitRate={benefit.benefitRate}
                      index={index}
                      className="text-lg"
                    />
                  ))
                )}
                <div className="flex justify-center mt-10 gap-4 text-lg font-light">
                  <span>연회비: {selectedCard.card.annualFee.toLocaleString()}원</span>
                  <div>{` / `}</div>
                  <span>전월 실적 기준: {selectedCard.card.performance.toLocaleString()}원</span>
                </div>
              </div>
            </DefaultFrame>
          </div>

          <div className="w-1/2">
            <h2 className="text-3xl mb-5">카드관리</h2>
            <div className="flex flex-col text-lg">
              <div className="flex justify-start gap-10">
                <span>혜택 한도: {selectedCard?.paymentLimit.toLocaleString()}원</span>
                <span>이지카드 연동: {selectedCard.linkEazy ? '예' : '아니요'}</span>
                <span>유효한 카드: {selectedCard?.cardValid ? '예' : '아니요'}</span>
              </div>
              <div className="flex justify-start gap-5">
                <span>카드번호: {formatCardNumber(selectedCard?.num)}</span>
                <span>만료 날짜: {formattedDate}</span>
              </div>

              <div className="flex flex-col my-10 gap-16 text-2xl">
                {renderCardAction(paymentLimit, '카드 한도 변경하기', 'limitChange')}
                {renderCardAction(
                  selectedCard.linkEazy ? unlink : link,
                  selectedCard.linkEazy ? '이지카드 연동 해제하기' : '이지카드 연동하기',
                  selectedCard.linkEazy ? 'unlink' : 'link'
                )}
                {renderCardAction(
                  selectedCard.cardValid ? cardPause : cardUnpause,
                  selectedCard.cardValid ? '카드 일시정지하기' : '카드 일시정지 해제',
                  selectedCard.cardValid ? 'pause' : 'unpause'
                )}
                {renderCardAction(cardDelete, '카드 삭제하기', 'delete')}
              </div>
            </div>
          </div>
        </div>
      </DefaultLayout>
    )
  );
};

export default SelectedCard;
