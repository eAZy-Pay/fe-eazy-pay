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
      <div className="flex justify-between items-center py-1 space-x-2 text-xl w-full">
        <div className="flex items-center justify-center">
          <div className="w-[2.5rem] text-4xl text-center">{RankIcon[rank]}</div>
          <div className="flex justify-center items-center w-[12rem]">
            <GetCategoryIcon categoryName={categoryName} />
            {categoryName}
          </div>
        </div>
        <div className="text-right">{benefitAmount.toLocaleString() + '원'}</div>
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
