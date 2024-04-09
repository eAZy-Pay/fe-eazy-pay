import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';

const CardRecommendation = ({ data, categoryCards, handleLegendClick, checkedIndex }) => {
  const makeRecommendation = () => {
    const recommendationGroups = [];
    // 추천 카드 최대 6개까지만 보여주기
    const categoryCardsLength = categoryCards.length > 6 ? 6 : categoryCards.length;
    for (let i = 0; i < categoryCardsLength; i += 3) {
      const group = categoryCards.slice(i, i + 3);
      recommendationGroups.push(
        <div className="flex justify-center gap-x-10 mt-8" key={i}>
          {group.map((card, index) => (
            <CreditCard key={index} card={card} />
          ))}
        </div>
      );
    }
    return recommendationGroups;
  };

  const makeSelectCategory = (index, category) => {
    if (index === checkedIndex) {
      return (
        <div key={category} onClick={() => handleLegendClick(index)} className="cursor-pointer">
          {'#' + category}
        </div>
      );
    } else {
      return (
        <div
          key={category}
          className="text-[#e2e2e2] cursor-pointer"
          onClick={() => handleLegendClick(index)}
        >
          {'#' + category}
        </div>
      );
    }
  };

  return (
    <>
      <div className="flex gap-4 text-2xl font-bold text-left mt-8 mb-4">
        {data.map((item, index) => makeSelectCategory(index, item.categoryName))}
      </div>
      {makeRecommendation()}
    </>
  );
};

CardRecommendation.propTypes = {
  data: PropTypes.array.isRequired,
  categoryCards: PropTypes.array.isRequired,
  handleLegendClick: PropTypes.func.isRequired,
  checkedIndex: PropTypes.number.isRequired,
};

export default CardRecommendation;
