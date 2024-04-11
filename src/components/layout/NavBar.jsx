import { Link } from 'react-router-dom';

import MainLogo from '../../assets/mainLogo.svg';
import MenuIcon from '../../assets/menuIcon.svg';
import BellIcon from '../../assets/bellIcon.svg';

const NavBar = () => {
  return (
    <div className="flex w-full h-20 items-center">
      <Link to="/">
        <img src={MainLogo} alt="Main Logo" className="w-38 h-12" />
      </Link>
      <div className="flex-grow flex justify-end items-center gap-4 md:gap-6 lg:gap-8">
        <Link to="/card-recommend" className="text-lg md:text-xl font-bold">
          카드추천
        </Link>
        <Link to="/" className="text-lg md:text-xl font-bold">
          카드검색
        </Link>
        <Link to="/" className="text-lg md:text-xl font-bold">
          결제
        </Link>
        <Link to="/" className="text-lg md:text-xl font-bold">
          문의
        </Link>
        <img src={BellIcon} alt="Notifications" className="w-8 h-8" />
        <img src={MenuIcon} alt="Menu" className="w-8 h-8" />
      </div>
    </div>
  );
};

export default NavBar;
