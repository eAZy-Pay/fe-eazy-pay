import { useState, useEffect } from 'react';
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from './CardsGage';
import CardLetter from './CardLetter';
import PropTypes from 'prop-types';
import { getUserCardFulfilled } from '../../apis/UserAPI';

const UserMainComponent = ({ benefitAmount, useAmount, card, uid }) => {
  /* 
  card.image // 카드 이미지
  benefitAmount // 받은 혜택
  card.benefitLimit // 총 혜택
  useAmount // 사용 금액
  card.performance // 실적 기준
*/
  const [isFulfilled, setIsFulfilled] = useState(false); // 충족 여부
  const [fulfilledColor, setFulfilledColor] = useState(''); // 기본적으로 회색

  useEffect(() => {
    const fetchFulfillment = async () => {
      const isFulfilled = await getUserCardFulfilled(uid);
      setFulfilledColor(isFulfilled ? '' : '#d3d3d3'); // 충족 여부에 따라 색상 업데이트
      setIsFulfilled(isFulfilled);
    };

    fetchFulfillment();
  }, [uid]); // uid가 변경될 때마다 호출

  return (
    <>
      <div className="flex items-center m-10">
        <RotatedCard image={card.image} style={{ width: '157.71px', height: '251.98px' }} />
        <div className="flex flex-col gap-8">
          <div className="flex items-center">
            <CardsGage
              color={fulfilledColor}
              amount={benefitAmount}
              total={card.benefitLimit}
              margin="ml-28"
            />
            <CardLetter
              color="#F79042"
              label="받은 혜택"
              amount={benefitAmount}
              total={card.benefitLimit}
              fulfilledColor={fulfilledColor}
              fulfilled={isFulfilled}
              className="ml-8"
            />
            <div className="ml-3 text-xl"> | 전월 실적 :</div>
            <div
              className={`flex items-center ml-3 text-xl ${isFulfilled ? 'text-[#70a6e8]' : 'text-[#bfbdbd]'}`}
            >
              {isFulfilled ? '충족' : '미충족'}
            </div>
          </div>

          <div className="flex items-center">
            <CardsGage color="#70a6e8" amount={useAmount} total={card.performance} margin="ml-28" />
            <CardLetter
              color="#70a6e8"
              label="채운 실적"
              amount={useAmount}
              total={card.performance}
              className="ml-8"
            />
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
  uid: PropTypes.number,
};

export default UserMainComponent;
