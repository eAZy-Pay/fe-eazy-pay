import { PropTypes } from 'prop-types';

const FaqBlock = ({ title, answer }) => {
  return (
    <div className="p-7 bg-[#f2f6fc] rounded-lg drop-shadow-sm ">
      <div className="text-xl">{title}</div>
      <div className="text-lg my-4">{answer}</div>
    </div>
  );
};

FaqBlock.propTypes = {
  title: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
};

export default FaqBlock;
