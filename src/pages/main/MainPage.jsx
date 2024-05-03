import DefaultLayout from '../../components/layout/DefaultLayout';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import useEventCategory from '../../hooks/useEventCategory';
import useHighlightedCardByEventCategoryId from '../../hooks/useHighlightedCardByEventCategoryId';

import eazy from '../../assets/eAZyCard.svg';

import CardPerfomance from './CardPerformance';
import { useEffect, useState } from 'react';
import { getUserSession } from '../../utils/authUtils';
import { getCardsSummary } from '../../apis/CardAPI';
import CardUsageSummary from './CardUsageSummary';
import NoLinkedCard from './NoLinkedCard';
import NoLoginBanner from './NoLoginBanner';
import Banner from '../../components/Banner';
import RecommedImg from '../../assets/recommendImg.png';

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
          user ? (
            userMain.cards.length ? (
              //로그인 되었고 연결된 우리카드가 있는 경우
              <CardUsageSummary userMain={userMain} userId={userId} />
            ) : (
              //로그인 되었지만 연결된 우리카드가 하나도 없는 상태인 경우
              <NoLinkedCard />
            )
          ) : (
            /* 비로그인 상태인 경우 */
            <NoLoginBanner />
          )
        }
        bannerClassName={'py-14'}
      >
        {user && userMain.cards.length ? (
          <>
            <div className="flex mt-12 gap-3">
              <div className="text-3xl font-bold self-left">eAZy가 알아서 골라줬어요</div>
              <div className="flex items-end text-gray-500">(이번 달 기준)</div>
            </div>
            <div>
              {userMain.cards.map((card, index) => (
                <CardPerfomance key={index} {...card} />
              ))}
            </div>
          </>
        ) : (
          <></>
        )}

        {/* <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div> */}
        {/* TODO: 이벤크 배너 위치. 임시로 카드 추천 배너를 넣어놨습니다. - by 규리 */}
        <Banner
          to={'/card-recommend'}
          title="어떤 카드를 골라야할지 고민이신가요?"
          description="내 소비에 맞는 카드 추천 받기"
          imageSrc={RecommedImg}
        />

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
