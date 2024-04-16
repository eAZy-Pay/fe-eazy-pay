import { Link } from 'react-router-dom';
import ProfileIcon from '../../assets/profileIcon.svg';
import CardIcon from '../../assets/cardIcon.svg';
import LogoutIcon from '../../assets/logoutIcon.svg';
import HelpIcon from '../../assets/helpIcon.svg';
import PropTypes from 'prop-types';

const DropdownMenu = ({ isOpen }) => {
  return (
    <>
      <div
        className={`flex flex-col  items-center w-[270px] h-[330px] absolute right-0 mt-2 bg-white rounded-md shadow-xl z-20 ${!isOpen && 'hidden'}`}
        style={{ top: '100%', border: '1px solid #E5E7EB' }} // 부모 컴포넌트의 높이만큼 아래에 위치
      >
        <div className="flex justify-center py-6 gap-4">
          <img src={ProfileIcon} alt="Profile Icon" />
          <div className="flex items-center text-3xl text-left">천지민 님</div>
        </div>
        <div className="flex justify-center p-3 gap-4">
          <img src={CardIcon} alt="Card Icon" />
          <Link to="/profile" className="flex items-center text-3xl text-left">
            카드관리
          </Link>
        </div>
        <div className="flex justify-center p-3 gap-4">
          <img src={HelpIcon} alt="Help Icon" />
          <Link to="/help" className="flex items-center text-3xl text-left">
            문의하기
          </Link>
        </div>
        <div className="flex justify-center p-3 gap-4">
          <img src={LogoutIcon} alt="Logout Icon" />
          <Link to="/logout" className="flex items-center text-3xl text-left">
            로그아웃
          </Link>
        </div>
      </div>
    </>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default DropdownMenu;
