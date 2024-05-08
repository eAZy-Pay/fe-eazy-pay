import NotFoundImage from '../assets/NotFoundImage.svg';
const NotFoundPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <a href="/" className="flex flex-col text-xl w-[25rem] mt-[4rem]">
        <img src={NotFoundImage} alt="404" />
        <div className="mx-auto">요청하신 페이지를 찾을 수 없어요</div>
      </a>
    </div>
  );
};

export default NotFoundPage;
