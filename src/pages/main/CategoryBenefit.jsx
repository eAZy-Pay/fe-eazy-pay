import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';
import RankIcon from '../../utils/rankIcon';
const CategoryBenefit = ({ categoryName, benefitAmount, rank }) => {
  return (
    <div className="flex py-1 space-x-2">
      <div>{RankIcon[rank]}</div>
      <div>
        <GetCategoryIcon categoryName={categoryName} />
      </div>
      <div>{categoryName}</div>
      <div className="text-sm self-end">에서</div>
      <div>{benefitAmount}</div>
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
