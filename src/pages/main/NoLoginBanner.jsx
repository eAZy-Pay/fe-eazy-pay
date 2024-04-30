import OverlappedCard from '../../assets/overlappedCard.png';

const NoLoginBanner = () => {
  return (
    <>
      <div className="p-8 relative">
        <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-2xl">
          <div className="mx-auto mt-4 bottom-1/2 text-center text-3xl ">
            로그인 하시면 받은 혜택을 보여드릴게요
          </div>

          <div
            className="mt-[1rem] mx-auto px-8 py-3 rounded-[20px] bg-[#1d92e9] text-2xl text-center text-white"
            onClick={() => (window.location.href = '/login')}
          >
            로그인
          </div>
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
  );
};

export default NoLoginBanner;
