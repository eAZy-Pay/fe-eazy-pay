// import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from '../main/CardsGage';
import CardLetter from '../main/CardLetter';
import arrowIcon from '../../assets/arrowIcon.svg';
import eazy from '../../assets/eAZyCard.svg';
import PropTypes from 'prop-types';

const CardManagement = ({ cards = [], amount = 0 }) => {
  if (!Array.isArray(cards)) {
    // 배열이 아니면 기본값으로 설정
    cards = [];
  }

  return (
    <div className="flex-grow p-4">
      <DefaultFrame boxShadow={false}>
        <div className=" flex justify-between items-center text-2xl">
          <h2 className="ml-6 mr-1 my-4 text-2xl font-extrabold">내 카드 관리</h2>
          <img src={arrowIcon} alt="ArrowIcon" className="ml-1" />
          {/* 카드 편집 버튼 */}
          <div className="flex justify-center items-center mr-8 rounded-xl border-2 border-gray-200 w-32 h-10 ml-auto shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="text-center text-xl">카드 편집</div>
          </div>
        </div>
        {/* 이지카드 총 혜택 */}
        <div className="mx-6 my-10 text-2xl">총 혜택</div>
        <DefaultFrame className="flex max-w-[32rem] m-6">
          <img
            src={eazy}
            alt="Eazy Image"
            className="ml-9"
            style={{ transform: 'rotate(90deg)', maxWidth: '5.75rem', height: 'auto' }}
          />
          <div className="flex flex-col justify-center gap-4">
            <CardsGage color="#f79042" amount={amount} total={amount} width="w-3/4" />
            <CardLetter color="#f79042" label="총 혜택" amount={amount} total={amount} />
          </div>
        </DefaultFrame>
        {/* 카드관리 */}
        <div className="flex items-center self-left mx-6 my-10 text-2xl">카드 관리</div>
        <div className="flex flex-col w-full">
          {cards.map((card, index) => (
            <DefaultFrame key={index} className="flex max-w-[32rem] mx-6 mb-11">
              <RotatedCard
                image={card.card.image}
                style={{ maxWidth: '5.75rem', height: 'auto' }}
              />
              <div className="flex flex-col justify-center gap-4">
                <CardsGage
                  color="#f79042"
                  amount={card.benefitAmount}
                  total={card.card.benefitLimit}
                  width="w-3/4"
                />
                <CardLetter
                  color="#f79042"
                  label="혜택"
                  amount={card.benefitAmount}
                  total={card.card.benefitLimit}
                />
              </div>
            </DefaultFrame>
          ))}
        </div>
      </DefaultFrame>
    </div>
  );
};

CardManagement.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      card: PropTypes.shape({
        uid: PropTypes.number,
        image: PropTypes.string,
        name: PropTypes.string,
      }),
      benefitAmount: PropTypes.number,
      useAmount: PropTypes.number,
    })
  ),
  amount: PropTypes.number,
};

export default CardManagement;
