import { PropTypes } from 'prop-types';
import answeredIcon from '../../assets/answeredIcon.png';
import notAnsweredIcon from '../../assets/notAnsweredIcon.png';
const QnaBlock = ({ title, date, content, is_answered, writer }) => {
  return (
    <div className="p-7 bg-[#f2f6fc] rounded-lg drop-shadow-sm ">
      <div className="text-2xl">{title}</div>
      <div className="text-lg my-4 mx-3
        flex-grow overflow-hidden text-ellipsis whitespace-nowrap
      ">{content}</div>

      <div className='flex mx-3 flex justify-between'>
      <div className="text-lg my-4 mx-2">{date}</div>
      <div className="text-lg my-4">{writer}</div>
    
            <div className='flex ml-auto'>
                {is_answered ? <><div className='self-center mx-1 text-nowrap'>답변 완료</div> <img src={answeredIcon} alt="답변완료" /> </> : <><div className='self-center mx-1 text-nowrap'>답변 없음</div> <img src={notAnsweredIcon} alt="답변미완료" /> </> }
            </div>
        
      </div>

    </div>
  );
};

QnaBlock.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string,
  title: PropTypes.string.isRequired,
  is_answered: PropTypes.boolean,
  writer: PropTypes.string.isRequired,
  answer: PropTypes.string,
};

export default QnaBlock;
