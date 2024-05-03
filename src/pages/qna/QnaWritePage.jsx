import { useState, useEffect } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import { getQna, putQna, postQna } from '../../apis/QnaAPI';
import { getUserSession } from '../../utils/authUtils';
const QnaWritePage = () => {
  const [qna, setQna] = useState();
  const user = getUserSession();

  const submitHandler = (e) => {
    e.preventDefault(); // submit 새로고침 막기
    if (qna.uid) {
      // 수정
      putQna(qna);
    } else {
      // 등록
      qna.userId = user.uid;
      postQna(qna);
    }
    window.location.href = '/qna';
  };

  const cancleHandler = () => {
    confirm('작성을 취소하시겠습니까?\n작성중인 내용은 저장되지 않습니다.')
      ? (window.location.href = '/qna')
      : 0;
  };

  useEffect(() => {
    if (user) {
      const urlParams = new URLSearchParams(window.location.search);
      const uid = urlParams.get('uid');
      if (uid) {
        getQna(uid).then((res) => {
          if (user.uid == res.userId) {
            // 작성자와 현재 사용자가 일치하는 경우에만 기존 내용 수정
            setQna(res);
          } else {
            alert('작성자만 수정할 수 있습니다.');
            window.location.href = '/qna';
          }
        });
        // uid를 사용하여 해당 게시글 정보를 서버에서 가져와서 제목과 내용을 설정
        // 이 부분은 서버 요청과 응답을 처리하는 코드를 구현해야 합니다.
        // 받아온 게시글 정보를 사용하여 제목과 내용을 설정
      }
    } else {
      alert('작성자만 수정할 수 있습니다.');
      window.location.href = '/qna';
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <DefaultLayout>
        <h2 className="my-[4rem] text-3xl font-extrabold">문의글 등록</h2>
        <div className="mx-[4rem] font-bold">
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label htmlFor="title" className="text-2xl font-bold block text-gray-700 mb-2">
                제목
              </label>
              <input
                type="text"
                id="title"
                className="text-2xl font-bold w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="제목을 입력하세요"
                value={qna ? qna.title : ''}
                onChange={(e) => {
                  setQna((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }));
                }}
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="content" className="text-2xl font-bold block text-gray-700 mb-2">
                내용
              </label>
              <textarea
                id="content"
                className="text-xl font-bold w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="6"
                placeholder="내용을 입력하세요"
                value={qna ? qna.content : ''}
                onChange={(e) =>
                  setQna((prev) => ({
                    ...prev,
                    content: e.target.value,
                  }))
                }
                required
              ></textarea>
            </div>
            <div className="text-right">
              <button
                onClick={cancleHandler}
                className="mx-1 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none focus:bg-red-600"
              >
                취소
              </button>
              <button
                onClick={submitHandler}
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                등록
              </button>
            </div>
          </form>
        </div>
      </DefaultLayout>
    </>
  );
};

export default QnaWritePage;
