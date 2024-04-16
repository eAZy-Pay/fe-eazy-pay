import PropTypes from 'prop-types';

/**
 * 블록태그 검색 Component
 *
 * @param {Array} tags - 태그 목록
 * @param {number} checkedIndex - 선택된 태그 인덱스, checkedIndex에 따라 검색 결과가 달라짐
 * @param {function} setCheckedIndex - 선택된 태그 인덱스를 변경하는 함수
 *
 * @returns {JSX.Element} 블록태그 검색 Component
 */

const BlockTagSearch = ({ tags, checkedIndex, setCheckedIndex }) => {
  const makeSelectBlockTag = (index, tag) => {
    const handleClick = () => setCheckedIndex(index);
    const isSelected = index === checkedIndex;
    const textStyle = isSelected ? {} : { color: '#e2e2e2' };

    return (
      <div
        className="flex items-center justify-center bg-blue-100 rounded-lg p-4 cursor-pointer"
        key={tag}
        onClick={handleClick}
        style={textStyle}
      >
        <p className="text-xl text-center text-black">{tag}</p>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {tags.map((item, index) => makeSelectBlockTag(index, item?.categoryName || item?.name))}
    </div>
  );
};

BlockTagSearch.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      categoryName: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  checkedIndex: PropTypes.number.isRequired,
  setCheckedIndex: PropTypes.func.isRequired,
};

export default BlockTagSearch;
