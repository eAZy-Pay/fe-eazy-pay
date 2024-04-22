import DefaultLayout from '../../components/layout/DefaultLayout';
import Banner from '../../components/Banner';
import WriteImg from '../../assets/writeImg.png';
import { useState, useEffect } from 'react';
import QnaBlock from './QnaBlock';
const QnaPage = () => {
  const [qnas, setQnas] = useState([]);

  useEffect(() => {
    setQnas([
      {
        uid: 1,
        user_id: 56,
        date: '2024-04-22',
        title: '제목',
        content: '내용',
        is_answered: true,
        answer: '네, 답변해드렸습니다~',
      },
      {
        uid: 2,
        user_id: 56,
        date: '2024-04-22',
        title: '제목2',
        content: '내용2',
        is_answered: false,
        answer: '네, 답변해드렸습니다~',
      },
    ]);
  }, []);

  return (
    <DefaultLayout>
      <div className="w-full text-3xl font-extrabold mb-4">FAQ</div>
      <div className="w-full text-2xl font-extrabold mb-4">eAZy가 도와드릴게요!</div>
      <div className="flex justify-center">
        <div className="w-full py-4">
          {Object.keys(qnas).length > 0 ? (
            qnas.map((qna, index) => (
              <div key={index} className="break-inside-avoid my-4">
                <QnaBlock {...qna} />
              </div>
            ))
          ) : (
            <div>불러온 정보가 없습니다.</div>
          )}
        </div>
      </div>
      <Banner
        to={'/qna-detail'}
        title="원하는 답변이 없나요?"
        description="질문하러 가기"
        imageSrc={WriteImg}
      ></Banner>
    </DefaultLayout>
  );
};

export default QnaPage;
