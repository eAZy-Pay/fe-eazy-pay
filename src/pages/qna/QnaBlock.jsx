import { PropTypes } from 'prop-types';
import answeredIcon from '../../assets/answeredIcon.png';
import notAnsweredIcon from '../../assets/notAnsweredIcon.png';
const QnaBlock = ({ title, date, content, answered, userName }) => {
  const writer = userName;
  return (
    <div className="p-9 rounded-lg transition-all duration-300 border-[1px] hover:bg-gray-100 ">
      <div className="flex text-2xl font-extrabold">
        <div className="mr-2 text-blue-500">Q.</div>
        <div className="">{title}</div>
      </div>

      <hr className=" bg-gray-300 w-full h-0.8 my-4"></hr>
      <div className="mx-3">
        <div
          className="text-xl py-1
        flex-grow overflow-hidden text-ellipsis whitespace-nowrap
        "
        >
          {content}
        </div>

        <div className="flex justify-between items-end text-slate-500">
          <div className="text-md ">{date}</div>
          <div className="text-md ml-2">{writer}</div>

          <div className="flex ml-auto text-md">
            {isAnswered ? (
              <>
                <div className="p-2 bg-green-500 text-white text-sm rounded-md self-center">
                  답변 완료
                </div>{' '}
                <img src={answeredIcon} alt="답변완료" />{' '}
              </>
            ) : (
              <>
                <div className="p-2 bg-slate-300 text-white text-sm rounded-md self-center">
                  답변 대기중
                </div>{' '}
                <img src={notAnsweredIcon} alt="답변 대기중" />{' '}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

QnaBlock.propTypes = {
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  answered: PropTypes.bool.isRequired,
  userId: PropTypes.number,
  userName: PropTypes.string.isRequired,
  answer: PropTypes.string,
};

export default QnaBlock;
