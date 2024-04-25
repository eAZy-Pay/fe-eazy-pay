import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Logo from '../../assets/mainLogo.svg';
import Card from '../../assets/card.svg';
import Login from '../../assets/loginIcon.svg';
import LogOut from '../../assets/logoutIcon.svg';
import { getUserSession, logout } from '../../utils/authUtils';

const SideBarFull = ({ currentPage }) => {
  const user = getUserSession();

  return (
    <div
      id="sidebar-full"
      className="flex flex-col justify-between items-start h-dvh px-4 py-6 bg-white border-x-2 border-[#dde1e6]"
    >
      <div className="flex flex-col items-start flex-grow-0 flex-shrink-0 w-48 gap-4">
        <div
          id="sidebar-full-title"
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-48 h-[34px] relative"
        >
          <img src={Logo} alt="Logo" className="mr-2" />
        </div>

        <div id="sidebar-full-items" className="flex flex-col justify-start items-start w-full">
          <Link
            to="/admin/card"
            className={`flex justify-start w-full items-center relative gap-2 px-2 py-3 ${
              currentPage === 0 ? 'bg-[#f2f4f8]' : ''
            } border-t border-[#f2f4f8]`}
            onClick={(e) => e.stopPropagation()}
          >
            <img src={Card} alt="Card" />
            <div className="flex-grow w-full text-base font-medium text-left text-[#21272a] ml-3">
              카드관리
            </div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col items-start flex-grow-0 flex-shrink-0 w-48 gap-4">
        {user ? (
          <div
            className="flex justify-start items-center w-full relative gap-2 px-2 py-3 hover:bg-[#f2f4f8] border-t border-[#f2f4f8] cursor-pointer"
            onClick={() => {
              logout();
            }}
          >
            <img src={LogOut} alt="LogOut" width={28} className="ml-3" />
            로그아웃
          </div>
        ) : (
          <Link
            to="/login"
            className="flex justify-start items-center w-full relative gap-2 px-2 py-3 hover:bg-[#f2f4f8] border-t border-[#f2f4f8]"
          >
            <img src={Login} alt="Login" width={28} className="ml-3" />
            로그인
          </Link>
        )}
      </div>
    </div>
  );
};

SideBarFull.defaultProps = {
  currentPage: 0,
  user: null,
};

SideBarFull.propTypes = {
  currentPage: PropTypes.number,
  user: PropTypes.object,
};

export default SideBarFull;
