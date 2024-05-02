import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProfileImage from '../../assets/profileImage.png';
import CardIcon from '../../assets/cardIcon.svg';
import LogoutIcon from '../../assets/logoutIcon.svg';
import HelpIcon from '../../assets/helpIcon.svg';
import { getUserSession, logout } from '../../utils/authUtils';
import { DropdownContext } from '../../App';

const DropdownMenu = () => {
  const navigate = useNavigate();
  const user = getUserSession();
  const { isDropdownOpen } = useContext(DropdownContext);
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-[200px] h-auto absolute right-0 mt-2 bg-white rounded-md shadow-xl py-2 z-20 ${!isDropdownOpen && 'hidden'}`}
        style={{ top: '100%', border: '1px solid #E5E7EB' }} // 부모 컴포넌트의 높이만큼 아래에 위치
      >
        {user ? (
          <>
            <Link to="/mypage/manage">
              <div className="cursor-pointer flex justify-center p-3 gap-1">
                <img src={ProfileImage} alt="Profile Icon" className="w-[3em]" />
                <div className="flex items-center text-xl text-left gap-1">
                  <div className="text-[#4A3AFF]">{user.userName}</div>
                  <div>님</div>
                </div>
              </div>
            </Link>
            <hr className="bg-gray-300 w-[85%] mb-3 " />
          </>
        ) : (
          <>
            <div className="cursor-pointer flex justify-center p-3 gap-1">
              <img src={ProfileImage} alt="Profile Icon" className="w-[3em]" />
              <div
                className="flex items-center text-lg text-left"
                onClick={() => navigate('/login')}
              >
                로그인
              </div>
            </div>
            <hr className="bg-gray-300 w-[85%] mb-3 " />
          </>
        )}
        <div className="cursor-pointer flex justify-center p-3 gap-4">
          <img src={CardIcon} alt="Card Icon" className="w-[1.8em]" />
          <Link to="/mypage/card-management" className="flex items-center text-xl text-left">
            카드관리
          </Link>
        </div>
        <div className="cursor-pointer flex justify-center p-3 gap-4">
          <img src={HelpIcon} alt="Help Icon" className="w-[1.8em]" />
          <Link to="/faq" className="flex items-center text-xl text-left">
            문의하기
          </Link>
        </div>
        {user && (
          <>
            <hr className="bg-gray-300 w-[85%]" />
            <div
              className="cursor-pointer flex justify-center p-3 gap-4"
              onClick={() => {
                logout();
              }}
            >
              {/*서버 세션 발급 확장성을 위해 Link 태그로 나뒀습니다.*/}
              <img className="w-[1.8em]" src={LogoutIcon} alt="Logout Icon" />
              <Link className="flex items-center text-xl text-left">로그아웃</Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DropdownMenu;
