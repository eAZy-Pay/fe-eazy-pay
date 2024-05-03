import { Link } from 'react-router-dom';
import DefaultFrame from '../../components/layout/DefaultFrame';
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from '../main/CardsGage';
import CardLetter from '../main/CardLetter';
import { useFulfillment } from '../../hooks/useFulfillment';
import PropTypes from 'prop-types';

const CardItem = ({ card, num, benefitAmount, uid }) => {
  const { isFulfilled, fulfilledColor } = useFulfillment(uid);
  const lastFourDigits = num.slice(-4);
  const maskedNum = `${lastFourDigits.replace(/\d(?=\d{0}$)/, '*')}`;

  return (
    <div className="mb-6" style={{ width: '39.25rem' }}>
      <Link to={`/mypage/card-management/selected-card`} state={uid}>
        <DefaultFrame>
          <div className="flex flex-col p-4">
            <div className="flex">
              <RotatedCard image={card.image} style={{ maxWidth: '7rem', height: 'auto' }} />
              <div className="flex flex-col justify-center items-center gap-5 ml-11">
                <CardsGage
                  color="#F79042"
                  fulfilledColor={fulfilledColor}
                  amount={benefitAmount}
                  total={card.benefitLimit}
                  width="w-3/4"
                />
                <CardLetter
                  color="#F79042"
                  label="받은 혜택"
                  amount={benefitAmount}
                  total={card.benefitLimit}
                  fulfilledColor={fulfilledColor}
                  fulfilled={isFulfilled}
                />
              </div>
            </div>
            <div className="text-2xl">{card.name}</div>
            <div className="text-xl text-gray-400">카드 번호 {maskedNum}</div>
          </div>
        </DefaultFrame>
      </Link>
    </div>
  );
};

CardItem.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    benefitLimit: PropTypes.number,
  }).isRequired,
  num: PropTypes.string.isRequired,
  benefitAmount: PropTypes.number.isRequired,
  uid: PropTypes.number.isRequired,
};

export default CardItem;
