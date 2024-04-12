import { Link } from 'react-router-dom';
import eazy from '../../assets/eAZyCard.svg';
import OverlappedCard from '../../assets/overlappedCard.png';
import MainBenefits from './MainBenefits';
import CardPerfomance from './CardPerformance';
const userMain = {
  userName: '박선주',
  images: [
    eazy,
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/21/1fa0a89f-0811-43b1-9c24-a4bb8bf750f4.png',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/bfee31ee-d644-4bc8-bbdb-1a4f78eb231c.gif',
  ],
  benefitAmount: 200000,
};

const MainBanner = () => {
  return (
    <>
      {/* 로그인 상태인 경우 */}
      {sessionStorage.getItem('user') ? (
        <>
          <div className="mt-[3rem] mb-8 text-2xl font-bold self-left">eAZy 하게 챙겼어요</div>
          <div className="my-4">
            <MainBenefits userMain={userMain} />
          </div>
          <div className="mt-8 text-2xl font-bold self-left">eAZy가 알아서 골라줬어요</div>
          <div>
            {userMain.images.map(
              (image, index) => index !== 0 && <CardPerfomance key={index} image={image} />
            )}
          </div>
        </>
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
