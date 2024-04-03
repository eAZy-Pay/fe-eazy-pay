import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';

const CardRecommendation = ({ data, dummyCards, handleLegendClick, checkedCategoryIndex }) => {
  const makeRecommendation = () => {
    let categoryIndex = checkedCategoryIndex;
    if (checkedCategoryIndex < 0 || checkedCategoryIndex === undefined) {
      categoryIndex = 0;
    }

    const recommendationGroups = [];
    const cards = dummyCards[categoryIndex]?.cards || [];
    for (let i = 0; i < cards.length; i += 3) {
      const group = cards.slice(i, i + 3);
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
    if (index === checkedCategoryIndex) {
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
  dummyCards: PropTypes.arrayOf(
    PropTypes.shape({
      cards: PropTypes.array.isRequired,
    })
  ).isRequired,
  handleLegendClick: PropTypes.func.isRequired,
  checkedCategoryIndex: PropTypes.number.isRequired,
};

export default CardRecommendation;
