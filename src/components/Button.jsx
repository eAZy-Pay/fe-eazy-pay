import PropTypes from 'prop-types';

export const Button = ({ onClick, buttonText, isDeleteButton, width, height }) => {
  const deleteButtonStyle = 'bg-[#ffdddf] text-[#e44545] hover:shadow-lg';
  const createButtonStyle = 'bg-[#d0e6ff] text-[#2563eb] hover:shadow-lg';
  return (
    <button
      className={`${width + ' ' + height} rounded-md font-extrabold text-sm ${
        isDeleteButton ? deleteButtonStyle : createButtonStyle
      }`}
      onClick={onClick}
    >
      {buttonText}
    </button>
  );
};

Button.defaultProps = {
  isDeleteButton: false,
  width: 'w-24',
  height: 'h-9',
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  isDeleteButton: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};
