import PropTypes from 'prop-types';
import GetCategoryIcon from '../../utils/GetCategoryIcon';
import RankIcon from '../../utils/rankIcon';
const CategoryBenefit = ({ categoryName, benefitAmount, rank }) => {
  return rank == 4 ? (
    <div className="flex ml-auto py-1 space-x-2 text-right">
      그 외 카테고리 {benefitAmount.toLocaleString()}
      <span className="ml-2">원</span>
    </div>
  ) : (
    categoryName != '기타' && ( //N등: 기타 0원 방지
      <div className="flex py-1 space-x-2">
        <div className="w-[2.5rem]">{RankIcon[rank]}</div>
        <div className="w-[2.5rem]">
          <GetCategoryIcon categoryName={categoryName} />
        </div>
        <div className="w-[9rem] text-center">{categoryName}</div>

        <div className="w-[6rem] text-right">{benefitAmount.toLocaleString()}</div>
        <div>원</div>
      </div>
    )
  );
};

CategoryBenefit.propTypes = {
  categoryName: PropTypes.string.isRequired,
  benefitAmount: PropTypes.number.isRequired,
  rank: PropTypes.number.isRequired,
};

export default CategoryBenefit;
