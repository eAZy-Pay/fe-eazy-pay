import { Link } from 'react-router-dom';
import eazy from '../../assets/eAZyCard.svg';
import OverlappedCard from '../../assets/overlappedCard.png';
import MainBenefits from './MainBenefits';
import CardPerfomance from './CardPerformance';
import { useEffect, useState } from 'react';
import { getMainBanner } from '../../apis/CardAPI';

const MainBanner = () => {
  const [userMain, setUserMain] = useState({
    userName: '김이지',
    images: [eazy],
    benefitAmount: 0,
    cards: [],
  });

  useEffect(() => {
    if (sessionStorage.getItem('user')) {
      getMainBanner(JSON.parse(sessionStorage.getItem('user')).uid).then((res) => {
        console.log(res);
        const tmp = [eazy];
        res.cards.forEach((card) => {
          tmp.push(card.image);
        });
        setUserMain((prev) => ({
          ...prev,
          benefitAmount: res.benefitAmount,
          userName: res.userName,
          images: tmp,
          cards: res.cards,
        }));
      });
    }
  }, []);
  return (
    <>
      {/* 로그인 상태인 경우 */}
      {sessionStorage.getItem('user') ? (
        userMain.cards.length ? (
          <>
            <div className="mt-[3rem] mb-8 text-2xl font-bold self-left">eAZy 하게 챙겼어요</div>
            <div className="my-4">
              <MainBenefits userMain={userMain} />
            </div>
            <div className="mt-8 text-2xl font-bold self-left">eAZy가 알아서 골라줬어요</div>
            <div>
              {userMain.cards.map((card, index) => (
                <CardPerfomance key={index} card={card} />
              ))}
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
              <div className="absolute right-0 bottom-5">
                <div className="mr-[15rem] flex-end relative">
                  <span className="text-5xl font-black text-blue-700 relative">???</span>
                  <span className="text-3xl">원</span>
                </div>
              </div>
            </div>
          </>
        )
      ) : (
        /* 비로그인 상태인 경우 */
        <div className="p-3 relative">
          <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <div className="mx-auto mt-4 bottom-1/2 text-center text-3xl ">
              로그인 하면 얼마나 혜택을 받을 수 있는지 알 수 있어요
            </div>
            <Link to="/login">
              <div className="mt-[1rem] mx-auto w-[13rem] py-3 rounded-[20px] bg-[#1d92e9] text-2xl text-center text-white">
                로그인 하기
              </div>
            </Link>
          </div>
          <img src={OverlappedCard} alt="Card" className="w-auto h-auto" />
          <div className="absolute right-0 bottom-5">
            <div className="mr-[15rem] flex-end relative">
              <span className="text-5xl font-black text-blue-700 relative">???</span>
              <span className="text-3xl">원</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MainBanner;
