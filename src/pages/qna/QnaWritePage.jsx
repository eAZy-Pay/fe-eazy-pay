import { useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
const QnaWritePage = () => {
  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  const submitHandler = () => {};
  const cancleHandler = () => {
    confirm('작성을 취소하시겠습니까?\n작성중인 내용은 저장되지 않습니다.')
      ? (window.location.href = '/qna')
      : 0;
  };
  return (
    <>
      <DefaultLayout>
        <div className="max-w-xl mx-auto mt-8">
          <h2 className="text-2xl font-bold mb-4">게시글 등록</h2>
          <form onSubmit={submitHandler}>
            <div className="mb-4">
              <label
                htmlFor="title"
                className="text-2xl font-bold block text-gray-700 font-bold mb-2"
              >
                제목
              </label>
              <input
                type="text"
                id="title"
                className="text-2xl font-bold w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="content"
                className="text-2xl font-bold block text-gray-700 font-bold mb-2"
              >
                내용
              </label>
              <textarea
                id="content"
                className="text-2xl font-bold w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                rows="6"
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
