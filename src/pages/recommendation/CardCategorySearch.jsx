import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';

const CardCategorySearch = ({
  categories,
  categoryCards,
  handleLegendClick,
  checkedIndex,
  maxColumn = 3,
  maxRow = 2,
  showInfo = true,
}) => {
  const makeRecommendation = () => {
    const recommendationGroups = [];
    // 추천 카드 최대 maxRow * maxColumn 개수만큼만 보여줌
    const categoryCardsLength =
      categoryCards.length > maxColumn * maxRow ? maxColumn * maxRow : categoryCards?.length;
    for (let i = 0; i < categoryCardsLength; i += maxColumn) {
      const group = categoryCards.slice(i, i + maxColumn);
      recommendationGroups.push(
        <div className="flex justify-center gap-x-10 mt-8" key={i}>
          {group.map((card, index) => (
            <CreditCard key={index} card={card} showInfo={showInfo} />
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
        {categories.map((item, index) => makeSelectCategory(index, item.categoryName))}
      </div>
      {makeRecommendation()}
    </>
  );
};

CardCategorySearch.propTypes = {
  categories: PropTypes.array.isRequired,
  categoryCards: PropTypes.array.isRequired,
  handleLegendClick: PropTypes.func.isRequired,
  checkedIndex: PropTypes.number.isRequired,
  maxColumn: PropTypes.number,
  maxRow: PropTypes.number,
  showInfo: PropTypes.bool,
};

export default CardCategorySearch;
