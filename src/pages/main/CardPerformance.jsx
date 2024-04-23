// import React from "react";
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from './CardsGage';
import CardLetter from './CardLetter';
import PropTypes from 'prop-types';

const UserMainComponent = ({ benefitAmount, useAmount, card }) => {
  /* 
  card.image // 카드 이미지
  benefitAmount // 받은 혜택
  card.benefitLimit // 총 혜택
  useAmount // 사용 금액
  card.performance // 실적 기준
*/
  return (
    <>
      <div className="flex items-center justify-center">
        <RotatedCard image={card.image} style={{ width: '157.71px', height: '251.98px' }} />
        <div className="flex flex-col items-center gap-8">
          <div className="flex">
            <CardsGage
              color="#f79042"
              amount={benefitAmount}
              total={card.benefitLimit}
              margin="ml-36"
            />
            <CardLetter
              color="#f79042"
              label="혜택"
              amount={benefitAmount}
              total={card.benefitLimit}
            />
          </div>
          <div className="flex">
            <CardsGage color="#70a6e8" amount={useAmount} total={card.performance} margin="ml-36" />
            <CardLetter color="#70a6e8" label="실적" amount={useAmount} total={card.performance} />
          </div>
        </div>
      </div>
    </>
  );
};

UserMainComponent.propTypes = {
  benefitAmount: PropTypes.number.isRequired,
  useAmount: PropTypes.number.isRequired,
  card: PropTypes.object.isRequired,
};

export default UserMainComponent;
