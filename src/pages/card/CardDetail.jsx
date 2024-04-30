import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';
import BenefitRow from './BenefitRow';

const CardDetail = ({ card, benefitList, showApplyButton }) => {
  // 모든 카테고리에서 적립 가능한 카드인지 확인
  const isAllCategory =
    benefitList.length > 8 &&
    benefitList.every((benefit) => benefit.benefitRate === benefitList[0].benefitRate);

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-full">
        <CreditCard card={card} showName={false} showInfo={false} useLink={false} sclae={130} />
        <div className="flex flex-col p-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold">{card.name}</h1>
            <div className="w-full text-2xl font-medium">{card.info}</div>
            <div className="flex flex-col items-baseline mt-4">
              {isAllCategory ? (
                <BenefitRow
                  key="all"
                  categoryName="모든"
                  benefitRate={benefitList[0].benefitRate}
                  index={0}
                />
              ) : (
                benefitList.map((benefit, index) => (
                  <BenefitRow
                    key={index}
                    categoryName={benefit.categoryName.toString()}
                    benefitRate={benefit.benefitRate}
                    index={index}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
      {showApplyButton && (
        <div className="flex space-x-4 mb-6 text-sm font-medium">
          <div className="flex-auto flex space-x-4">
            <button
              className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
              type="button"
              onClick={() => window.location.replace(`/card-applicant/${card.uid}`)}
            >
              카드 신청
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

CardDetail.defaultProps = {
  showApplyButton: true,
};

CardDetail.propTypes = {
  card: PropTypes.shape({
    uid: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    annualFee: PropTypes.number.isRequired,
    performance: PropTypes.number.isRequired,
    benefitLimit: PropTypes.number.isRequired,
    info: PropTypes.string.isRequired,
  }).isRequired,
  benefitList: PropTypes.arrayOf(
    PropTypes.shape({
      categoryId: PropTypes.number.isRequired,
      categoryName: PropTypes.string.isRequired,
      benefitRate: PropTypes.number.isRequired,
    })
  ).isRequired,
  showApplyButton: PropTypes.bool,
};

export default CardDetail;
