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
    const textStyle = isSelected ? {} : { color: '#e2e2e2' };

    return (
      <div key={tag} onClick={handleClick} className="cursor-pointer" style={textStyle}>
        #{tag}
      </div>
    );
  };

  return (
    <div className="flex gap-4 text-2xl font-bold text-left mt-8 mb-4">
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
