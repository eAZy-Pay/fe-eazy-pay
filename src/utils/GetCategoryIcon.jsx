import PropTypes from 'prop-types';

const GetCategoryIcon = ({ categoryName }) => {
  const categoryIcon = {
    '생활/주거': '🏠',
    '슈퍼/마트': '🛍️',
    외식: '🍽️',
    의료: '🏥',
    패션: '🕶️',
    '숙박/여행': '🧳',
    '문화/취미': '🎨',
    자동차: '🚗',
    기타: '🛍',
    모든: '✨',
  };

  return categoryIcon[categoryName];
};

GetCategoryIcon.propTypes = {
  categoryName: PropTypes.string.isRequired,
};

export default GetCategoryIcon;
