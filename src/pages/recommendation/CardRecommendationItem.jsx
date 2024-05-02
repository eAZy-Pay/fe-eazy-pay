import CreditCard from '../../components/card/CreditCard';
import PropTypes from 'prop-types';

const CardRecommendationItem = ({
  cardWithBenefit,
  index,
  userTop3UseAmountCardList,
  userTop3CategoryUseAmountList,
}) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-2">
        {userTop3UseAmountCardList.length > 0 && userTop3CategoryUseAmountList.length > 0 ? (
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">
              최근 3개월간 {userTop3CategoryUseAmountList[index].categoryName}에서
            </p>
            <p className="text-2xl font-bold">
              {userTop3CategoryUseAmountList[index].useAmount.toLocaleString()}원을 사용하셨습니다.
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center">
            <p className="text-2xl font-bold">우리카드 사용자들이</p>
            <p className="text-2xl font-bold">
              {userTop3CategoryUseAmountList[index]?.categoryName}에서 많이 사용하는
            </p>
          </div>
        )}
        <CreditCard card={cardWithBenefit.card} showInfo={false} />
      </div>
    </>
  );
};

CardRecommendationItem.propTypes = {
  cardWithBenefit: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  userTop3UseAmountCardList: PropTypes.array.isRequired,
  userTop3CategoryUseAmountList: PropTypes.array.isRequired,
};

export default CardRecommendationItem;
