import { Link } from 'react-router-dom';
import DefaultFrame from '../../components/layout/DefaultFrame';
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from '../main/CardsGage';
import CardLetter from '../main/CardLetter';
import { useFulfillment } from '../../hooks/useFulfillment';
import PropTypes from 'prop-types';

const CardItemForMyPage = ({ card, benefitAmount, uid }) => {
  const { isFulfilled, fulfilledColor } = useFulfillment(uid);
  return (
    <Link to={`/mypage/card-management/selected-card`} state={uid} key={uid}>
      <DefaultFrame className="flex max-w-[32rem] mx-6 mb-11">
        <RotatedCard image={card.image} style={{ maxWidth: '5.75rem', height: 'auto' }} />
        <div className="flex flex-col justify-center gap-4">
          <CardsGage
            color="#f79042"
            fulfilledColor={fulfilledColor}
            amount={benefitAmount}
            total={card.benefitLimit}
            width="w-3/4"
          />
          <CardLetter
            color="#f79042"
            label="받은 혜택"
            amount={benefitAmount}
            total={card.benefitLimit}
            fulfilledColor={fulfilledColor}
            fulfilled={isFulfilled}
          />
        </div>
      </DefaultFrame>
    </Link>
  );
};

CardItemForMyPage.propTypes = {
  card: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    benefitLimit: PropTypes.number,
  }).isRequired,
  benefitAmount: PropTypes.number.isRequired,
  uid: PropTypes.number.isRequired,
};

export default CardItemForMyPage;
