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
      <div className="w-full text-3xl font-extrabold mb-4">FAQ</div>
      <div className="w-full text-2xl font-extrabold mb-4">eAZy가 도와드릴게요!</div>
      <div className="flex justify-center">
        <div className="w-full grid grid-cols-2 gap-4 py-4">
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
      <Banner
        to={'/qna'}
        title="원하는 답변이 없나요?"
        description="질문하러 가기"
        imageSrc={WriteImg}
      ></Banner>
    </DefaultLayout>
  );
};

export default FaqPage;
