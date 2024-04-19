import { Link, useNavigate } from 'react-router-dom';
import ProfileIcon from '../../assets/profileIcon.svg';
import CardIcon from '../../assets/cardIcon.svg';
import LogoutIcon from '../../assets/logoutIcon.svg';
import HelpIcon from '../../assets/helpIcon.svg';
import LoginIcon from '../../assets/loginIcon.svg';
import PropTypes from 'prop-types';
const DropdownMenu = ({ isOpen }) => {
  const navigate = useNavigate();
  const user = sessionStorage.getItem('user');
  return (
    <>
      <div
        className={`flex flex-col  items-center w-[270px] h-auto absolute right-0 mt-2 bg-white rounded-md shadow-xl z-20 ${!isOpen && 'hidden'}`}
        style={{ top: '100%', border: '1px solid #E5E7EB' }} // 부모 컴포넌트의 높이만큼 아래에 위치
      >
        {user ? (
          <>
            <div className="cursor-pointer flex justify-center py-6 gap-4">
              <img src={ProfileIcon} alt="Profile Icon" />
              <div className="flex items-center text-xl text-left">
                {JSON.parse(user).userName} 님
              </div>
            </div>
            <hr className="bg-gray-300 w-[85%] mb-3 " />
          </>
        ) : (
          <>
            <div className="cursor-pointer flex justify-center py-6 gap-4">
              <img src={ProfileIcon} alt="Profile Icon" />
              <div
                className="flex items-center text-lg text-left"
                onClick={() => navigate('/login')}
              >
                로그인이 필요합니다.
              </div>
            </div>
            <hr className="bg-gray-300 w-[85%] mb-3 " />
          </>
        )}
        <div className="cursor-pointer flex justify-center p-3 gap-4">
          <img src={CardIcon} alt="Card Icon" />
          <Link to="/profile" className="flex items-center text-3xl text-left">
            카드관리
          </Link>
        </div>
        <div className="cursor-pointer flex justify-center p-3 gap-4">
          <img className="inset-0" src={HelpIcon} alt="Help Icon" />
          <Link to="/faq" className="flex items-center text-3xl text-left">
            문의하기
          </Link>
        </div>
        {user && (
          <>
            <hr className="bg-gray-300 w-[85%] my-3 " />
            <div
              className="cursor-pointer flex justify-center p-3 gap-4"
              onClick={() => {
                sessionStorage.removeItem('user');
                alert('로그아웃 되었습니다.');
                navigate('/');
              }}
            >
              {/*서버 세션 발급 확장성을 위해 Link 태그로 나뒀습니다.*/}
              <img className="w-[2em]" src={LogoutIcon} alt="Logout Icon" />
              <Link className="flex items-center text-lg text-left">로그아웃</Link>
            </div>
          </>
        )}

        {!user && (
          <>
            <hr className="bg-gray-300 w-[85%] mt-5" />
            <div className="cursor-pointer flex justify-center gap-4 my-4">
              <img className="w-[2em]" src={LoginIcon} alt="Profile Icon" />
              <div
                className="flex items-center text-lg text-left"
                onClick={() => navigate('/login')}
              >
                로그인 하기
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

DropdownMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default DropdownMenu;
