import DefaultLayout from '../../components/layout/DefaultLayout';
import arrowIcon from '../../assets/arrowIcon.svg';
import { useState, useEffect } from 'react';
import { getUserSession } from '../../utils/authUtils';
import { getUserInfo } from '../../apis/UserAPI';
import ChangePasswordSection from './ChangePasswordSection';
import ChangePinPasswordSection from './ChangePinPasswordSection';

const ManageMyInformation = () => {
  const [isOpen, setIsOpen] = useState(true); // 기본적으로 펼쳐진 상태
  const [passwordOpen, setpasswordOpen] = useState(false);
  const [PinPasswordOpen, setPinPasswordOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length !== 11) return ''; // 전화번호 형식이 유효하지 않으면 빈 문자열 반환
    const areaCode = phoneNumber.slice(0, 3);
    const firstPart = phoneNumber.slice(3, 7);
    const secondPart = phoneNumber.slice(7, 11);
    return `${areaCode}-${firstPart}-${secondPart}`;
  };

  const userInfoSubset = [
    { label: '이름', value: userInfo.name },
    { label: '생년월일', value: userInfo.birthday },
    { label: '이메일', value: userInfo.email },
    { label: '전화번호', value: userInfo.phoneNumber },
  ];

  const toggleSection = () => {
    setIsOpen(!isOpen); // 상태 토글
  };

  const passwordSection = () => {
    setpasswordOpen(!passwordOpen); // 상태 토글
  };

  const PinPasswordSection = () => {
    setPinPasswordOpen(!PinPasswordOpen); // 상태 토글
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자 정보 가져오는 코드 추가
        const user = getUserSession();
        const uid = user.uid;
        const userInfo = await getUserInfo(uid);

        // userInfo.birthday = formatBirthday(userInfo.birthday);
        userInfo.phoneNumber = formatPhoneNumber(userInfo.phoneNumber);

        setUserInfo(userInfo);
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, [userInfo]);

  return (
    <>
      <DefaultLayout>
        <div className="mt-[3rem] mb-8 text-2xl font-bold self-left">회원 정보 변경</div>
        <div className="flex flex-col items-center">
          <hr className="bold-hr w-5/6" />
          <button
            onClick={toggleSection}
            className="flex justify-between items-center w-5/6 text-2xl px-4 my-4"
          >
            필수정보
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className={`transform ${isOpen ? '-rotate-90' : 'rotate-90'}`}
            />
          </button>

          {isOpen && (
            <div
              className="flex flex-col justify-center gap-8 w-5/6 px-40 py-24"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              {userInfoSubset.map((item, index) => (
                <div key={index} className="flex flex-col items-center w-full">
                  <div className="flex w-4/5 items-center justify-between">
                    <p className="text-2xl">{item.label}</p>
                    <div className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]">
                      {item.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
          <button
            onClick={passwordSection}
            className="flex justify-between items-center w-5/6 text-2xl px-4 my-4"
          >
            비밀번호 변경
            <img
              src={arrowIcon}
              alt="Arrow Icon"
              className={`transform ${passwordOpen ? '-rotate-90' : 'rotate-90'}`}
            />
          </button>

          {passwordOpen && (
            <div
              className="flex flex-col gap-8 w-5/6 px-40 py-24 items-center"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <ChangePasswordSection id={userInfo.id} uid={userInfo.uid} />
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
          <button
            onClick={PinPasswordSection}
            className="flex justify-between items-center w-5/6 text-2xl px-4 my-4"
          >
            PIN 비밀번호 변경
            <img src={arrowIcon} alt="Arrow Icon" className={`transform '-rotate-90' `} />
          </button>

          {PinPasswordOpen && <ChangePinPasswordSection uid={userInfo.uid} pin={userInfo.pin} />}

          <hr className="bold-hr2 w-5/6" />
        </div>
      </DefaultLayout>
    </>
  );
};

export default ManageMyInformation;
