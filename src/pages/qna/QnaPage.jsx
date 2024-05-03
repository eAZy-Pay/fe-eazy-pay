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
    getQna({
      page: 0,
      size: 1000,
    }).then((res) => {
      console.log(res);
      setQnas(res.content);
    });
  }, []);

  return (
    <>
      <DefaultLayout>
        {isModalOpen && <QnaDetail onClose={closeModal} setQnas={setQnas} {...selectedQna} />}

        <div className="flex">
          <div className="mt-[3rem] mb-[3rem] flex w-full text-4xl font-extrabold items-end">
            QnA
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
                  className="break-inside-avoid my-4 "
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
          title="원하시는 답변이 없나요?"
          description="질문하러 가기"
          imageSrc={WriteImg}
        ></Banner>
      </DefaultLayout>
    </>
  );
};

export default QnaPage;
