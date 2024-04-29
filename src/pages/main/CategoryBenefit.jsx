import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';
import RankIcon from '../../utils/rankIcon';
const CategoryBenefit = ({ categoryName, benefitAmount, rank }) => {
  return rank == 4? (
    <div className="flex py-1 space-x-2">
      그 외 카테고리 {benefitAmount.toLocaleString()}
      <span className="ml-2">원</span>
    </div>
  ) : (
    categoryName != "기타" && //N등: 기타 0원 방지
    <div className="flex py-1 space-x-2">
      <div>{RankIcon[rank]}</div>
      <div>
        <GetCategoryIcon categoryName={categoryName} />
      </div>
      <div>{categoryName}</div>

      <div>{benefitAmount.toLocaleString()}</div>
      <div>원</div>
    </div>
  );
};

CategoryBenefit.propTypes = {
  categoryName: PropTypes.string.isRequired,
  benefitAmount: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default CategoryBenefit;
