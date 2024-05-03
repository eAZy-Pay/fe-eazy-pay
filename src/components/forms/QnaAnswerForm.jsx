import { PropTypes } from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import { ModalContext } from '../../App';
import { Button } from '../Button';
import useQnaById from '../../hooks/useQnaById';
import { putQna } from '../../apis/QnaAPI';

const QnaAnswerForm = ({ id, fetchQnas }) => {
  const [qna, setQna] = useState({});

  const useQna = useQnaById({ uid: id });

  useEffect(() => {
    setQna(useQna);
  }, [useQna]);

  const title = qna?.title;
  const content = qna?.content;

  const { setModal } = useContext(ModalContext);

  const handleSubmit = () => {
    if (qna.answer.trim() === '') {
      alert('답변을 입력해주세요.');
      return;
    }

    // 답변 업데이트 API 호출
    putQna(qna).then((res) => {
      if (res.errorCode) {
        alert(res.message);
        fetchQnas();
      } else {
        alert(res.message);
        setModal(false);
        fetchQnas();
      }
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-4/6">
        <div className="flex flex-col gap-5 w-4/5">
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] w-24 font-bold">제목</label>
            <span className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4">
              {title}
            </span>
          </div>
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] w-24 font-bold">내용</label>
            <span className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4">
              {content}
            </span>
          </div>
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] font-bold w-24">답변</label>
            <textarea
              className="w-3/4 h-34 font-normal rounded-lg border border-[#babdc0] ml-4 resize-none focus:outline-none focus:ring-1 focus:ring-[#4c43ff]"
              value={qna ? qna.answer : ''}
              onChange={(e) => {
                setQna((prev) => ({
                  ...prev,
                  answer: e.target.value,
                }));
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-4/5 h-1/6 mb-5">
        <Button buttonText="수정" onClick={handleSubmit} width="w-48" height="h-12" />
      </div>
    </>
  );
};

// props validation
QnaAnswerForm.propTypes = {
  id: PropTypes.number.isRequired,
  fetchQnas: PropTypes.func.isRequired,
};

export default QnaAnswerForm;
