import OverlappedCard from '../../assets/overlappedCard.png';

const NoLoginBanner = () => {
  return (
    <>
      <div className="p-8 relative">
        <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-2xl">
          <div className="mx-auto mt-4 bottom-1/2 text-center sm:text-3xl text-xl ">
            로그인 하시면 받은 혜택을 보여드릴게요
          </div>

          <div
            className="mt-[1rem] mx-auto px-8 py-3 rounded-[20px] bg-main-color sm:text-2xl text-xl text-center text-white"
            onClick={() => (window.location.href = '/login')}
          >
            로그인
          </div>
        </div>
        <img
          src={OverlappedCard}
          alt="Card"
          className="sm:w-auto sm:h-auto w-[20rem] sm:m-0 m-auto"
        />
        <div className="absolute right-10 bottom-5 hidden sm:inline">
          <div className="flex-end relative">
            <span className="sm:text-5xl text-lg font-black text-main-color relative">???</span>
            <span className="sm:text-3xl text-lg">원</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoLoginBanner;
