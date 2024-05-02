import closeIcon from '../../assets/closeIcon.png';
import PropTypes from 'prop-types';
import { getUserSession } from '../../utils/authUtils';
import { deleteQna } from '../../apis/QnaAPI';
const QnaDetail = ({
  onClose,
  uid,
  title,
  date,
  content,
  isAnswered,
  userId,
  userName,
  answer,
}) => {
  const onDelete = () => {
    if (confirm('정말로 삭제하시겠습니까?')) {
      deleteQna(uid);
      window.location.reload(); // 페이지 새로고침
    }
  };
  const onEdit = () => {
    //uid 가지고 writePage 컴포넌트에서 수정
    //writePage에서 uid로 해당 uid의 게시글을 조회하고 내용에 따라 writePage의 text가 채워짐
    window.location.href = `/qna-write?uid=${uid}`;
  };

  const user = getUserSession();

  return (
    <>
      <div className="fixed z-50 inset-0 flex justify-center items-center bg-black bg-opacity-50 backdrop-blur-md">
        <div className="w-[50rem] py-8 bg-white rounded-md shadow-md p-4 mb-4 relative">
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
              {isAnswered ? (
                <span className="px-2 py-1 bg-green-500 text-white text-sm rounded-md">
                  답변 완료
                </span>
              ) : (
                <span className="px-2 py-1 bg-slate-300 text-white text-sm rounded-md">
                  답변 대기중
                </span>
              )}
            </div>
            <div className="flex justify-between">
              <p className="text-gray-600 mb-4 mx-4 mr-auto">작성자: {userName}</p>
              <p className="text-gray-600 mb-4 mr-auto">작성 시간: {date}</p>
            </div>

            <hr></hr>

            <p className="text-gray-700 my-4 p-5 text-xl">{content}</p>
            {user &&
              userId == user.uid && ( //로그인 후 본인이어야 수정 및 삭제
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
              )}
            <hr className="my-3"></hr>
            <div>
              <div className="p-7 bg-slate-100 rounded-lg drop-shadow-sm ">
                <div className='mr-2 font-bold text-blue-700 text-xl'>A.</div>
                <div className="text-lg my-4">{answer}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
QnaDetail.propTypes = {
  uid: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isAnswered: PropTypes.bool.isRequired,
  userId: PropTypes.number.isRequired,
  userName: PropTypes.string.isRequired,
  answer: PropTypes.string,
};
export default QnaDetail;
