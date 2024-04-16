import PropTypes from 'prop-types';
import CreditCard from '../../components/card/CreditCard';
/**
 * 카테고리 카드 목록을 보여주는 컴포넌트
 *
 * @param {Array} categoryCards - 카테고리 카드 목록
 * @param {number} maxColumn - 최대 열 개수
 * @param {number} maxRow - 최대 행 개수
 * @param {boolean} showInfo - 카드 정보 보여줄지 여부
 *
 * @returns {JSX.Element} 카테고리 카드 목록
 */
const CategoryCards = ({ categoryCards, maxColumn = 3, maxRow = 2, showInfo = true }) => {
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

  return <>{makeRecommendation()}</>;
};

CategoryCards.propTypes = {
  categoryCards: PropTypes.array.isRequired,
  maxColumn: PropTypes.number,
  maxRow: PropTypes.number,
  showInfo: PropTypes.bool,
};

export default CategoryCards;
