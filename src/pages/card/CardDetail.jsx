import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';
import GetCategoryIcon from '../../utils/GetCategoryIcon';

const CardDetail = ({ card, benefitList }) => {
  const makeBenefitRow = (categoryName, benefitRate, index) => (
    <div className="flex w-full my-1" key={index}>
      <div className="flex justify-between items-center w-full text-3xl font-semibold">
        <div className="flex items-center">
          <GetCategoryIcon categoryName={categoryName} />
          <div className="mx-2 w-40 text-center">{categoryName}</div>
          <div className="mx-2">{`카테고리에서`}</div>
          <div className="mx-2 w-16 text-center">{`${benefitRate}%`}</div>
          <div className="font-semibold">{`할인`}</div>
        </div>
      </div>
    </div>
  );

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
              {isAllCategory
                ? makeBenefitRow('모든', benefitList[0].benefitRate, 0)
                : benefitList.map((benefit, index) =>
                    makeBenefitRow(benefit.categoryName, benefit.benefitRate, index)
                  )}
            </div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
            type="button"
            onClick={() => window.open(`/card-applicant/${card.uid}`, '_blank')}
          >
            카드 신청
          </button>
        </div>
      </div>
    </div>
  );
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
};

export default CardDetail;
