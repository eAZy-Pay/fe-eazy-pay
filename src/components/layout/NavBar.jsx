import MainLogo from '../../assets/mainLogo.svg';
import MenuIcon from '../../assets/menuIcon.svg';
import BellIcon from '../../assets/bellIcon.svg';

const NavBar = () => {
  return (
    <>
      <div className="flex w-full h-[80px] items-center">
        <img src={MainLogo} className="w-[154px] h-[47.85px]" />
        <div className="w-full flex justify-end items-center">
          <div className="w-[439px] h-[26px] flex items-center mr-2 gap-14">
            <div className="h-[26px] text-xl font-bold text-center text-black">카드추천</div>
            <div className="h-[26px] text-xl font-bold text-center text-black">카드검색</div>
            <div className="h-[26px] text-xl font-bold text-center text-black">결제</div>
            <div className="h-[26px] text-xl font-bold text-center text-black">문의</div>
          </div>
          <div className="flex items-center justify-end gap-4">
            <img src={BellIcon} className="w-[30px] h-[30px] text-gray-500" />
            <img src={MenuIcon} className="w-[30px] h-[30px] text-gray-500" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
