import DefaultLayout from '../../components/layout/DefaultLayout';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import useEventCategory from '../../hooks/useEventCategory';
import useHighlightedCardByEventCategoryId from '../../hooks/useHighlightedCardByEventCategoryId';
import { Link } from 'react-router-dom';
import eazy from '../../assets/eAZyCard.svg';
import OverlappedCard from '../../assets/overlappedCard.png';
import CardPerfomance from './CardPerformance';
import { useEffect, useState } from 'react';
import { getUserSession } from '../../utils/authUtils';
import { getCardsSummary } from '../../apis/CardAPI';
import DefaultFrame from '../../components/layout/DefaultFrame';
import CategoryBenefit from './CategoryBenefit';
import OverlappedCards from '../../components/card/OverlappedCards';
const MainPage = () => {
  const user = getUserSession();
  const [userId] = useState(user ? user.uid : '');
  const [userMain, setUserMain] = useState(
    {
      userName: user ? user.userName : 'OOO',
      images: [eazy],
      benefitAmount: 0,
      cards: [], //1개월 카드 혜택 실적, 카드상품정보
    },
    []
  );

  const Data = {
    categoryDatas: [
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        benefitAmount: 2000,
      },
    ],
    other: 1000,
    annualFee: 39800,
    benefitOfYear: 15000,
  };

  useEffect(() => {
    if (userId) {
      // 로그인 되어있는 경우
      getCardsSummary(userId, 1, 4).then((res) => {
        const tmp = [eazy];
        res.cards.forEach((cardObj) => {
          if (cardObj.linkEazy) {
            // linkEazy가 true인 카드만 추가
            tmp.push(cardObj.card.image);
          }
        });
        setUserMain((prev) => ({
          ...prev,
          benefitAmount: res.totalBenefitAmount,
          images: tmp,
          cards: res.cards.filter((cardObj) => cardObj.linkEazy),
        }));
      });
    } else {
      // 강제 리렌더링
    }
  }, [userId]);

  const [checkedIndex, setcheckedIndex] = useState(0);
  const eventCategories = useEventCategory();
  const highlightedCards = useHighlightedCardByEventCategoryId(eventCategories[checkedIndex]?.uid);

  if (!eventCategories || !highlightedCards) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DefaultLayout
        banner={
          /* 로그인 상태인 경우 */
          user ? (
            userMain.cards.length ? (
              <>
                <div className="text-4xl mb-4 font-bold self-left inline-block">
                  <span className="text-4xl font-extrabold">{userMain.userName}</span>
                  <span className="text-2xl">님의</span>
                  <span className="text-3xl font-extrabold mx-3">혜택을</span>
                  eAZy 하게 챙겼어요
                </div>
                <div className="flex mb-4">
                  <div className={`flex flex-col justify-center`}>
                    <OverlappedCards images={userMain.images} />
                  </div>
                  <DefaultFrame className={'py-[3rem] px-[3rem] z-50'}>
                    <div className="flex flex-col justify-between text-4xl font-bold ">
                      <div className="text-3xl flex flex-col gap-4 items-end mr-auto">
                        {Data.categoryDatas.map((categoryData, index) => (
                          <CategoryBenefit {...categoryData} rank={index + 1} key={index} />
                        ))}
                      </div>

                      <div className="ml-auto flex items-end">
                        <span className="text-2xl mr-2">이번 달</span>
                        <div className="text-3xl mr-[1rem]">총 혜택</div>
                        <div className="text-5xl font-black text-blue-700">
                          {userMain.benefitAmount.toLocaleString()}
                        </div>
                        <div className="text-3xl">원</div>
                        {/* <div className="text-2xl ml-auto ">받았어요</div> */}
                      </div>
                    </div>
                  </DefaultFrame>
                </div>
              </>
            ) : (
              //로그인 되었지만 발급된 우리카드가 하나도 없는 상태인 경우
              <>
                <div className="p-3 relative">
                  <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
                    <div className="text-xl">아직 발급받으신 우리카드가 없습니다!</div>
                    <div className="mx-auto mt-4 bottom-1/2 text-center text-3xl ">
                      카드를 발급받아 <span className="font-black">eAZy</span>하게 혜택을 챙겨보세요
                    </div>
                    <Link to="https://pc.wooricard.com/dcpc/main.do">
                      <div className="mt-[1.5rem] mx-auto py-3 px-5 rounded-[20px] bg-[#1d92e9] text-2xl text-center text-white">
                        우리카드 페이지로 이동
                      </div>
                    </Link>
                  </div>
                  <img src={OverlappedCard} alt="Card" className="w-auto h-auto" />
                  <div className="absolute right-10 bottom-5">
                    <div className="flex-end relative">
                      <span className="text-5xl font-black text-blue-700 relative">???</span>
                      <span className="text-3xl">원</span>
                    </div>
                  </div>
                </div>
              </>
            )
          ) : (
            /* 비로그인 상태인 경우 */
            <div className="p-8 relative">
              <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
                <div className="mx-auto mt-4 bottom-1/2 text-center text-3xl ">
                  로그인 하시면 받은 혜택을 보여드릴게요
                </div>
                <Link to="/login">
                  <div className="mt-[1rem] mx-auto px-8 py-3 rounded-[20px] bg-[#1d92e9] text-2xl text-center text-white">
                    로그인
                  </div>
                </Link>
              </div>
              <img src={OverlappedCard} alt="Card" className="w-auto h-auto" />
              <div className="absolute right-10 bottom-5">
                <div className="flex-end relative">
                  <span className="text-5xl font-black text-blue-700 relative">???</span>
                  <span className="text-3xl">원</span>
                </div>
              </div>
            </div>
          )
        }
        bannerClassName={'py-14 bg-[#F4F7FC]'}
      >
        {user && (
          <>
            <div className="mt-8 text-3xl font-bold self-left">eAZy가 알아서 골라줬어요</div>
            <div>
              {userMain.cards.map((card, index) => (
                <CardPerfomance key={index} {...card} />
              ))}
            </div>
          </>
        )}

        <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div>

        <HashTagSearch
          tags={eventCategories}
          checkedIndex={checkedIndex}
          setCheckedIndex={setcheckedIndex}
        />
        <CategoryCards categoryCards={highlightedCards} maxColumn={5} maxRow={1} showInfo={false} />
      </DefaultLayout>
    </>
  );
};

export default MainPage;
