import DefaultLayout from '../../components/layout/DefaultLayout';
import Banner from '../../components/Banner';
import WriteImg from '../../assets/writeImg.png';
import { useState, useEffect } from 'react';
import QnaBlock from './QnaBlock';
import QnaDetail from './QnaDetail';

const QnaPage = () => {
  const [qnas, setQnas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    setQnas([
      {
        uid: 1,
        user_id: 56,
        date: '2024-04-22',
        title: '제목',
        content: '내용dddddddddddddddddddd ndddd\r\nddddddddㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇdd',
        is_answered: true,
        writer: '김이지',
      },
      {
        uid: 2,
        user_id: 56,
        date: '2024-04-22',
        title: '제목2',
        content:
          '내용2ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ',
        is_answered: false,
        writer: '김이지2',
      },
    ]);
  }, []);

  return (
    <DefaultLayout>
      {isModalOpen && <QnaDetail onClose={closeModal} />}
      <div className="flex">
        <div className="mt-[5rem] w-full text-3xl font-extrabold mb-4">QnA</div>
        <div
          onClick={() => {
            window.location.href = 'qna-write';
          }}
          className="mt-[5rem] w-[15rem] cursor-pointer mx-auto py-3 px-auto rounded-[20px] bg-[#1d92e9] text-2xl text-center self-bottom text-white"
        >
          QnA작성하기
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-full py-4">
          {Object.keys(qnas).length > 0 ? (
            qnas.map((qna, index) => (
              <div onClick={openModal} key={index} className="break-inside-avoid my-4">
                <QnaBlock {...qna} />
              </div>
            ))
          ) : (
            <div>불러온 정보가 없습니다.</div>
          )}
        </div>
      </div>
      <Banner
        to={'/qna-write'}
        title="비슷한 질문이 없나요?"
        description="직접 질문하기"
        imageSrc={WriteImg}
      ></Banner>
    </DefaultLayout>
  );
};

export default QnaPage;
