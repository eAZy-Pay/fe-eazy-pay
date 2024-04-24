import DefaultLayout from '../../components/layout/DefaultLayout';
import arrowIcon from '../../assets/arrowIcon.svg';
import { useState } from 'react';

const ManageMyInformation = () => {
  const [isOpen, setIsOpen] = useState(true); // 기본적으로 펼쳐진 상태
  const [passwordOpen, setpasswordOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen); // 상태 토글
  };

  const passwordSection = () => {
    setpasswordOpen(!passwordOpen); // 상태 토글
  };

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
              className="flex flex-col justify-center gap-8 h-[35rem] w-5/6 px-40 py-24"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <div className="flex justify-center items-center">
                <p className="text-2xl">이름</p>
                <div className="flex justify-start items-center px-4 py-3 ml-[5.5rem] mr-[2.4rem] bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">천*민</p>
                </div>
                <div className="flex justify-center items-center w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                  <p className="text-lg">변경</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <p className="text-2xl">주소</p>
                <div className="flex justify-start items-center px-4 py-3 ml-[5.5rem] mr-[2.4rem] bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">
                    서울시 성북구 동소문로 ********
                  </p>
                </div>
                <div className="flex justify-center items-center w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                  <p className="text-lg">변경</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <p className="text-2xl">휴대폰번호</p>
                <div className="flex justify-start items-center px-4 py-3 ml-[1.375rem] mr-[2.4rem] bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">010-5542-****</p>
                </div>
                <div className="flex justify-center items-center w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                  <p className="text-lg">변경</p>
                </div>
              </div>

              <div className="flex justify-center items-center">
                <p className="text-2xl">이메일</p>
                <div className="flex justify-start items-center px-4 py-3 ml-[4.125rem] mr-[2.4rem] bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">
                    ch*******n76@naver.com
                  </p>
                </div>
                <div className="flex justify-center items-center w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black">
                  <p className="text-lg">변경</p>
                </div>
              </div>
            </div>
          )}

          <hr className="bold-hr2 w-5/6" />
          <div className="flex justify-between items-center w-5/6 text-3xl px-4 my-4">
            비밀번호 변경
            <button onClick={passwordSection}>
              <img
                src={arrowIcon}
                alt="Arrow Icon"
                className={`transform ${passwordOpen ? 'rotate-90' : '-rotate-90'}`}
              />
            </button>
          </div>

          {passwordOpen && (
            <div
              className="flex flex-col justify-center items-center gap-8 h-[35rem] w-5/6 px-40 py-20"
              style={{ backgroundColor: '#F4F7FC' }}
            >
              <div className="flex justify-between items-center w-full">
                <p className="text-2xl">아이디</p>
                <div className="flex justify-between items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">cheonjimin76</p>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-2xl">기존 비밀번호 입력</p>
                <div className="flex justify-start items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]">ㅇ</p>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-2xl">새 비밀번호 입력</p>
                <div className="flex justify-start items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]"> ㅇ</p>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <p className="text-2xl">한 번 더 입력</p>
                <div className="flex justify-start items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                  <p className="flex-grow w-[329px] text-base text-[#697077]"> ㅇ</p>
                </div>
              </div>
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
