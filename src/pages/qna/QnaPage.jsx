import DefaultLayout from '../../components/layout/DefaultLayout';
import Banner from '../../components/Banner';
import WriteImg from '../../assets/writeImg.png';
import { useState, useEffect } from 'react';
import QnaBlock from './QnaBlock';
import QnaDetail from './QnaDetail';
import { getQna } from '../../apis/QnaAPI';
const QnaPage = () => {
  const [qnas, setQnas] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = (qna) => {
    setSelectedQna(qna); // 선택된 QnaBlock의 정보를 상태에 설정
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedQna(null);
    setIsModalOpen(false);
  };
  const [selectedQna, setSelectedQna] = useState(null); // 선택된 QnaBlock의 정보를 유지하기 위한 상태

  useEffect(() => {
    getQna().then((res) => {
      setQnas(res);
    });
  }, []);

  return (
    <DefaultLayout>
      {isModalOpen && <QnaDetail onClose={closeModal} setQnas={setQnas} {...selectedQna} />}
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
              <div
                onClick={() => {
                  openModal(qna);
                  setSelectedQna(qna);
                }}
                key={index}
                className="break-inside-avoid my-4"
              >
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
