import DefaultLayout from '../../components/layout/DefaultLayout';
import arrowIcon from '../../assets/arrowIcon.svg';
import { useState, useEffect } from 'react';
import { getUserSession } from '../../utils/authUtils';
import { getUserInfo } from '../../apis/UserAPI';
import UserInfoComponent from './UserInfoComponent';

const ManageMyInformation = () => {
  const [isOpen, setIsOpen] = useState(true); // 기본적으로 펼쳐진 상태
  const [passwordOpen, setpasswordOpen] = useState(false);
  // const [PinPasswordOpen, setPinPasswordOpen] = useState(false);
  const [userInfo, setUserInfo] = useState([]);

  const formatPhoneNumber = (phoneNumber) => {
    if (phoneNumber.length !== 11) return ''; // 전화번호 형식이 유효하지 않으면 빈 문자열 반환
    const areaCode = phoneNumber.slice(0, 3);
    const firstPart = phoneNumber.slice(3, 7);
    const secondPart = phoneNumber.slice(7, 11);
    return `${areaCode}-${firstPart}-${secondPart}`;
  };

  const toggleSection = () => {
    setIsOpen(!isOpen); // 상태 토글
  };

  const passwordSection = () => {
    setpasswordOpen(!passwordOpen); // 상태 토글
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
  }, []);

  return (
    <>
      <DefaultLayout>
        <div className="mt-[3rem] mb-8 text-2xl font-bold self-left">회원 정보 변경</div>
        <div className="flex flex-col items-center">
          <hr className="bold-hr w-5/6" />
          <div className="flex justify-between items-center w-5/6 text-3xl px-4 my-4">
            필수정보
            <button onClick={toggleSection}>
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className={`transform ${isOpen ? '-rotate-90' : 'rotate-90'}`} // isOpen 상태에 따라 회전
              />
            </button>
          </div>

          {isOpen && (
            <div
              className="flex flex-col justify-center gap-8 w-5/6 px-40 py-24"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <UserInfoComponent category="이름" userInfo={userInfo.name}></UserInfoComponent>

              <UserInfoComponent
                category="생년월일"
                userInfo={userInfo.birthday}
              ></UserInfoComponent>

              <UserInfoComponent
                category="휴대폰번호"
                userInfo={userInfo.phoneNumber}
                button={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="이메일"
                userInfo={userInfo.email}
                button={true}
              ></UserInfoComponent>
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
          <div className="flex justify-between items-center w-5/6 text-3xl px-4 my-4">
            비밀번호 변경
            <button onClick={passwordSection}>
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className={`transform ${passwordOpen ? '-rotate-90' : 'rotate-90'}`}
              />
            </button>
          </div>

          {passwordOpen && (
            <div
              className="flex flex-col gap-8 w-5/6 px-40 py-24 items-center"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <UserInfoComponent
                category="아이디"
                userInfo={userInfo.id}
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="기존 비밀번호 입력"
                userInfo="기존 비밀번호 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="새 비밀번호 입력"
                userInfo="새 비밀번호 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="한 번 더 입력"
                userInfo="한 번 더 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <div className="flex justify-center items-center w-[6rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                <p className="text-lg">변경하기</p>
              </div>
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
          <div className="flex justify-between items-center w-5/6 text-3xl px-4 my-4">
            PIN 비밀번호 변경
            <button onClick={passwordSection}>
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className={`transform ${passwordOpen ? '-rotate-90' : 'rotate-90'}`}
              />
            </button>
          </div>

          {passwordOpen && (
            <div
              className="flex flex-col gap-16 w-5/6 px-40 py-24 items-center"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <UserInfoComponent
                category="기존 PIN 입력"
                userInfo="기존 PIN 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="새 PIN 입력"
                userInfo="새 PIN 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <UserInfoComponent
                category="한 번 더 입력"
                userInfo="한 번 더 입력"
                changeButton={false}
                passwordSection={true}
              ></UserInfoComponent>

              <div className="flex justify-center items-center w-[6rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                <p className="text-lg">변경하기</p>
              </div>
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
        </div>
      </DefaultLayout>
    </>
  );
};

export default ManageMyInformation;
