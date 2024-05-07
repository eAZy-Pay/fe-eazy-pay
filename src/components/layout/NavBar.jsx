//import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import DropdownMenu from '../dropdown/DropDownMenu';
import MenuContent from '../dropdown/MenuContent';

import { DropdownContext } from '../../App';
import BellNotification from './BellNotification';

import MainLogo from '../../assets/mainLogo.svg';
import MenuIcon from '../../assets/menuIcon.svg';

const NavBar = () => {
  // 드롭다운바 열림/닫힘 상태 관리
  const { isDropdownOpen, setIsDropdownOpen, setDropdownContent } = useContext(DropdownContext);

  return (
    <div className="flex w-full h-20 items-center">
      <Link to="/">
        <img src={MainLogo} alt="Main Logo" className="w-38 h-12" />
      </Link>
      <div className="flex-grow flex justify-end items-center gap-4 md:gap-6 lg:gap-8">
        <div className="flex-grow flex justify-end items-center gap-4 md:gap-6 lg:gap-8">
          <Link to="/card-recommend" className="text-lg md:text-xl font-bold">
            카드추천
          </Link>
          <Link to="/card-search" className="text-lg md:text-xl font-bold">
            카드검색
          </Link>
          <Link to="/shopping" className="text-lg md:text-xl font-bold">
            쇼핑
          </Link>
          <Link to="/mypage" className="text-lg md:text-xl font-bold">
            마이
          </Link>
        </div>
        <div className="flex items-center gap-1 md:gap-2 lg:gap-4">
          <BellNotification />
          <div className="relative">
            <img
              src={MenuIcon}
              alt="Menu"
              className="w-8 h-8 cursor-pointer"
              onClick={() => {
                setDropdownContent(<MenuContent />);
                setIsDropdownOpen(!isDropdownOpen);
              }}
            />
            <DropdownMenu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
