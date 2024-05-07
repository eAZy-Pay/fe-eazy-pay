// import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import DefaultLayout from '../../components/layout/DefaultLayout';
import { useState, useEffect } from 'react';
import { getCardsSummary } from '../../apis/CardAPI';
import { getUserSession } from '../../utils/authUtils';
import plusIcon from '../../assets/plusIcon.svg';
import eAZyCard from '../../assets/eAZyCard.svg';
import infoIcon from '../../assets/infoIcon.svg';
import { Link } from 'react-router-dom';
import Marquee from 'react-fast-marquee';

import CardItem from './CardItem';

const ManageMyCard = () => {
  const [userCards, setUserCards] = useState([]); // 배열로 초기화

  useEffect(() => {
    const fetchData = async () => {
      try {
        const user = getUserSession();
        const uid = user.uid;
        const cardsSummary = await getCardsSummary(uid, 1, 0);
        const cards = Array.isArray(cardsSummary.cards) ? cardsSummary.cards : [];

        setUserCards(cards); // 상태 업데이트
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, []);

  const gapStyle = (cardCount) => {
    if (cardCount >= 4) {
      return 'gap-[2.5rem]';
    }
    if (cardCount <= 3) {
      return 'gap-[9rem]';
    }
  };

  const linkedCards = (cards, gap) => (
    <div className={`flex justify-center ${gap}`}>
      {cards
        .filter(({ linkEazy }) => linkEazy) // linkEazy가 true인 카드만 필터링
        .map(({ card }, index) => (
          <div key={index} style={{ width: '12.5rem' }}>
            <div className="flex flex-col items-center">
              <img
                src={card.image}
                style={{ maxWidth: '7rem', height: 'auto' }}
                className="rotate-90"
              />
              <div
                className="text-lg"
                style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
              >
                {card.name}
              </div>
            </div>
          </div>
        ))}
    </div>
  );

  return (
    <>
      <DefaultLayout showFooter={false}>
        <h2 className="mt-28 mb-8 text-4xl font-bold">나만의 eAZy</h2>
      </DefaultLayout>

      <DefaultLayout showNavBar={false}>
        <DefaultFrame boxShadow={false}>
          <div className="flex gap-5 p-10">
            <div className="flex items-center">
              <img src={eAZyCard} style={{ width: '16rem', height: 'auto' }} alt="eAZy Card" />
            </div>
            <div className="flex flex-col w-full gap-5 mx-5">
              <div className="flex justify-between just gap-2">
                <div className="flex w-full gap-2">
                  <div className="flex items-center text-3xl"> 연동된 카드</div>
                  <img src={infoIcon} alt="Info Icon" className="" />
                </div>
                <Link
                  to="/mypage/card-management/link-eazy"
                  className="flex justify-center items-center w-60 h-12 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
                >
                  <div className="text-xl text-center">eAZy 카드 연동 관리</div>
                </Link>
              </div>
              {userCards.filter(({ linkEazy }) => linkEazy).length > 4 ? (
                <div className="flex justify-center md:w-[900px]">
                  <Marquee className="gap-[2.5rem]" speed={30}>
                    {linkedCards(
                      userCards,
                      gapStyle(userCards.filter((card) => card.linkEazy).length)
                    )}
                  </Marquee>
                </div>
              ) : (
                linkedCards(userCards, gapStyle(userCards.filter((card) => card.linkEazy).length))
              )}
            </div>
          </div>
        </DefaultFrame>

        <div className="flex justify-between items-center text-2xl mt-16 mb-8">내 카드 관리</div>
        <div className="flex flex-wrap justify-between">
          {userCards.map((card, index) => (
            <CardItem key={index} {...card} />
          ))}
          <div
            style={{ width: '39.25rem', cursor: 'pointer' }} // 마지막에 카드 추가를 위한 공간 추가
          >
            <Link to="/card-search">
              <DefaultFrame className="flex justify-center h-[304.83px] ">
                <div className="flex flex-col justify-center items-center gap-3 ">
                  <img src={plusIcon} alt="Plus Icon" />
                  <div className="text-2xl">새로운 카드를 추가해 보세요!</div>
                </div>
              </DefaultFrame>
            </Link>
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default ManageMyCard;
