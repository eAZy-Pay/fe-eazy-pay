import closeIcon from '../../assets/closeIcon.png';
import PropTypes from 'prop-types';
const QnaDetail = ({ onClose }) => {
  const onDelete = () => {};
  const onEdit = () => {};
  const title = '제목';
  const content = '내용ㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㄴㅇㅇㅇㅇㄹㅇ내ㅓ레ㅐㅁㄴ레ㅐㅁㅇ';
  const writer = '김이지';
  const date = '2024-01-01';
  const answer = '네, 알려드렸습니다.';
  const is_answered = true;
  return (
    <>
      <div className="bg-white rounded-md shadow-md p-4 mb-4 relative">
        <img
          src={closeIcon}
          alt="Close"
          className="absolute top-2 right-2 cursor-pointer"
          onClick={onClose}
        />
        <div className="mx-[5rem]">
          <div className="mt-[5rem] flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold mr-3">Q.</h2>
            <h2 className="text-2xl font-bold mr-auto">{title}</h2>
            {is_answered ? (
              <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-md">
                답변 완료
              </span>
            ) : (
              <span className="px-2 py-1 bg-red-500 text-white text-sm rounded-md">답변 대기</span>
            )}
          </div>
          <div className="flex justify-between">
            <p className="text-gray-600 mb-4 mx-4 mr-auto">작성자: {writer}</p>
            <p className="text-gray-600 mb-4 mr-auto">작성 시간: {date}</p>
          </div>

          <hr></hr>

          <p className="text-gray-700 mb-4 p-5">{content}</p>
          {/*작성자 본인이면?*/}
          <div className="flex justify-between">
            <button
              onClick={onDelete}
              className="ml-auto bg-red-500 text-white px-4 py-2 rounded-md mr-2"
            >
              삭제
            </button>
            <button onClick={onEdit} className="bg-blue-500 text-white px-4 py-2 rounded-md">
              수정
            </button>
          </div>

          <hr className="my-3"></hr>
          <div>
            <div className="p-7 bg-[#f2f6fc] rounded-lg drop-shadow-sm ">
              <div className="text-lg my-4">{answer}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
QnaDetail.propTypes = {
  onClose: PropTypes.function,
};
export default QnaDetail;
