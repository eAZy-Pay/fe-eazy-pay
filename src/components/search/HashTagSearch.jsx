import PropTypes from 'prop-types';

/**

 * 해시태그 검색 Component
 *
 * @param {Array} tags - 해시태그 목록
 * @param {number} checkedIndex - 선택된 해시태그 인덱스, checkedIndex에 따라 검색 결과가 달라짐
 * @param {function} setCheckedIndex - 선택된 해시태그 인덱스를 변경하는 함수
 *
 * @returns {JSX.Element} 해시태그 검색 Component
 */

const HashTagSearch = ({ tags, checkedIndex, setCheckedIndex }) => {
  const makeSelectHashTag = (index, tag) => {
    const handleClick = () => setCheckedIndex(index);
    const isSelected = index === checkedIndex;
    const className = isSelected ? '' : 'text-gray-300 hover:text-gray-500';

    return (
      <div key={tag} onClick={handleClick} className={`p-2 cursor-pointer text-2xl ${className}`}>
        #{tag}
      </div>
    );
  };

  return (
    <div className="flex gap-4 font-bold text-left mt-8 mb-4 sm:text-lg md:text-xl lg:text-2xl">
      {tags.map((item, index) => makeSelectHashTag(index, item?.categoryName || item?.name))}
    </div>
  );
};

HashTagSearch.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  checkedIndex: PropTypes.number.isRequired,
  setCheckedIndex: PropTypes.func.isRequired,
};

export default HashTagSearch;
