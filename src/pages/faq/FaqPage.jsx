import DefaultLayout from '../../components/layout/DefaultLayout';
import FaqBlock from './FaqBlock';
import Banner from '../../components/Banner';
import WriteImg from '../../assets/writeImg.png';
import { useState, useEffect } from 'react';
import { getFaqData } from '../../apis/FaqAPI';

const FaqPage = () => {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    getFaqData().then((data) => {
      setFaqs(data);
    });
  }, []);

  return (
    <DefaultLayout>
      <div className="mt-[3rem] w-full text-4xl font-extrabold">eAZy가 도와드릴게요!</div>
      <div className="flex">
        <div className="mt-[5rem] w-full text-3xl font-extrabold mb-4">자주 묻는 질문</div>
      </div>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-2 gap-[4rem] mx-3 py-4">
          {/*Object.keys(faqs).length 사용하여 faqs가 비어 있는 객체인지 확인 */}
          {Object.keys(faqs).length > 0 ? (
            faqs.map((faq, index) => (
              <div key={index} className="break-inside-avoid my-4">
                {/* break-inside-avoid: 해당 요소가 컬럼 사이에서 나눠지는 것을 방지 */}
                <FaqBlock {...faq} />
              </div>
            ))
          ) : (
            <div>불러온 정보가 없습니다.</div>
          )}
        </div>
      </div>
      <div
        onClick={() => {
          window.location.href = 'qna';
        }}
        className="ml-auto w-[12rem] h-[3.5rem] cursor-pointer py-3 px-auto rounded-xl bg-blue-500 text-2xl text-center self-bottom text-white"
      >
        질문 더 보기
      </div>

      <hr className="bg-gray-300 w-full h-0.4 shadow mt-[3rem] mb-[6rem]"></hr>
      <Banner
        to={'/qna-write'}
        title="원하시는 답변이 없나요?"
        description="질문하러 가기"
        imageSrc={WriteImg}
      ></Banner>
    </DefaultLayout>
  );
};

export default FaqPage;
