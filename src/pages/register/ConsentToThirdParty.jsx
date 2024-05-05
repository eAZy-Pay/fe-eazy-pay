const ConsentToThirdParty = () => {
  return (
    <div className="flex justify-center p-4 mb-5">
      <div className="overflow-auto border border-gray-300 p-6 w-[30rem] h-96 text-sm">
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
  );
};

export default ConsentToThirdParty;
