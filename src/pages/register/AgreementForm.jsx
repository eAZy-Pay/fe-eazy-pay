import { useState } from 'react';
import PropTypes from 'prop-types';

const AgreementForm = ({ checkBox1, setCheckBox1, checkBox2, setCheckBox2 }) => {
  const [allChecked, setAllChecked] = useState(false);

  // 전체 동의 체크박스 클릭 시 호출되는 함수
  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setCheckBox1(isChecked); // 두 개의 필수 체크박스를 전체 동의 상태로 설정
    setCheckBox2(isChecked);
  };

  // 각 필수 체크박스 클릭 시 호출되는 함수
  const handleCheckBox1 = (event) => {
    const isChecked = event.target.checked;
    setCheckBox1(isChecked);
    if (!isChecked) {
      setAllChecked(false); // 하나라도 해제되면 "전체 동의" 체크박스를 해제
    }
  };
  const handleCheckBox2 = (event) => {
    const isChecked = event.target.checked;
    setCheckBox2(isChecked);
    if (!isChecked) {
      setAllChecked(false); // 하나라도 해제되면 "전체 동의" 체크박스를 해제
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-col">
        <div className="flex items-center mb-8">
          <input
            type="checkbox"
            className="mr-4"
            id="allCheck" // 체크박스의 고유한 ID를 지정
            checked={allChecked}
            onChange={handleAllChecked} // 전체 동의 상태 관리
          />
          <label htmlFor="allCheck" className="w-80 text-left text-xl text-black">
            전체 동의
          </label>
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input
            type="checkbox"
            className="mr-4"
            id="required1" // 각 필수 체크박스에 고유한 ID 지정
            checked={checkBox1}
            onChange={handleCheckBox1} // 첫 번째 필수 체크박스 상태 관리
          />
          <label htmlFor="required1" className="w-80 mr-4 text-left text-lg text-black">
            (필수) 개인정보 수집 및 이용·제공 동의
          </label>
        </div>

        <div className="flex justify-center mb-5">
          <div className="overflow-auto border border-gray-300 p-2 w-[305px] h-32 text-sm">
            <div className="text-base">개인정보 수집 및 이용·제공 동의서</div>
            <ul className="list-disc ml-4">
              <li>개인정보의 수집 및 이용 목적</li>
              <ul className="list-disc ml-4">
                <li>'이지페이' 서비스 이용에 필요한 회원 가입 및 관리</li>
                <li>우리카드 이용 정보의 제공 및 관리</li>
                <li>서비스 이용에 따른 본인 확인, 고객상담, 불만처리 등 민원 처리</li>
                <li>신규 서비스 및 이벤트 정보 안내, 마케팅 활동에 활용</li>
              </ul>
            </ul>
            <ul className="list-disc ml-4">
              <li>수집하는 개인정보 항목</li>
              <ul className="list-disc ml-4">
                <li>이름</li>
                <li>생년월일</li>
                <li>휴대폰번호</li>
                <li>이메일 주소</li>
                <li>아이디</li>
                <li>비밀번호</li>
                <li>우리카드 이용 정보</li>
              </ul>
            </ul>
            <ul className="list-disc ml-4">
              <li>개인정보의 보유 및 이용 기간</li>
            </ul>
            <p>서비스 제공 목적 달성 시까지 또는 회원 탈퇴 시까지</p>

            <li>개인정보의 제공 및 공유</li>
            <p>'이지페이' 서비스 제공을 위해 필요한 범위 내에서 우리카드와의 정보 제공 및 공유</p>
            <li>개인정보의 파기</li>
            <p>
              개인정보 수집 및 이용 목적 달성 후 즉시 파기하거나, 별도의 데이터베이스로 옮겨 보관 후
              법률에 의한 경우를 제외하고는 재생되지 않도록 처리
            </p>

            <li>동의 거부권 및 동의의 철회</li>
            <p>
              개인정보 제공에 대한 동의는 서비스 이용에 필수적이며, 동의를 거부할 경우 서비스 이용이
              제한될 수 있습니다. 동의한 내용에 대해 언제든지 철회가 가능하며, 서비스 내 설정 메뉴를
              통해 언제든지 회원 탈퇴 및 개인정보 삭제를 요청할 수 있습니다.
            </p>
            <br></br>
            <p>
              위와 같이 '이지페이' 서비스의 개인정보 수집 및 이용에 관한 동의를 안내합니다. 동의
              여부를 확인하고 서비스를 이용해주시기 바랍니다.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input
            type="checkbox"
            className="mr-4"
            id="required2"
            checked={checkBox2}
            onChange={handleCheckBox2} // 두 번째 필수 체크박스 상태 관리
          />
          <label htmlFor="required2" className="w-80 mr-4 text-left text-lg text-black">
            (필수) 개인정보 제3자 정보제공 동의
          </label>
        </div>

        <div className="flex justify-center">
          <div className="overflow-auto border border-gray-300 p-2 w-[305px] h-32 text-sm">
            <div className="text-base">개인정보 제3자 정보제공 동의서</div>
            <ul className="list-disc ml-4">
              <li>개인정보 제공 목적</li>
              <ul className="list-disc ml-4">
                <li>추가 혜택 제공을 위한 제3자 정보 제공</li>
                <li>부정 사용 방지 및 보안 강화를 위한 제3자 정보 제공</li>
              </ul>
              <li>제공하는 개인정보 항목</li>
              <ul className="list-disc ml-4">
                <li>이름</li>
                <li>생년월일</li>
                <li>이메일 주소</li>
                <li>아이디</li>
              </ul>
              <li>제공 및 이용 기간</li>
              <p>제공 목적 달성 시까지 또는 회원 탈퇴 시까지</p>
              <li>제공 받는 자</li>
              <p>혜택을 제공하는 협력사</p>
              <li>동의 철회</li>
              <p>제공 동의는 언제든지 철회할 수 있습니다.</p>
            </ul>
            <br></br>
            <p>위와 같이 개인정보 제3자 정보제공에 동의합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

AgreementForm.propTypes = {
  checkBox1: PropTypes.bool.isRequired,
  setCheckBox1: PropTypes.func.isRequired,
  checkBox2: PropTypes.bool.isRequired,
  setCheckBox2: PropTypes.func.isRequired,
};

export default AgreementForm;
