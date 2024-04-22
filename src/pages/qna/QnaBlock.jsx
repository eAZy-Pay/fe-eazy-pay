import { PropTypes } from 'prop-types';

const QnaBlock = ({ title, date, content, is_answered, answer }) => {
  return (
    <div className="p-7 bg-[#f2f6fc] rounded-lg drop-shadow-sm ">
      <div className="text-xl">{title}</div>
      <div className="text-lg my-4">{date}</div>
      <div className="text-lg my-4">{content}</div>
      <div className="text-lg my-4">{is_answered}</div>
      <div className="text-lg my-4">{answer}</div>
    </div>
  );
};

QnaBlock.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  is_answered: PropTypes.boolean,
  answer: PropTypes.string,
};

export default QnaBlock;
