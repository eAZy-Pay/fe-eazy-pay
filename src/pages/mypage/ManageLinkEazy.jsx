// import React from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import { useEffect, useState } from 'react';
import { getCardsSummary } from '../../apis/CardAPI';
import { getUserSession } from '../../utils/authUtils';
import { updateUserCardLinkEazy } from '../../apis/UserAPI';
import PropTypes from 'prop-types';

const CardDisplay = ({ title, cardCount, userCards, update, onUpdate }) => (
  <>
    <h2 className="mt-28 mb-4 ml-28 text-3xl font-bold">{title}</h2>
    <div className="flex flex-col items-center">
      <div className="flex justify-start w-5/6 mt-6 mb-2">
        <p className="text-gray-600 text-xl">총 </p>
        <p className="text-gray-600 text-xl ml-1">{cardCount}</p>
        <p className="text-gray-600 text-xl">개</p>
      </div>
      <hr className="bold-hr2 w-5/6" />
      <div className="flex flex-col items-center w-5/6">
        {userCards.map(({ card, num, uid }, index) => {
          const lastFourDigits = num.slice(-4);
          const maskedNum = lastFourDigits.replace(/\d(?=\d{0}$)/, '*');

          return (
            <div key={index} className="flex flex-col text-center w-full text-lg">
              <div className="flex justify-center items-center justify-between px-5 my-5">
                <div className="flex gap-4">
                  <img src={card.image} style={{ maxWidth: '7rem', height: 'auto' }} />
                  <div className="flex flex-col justify-center items-start gap-3 text-2xl">
                    <p className="font-semibold">{card.name}</p>
                    <p className="">{maskedNum}</p>
                  </div>
                </div>
                <div className="flex items-end ml-auto">
                  <button
                    className="flex justify-center items-center w-32 h-10 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                    onClick={() => onUpdate(uid)}
                  >
                    <div className="text-xl text-center">{update}</div>
                  </button>
                </div>
              </div>
              <hr className="bold-hr2" />
            </div>
          );
        })}
      </div>
    </div>
  </>
);

CardDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  cardCount: PropTypes.number,
  userCards: PropTypes.array,
  update: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
};

function ManageLinkEazy() {
  const [linkedCards, setLinkedCards] = useState([]);
  const [unlinkedCards, setUnlinkedCards] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserSession();
        const uid = user.uid;
        const cardsSummary = await getCardsSummary(uid, 1, 0);
        const cards = Array.isArray(cardsSummary.cards) ? cardsSummary.cards : [];

        // 연동된 카드와 미연동 카드를 분류하여 저장
        const linkedCards = cards.filter((card) => card.linkEazy);
        const unlinkedCards = cards.filter((card) => !card.linkEazy);

        setLinkedCards(linkedCards); // 연동된 카드 목록 설정
        setUnlinkedCards(unlinkedCards); // 미연동 카드 목록 설정
      } catch (error) {
        // console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, []);

  const handleUpdate = async (cardUid) => {
    // console.log('Updating card link status for UID:', cardUid); // 로그 추가
    try {
      await updateUserCardLinkEazy(cardUid);
      // console.log('Card link status updated successfully'); // 성공 로그
      const user = getUserSession();
      const uid = user.uid;
      const cardsSummary = await getCardsSummary(uid, 1, 0); // 카드 목록 다시 가져오기
      const cards = Array.isArray(cardsSummary.cards) ? cardsSummary.cards : [];

      // 다시 카드 분류
      const linkedCards = cards.filter((card) => card.linkEazy);
      const unlinkedCards = cards.filter((card) => !card.linkEazy);

      setLinkedCards(linkedCards);
      setUnlinkedCards(unlinkedCards);
    } catch (error) {
      // console.error('Failed to update card link status:', error);
    }
  };

  return (
    <DefaultLayout>
      <h2 className="mt-28 ml-28 text-4xl font-extrabold">eAZy 카드 연동 관리</h2>
      <CardDisplay
        title="연동된 카드"
        cardCount={linkedCards.length}
        userCards={linkedCards}
        update="연동 해제"
        onUpdate={handleUpdate}
      />
      <CardDisplay
        title="미연동 카드"
        cardCount={unlinkedCards.length}
        userCards={unlinkedCards}
        update="연동하기"
        onUpdate={handleUpdate}
      />
    </DefaultLayout>
  );
}

export default ManageLinkEazy;
