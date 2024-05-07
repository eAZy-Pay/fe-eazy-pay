import OverlappedCard from '../../assets/overlappedCard.webp';

const NoLinkedCard = () => {
  return (
    <>
      <div className="p-3 relative">
        <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm rounded-2xl">
          <div className="text-xl">아직 발급받으신 우리카드가 없습니다!</div>
          <div className="mx-auto mt-4 bottom-1/2 text-center text-3xl ">
            카드를 발급받아 <span className="font-black">eAZy</span>하게 혜택을 챙겨보세요
          </div>

          <div
            className="mt-[1.5rem] mx-auto py-3 px-5 rounded-[20px] bg-main-color text-2xl text-center text-white"
            onClick={() => (window.location.href = '/card-search')}
          >
            카드 검색 페이지로 이동
          </div>
        </div>
        <img src={OverlappedCard} alt="Card" className="w-auto h-auto sm:mx-0 mx-auto" />
        <div className="absolute right-10 bottom-5 hidden sm:inline">
          <div className="flex-end relative">
            <span className="text-5xl font-black text-main-color relative">???</span>
            <span className="text-3xl">원</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default NoLinkedCard;
