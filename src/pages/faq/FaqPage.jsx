import DefaultLayout from '../../components/layout/DefaultLayout';
import FaqBlock from './FaqBlock';
import Banner from '../../components/Banner';
import WriteImg from '../../assets/writeImg.png';

const FaqPage = () => {
  const faqs = [
    {
      title: '질문1',
      answer: '답변111111',
    },
    {
      title: '질문2',
      answer:
        '답변22222lkhuigbibvyuvbㅇ랑러ㅣㅏㅇㄹㅇㄴㄹㅇㄴㄹㅇㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㅇㄴㄹㄴㅇ내라ㅔㅐㅇ나레ㅐㅏㅊ,ㄴ애ㅔㅏ레ㅐㄴ알ㅊ,ㅔㄴ앵랑라ㅔㅇㄴ라ㅔ앤라ㅔㅐㅇ나레ㅐㄴ아uyhvuyvuyhvuvouyyyyyyyyyyigiugiuggugiuyvbyutft2',
    },
    {
      title: '이지카드의 결제 알고리즘은 어떻게 되나요?',
      answer:
        '매번 결제 시 보유 카드 중 최대의 혜택을 볼 수 있는 카드를 선택하도록 되어있습니다.',
    },
    {
      title: '질문3',
      answer: '답변222222',
    },
    {
      title: '질문4',
      answer: '답변222222',
    },
  ];

  return (
    <DefaultLayout>
      <div className="w-full text-3xl font-extrabold mb-4">FAQ</div>
      <div className="w-full text-2xl font-extrabold mb-4">eAZy가 도와드릴게요!</div>
      <div className="flex justify-center">
        <div className="w-full columns-2 py-4">
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
