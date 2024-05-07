import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from './CardsGage';
import CardLetter from './CardLetter';
import PropTypes from 'prop-types';
import { useFulfillment } from '../../hooks/useFulfillment.js';

const UserMainComponent = ({ benefitAmount, useAmount, card, uid }) => {
  /* 
  card.image // 카드 이미지
  benefitAmount // 받은 혜택
  card.benefitLimit // 총 혜택
  useAmount // 사용 금액
  card.performance // 실적 기준
*/
  const { isFulfilled, fulfilledColor } = useFulfillment(uid);

  return (
    <>
      <div className="lg:flex items-center sm:m-10 ">
        <div className="flex">
          <div className="w-[6rem] sm:hidden"></div>
          <RotatedCard
            image={card.image}
            style={{
              width: '157.71px',
              height: '251.98px',
            }}
          />
        </div>
        <div className="flex flex-col sm:gap-8">
          <div className="sm:flex items-center sm:mx-0 mx-auto">
            <CardsGage
              color="#F79042"
              fulfilledColor={fulfilledColor}
              amount={benefitAmount}
              total={card.benefitLimit}
              margin="sm:ml-28"
            />
            <div className="flex mx-auto items-center">
              <CardLetter
                color="#F79042"
                label="받은 혜택"
                amount={benefitAmount}
                total={card.benefitLimit}
                fulfilledColor={fulfilledColor}
                fulfilled={isFulfilled}
                className="sm:ml-8 ml-[4rem]"
              />
              <div className="flex">
                <div className="sm:ml-3 sm:text-xl text-sm"> | 전월 실적 :</div>
                <div
                  className={`flex items-center ml-3 sm:text-xl text-sm ${isFulfilled ? 'text-[#007AFF]' : 'text-[#bfbdbd]'}`}
                >
                  {isFulfilled ? '충족' : '미충족'}
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex items-center sm:mx-0 mx-auto">
            <CardsGage
              color="#007AFF"
              amount={useAmount}
              total={card.performance}
              margin="sm:ml-28"
            />
            <CardLetter
              color="#007AFF"
              label="채운 실적"
              amount={useAmount}
              total={card.performance}
              className="sm:ml-8 sm:mx-0 mx-auto"
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
