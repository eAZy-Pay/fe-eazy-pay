const ConsentToCollect = () => {
  return (
    <div className="flex justify-center p-4 mb-5">
      <div className="overflow-auto border border-gray-300 p-6 w-[30rem] h-96 text-sm">
        <ul className="list-disc ml-4">
          <li>개인정보의 수집 및 이용 목적</li>
          <ul className="list-disc ml-4">
            <li>{`'이지페이' 서비스 이용에 필요한 회원 가입 및 관리`}</li>
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
          <p>{`서비스 제공 목적 달성 시까지 또는 회원 탈퇴 시까지`}</p>
          <li>개인정보의 제공 및 공유</li>
          <p>{`'이지페이' 서비스 제공을 위해 필요한 범위 내에서 우리카드와의 정보 제공 및 공유`}</p>
          <li>개인정보의 파기</li>
          <p>
            {`개인정보 수집 및 이용 목적 달성 후 즉시 파기하거나, 별도의 데이터베이스로 옮겨 보관 후
              법률에 의한 경우를 제외하고는 재생되지 않도록 처리`}
          </p>
          <li>동의 거부권 및 동의의 철회</li>
          <p>
            {`개인정보 제공에 대한 동의는 서비스 이용에 필수적이며, 동의를 거부할 경우 서비스 이용이
              제한될 수 있습니다. 동의한 내용에 대해 언제든지 철회가 가능하며, 서비스 내 설정 메뉴를
              통해 언제든지 회원 탈퇴 및 개인정보 삭제를 요청할 수 있습니다.`}
          </p>
        </ul>

        <br></br>
        <p>
          {`위와 같이 '이지페이' 서비스의 개인정보 수집 및 이용에 관한 동의를 안내합니다. 동의
              여부를 확인하고 서비스를 이용해주시기 바랍니다.`}
        </p>
      </div>
    </div>
  );
};

export default ConsentToCollect;
