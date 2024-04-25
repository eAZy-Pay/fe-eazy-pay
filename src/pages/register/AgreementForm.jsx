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
    <div className="flex ml-36">
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
          <button className="py-1 px-4 bg-blue-100 text-[#808388] font-semibold rounded-lg hover:bg-blue-300 transition duration-300">
            보기
          </button>
        </div>

        <div className="flex justify-center">
          <img
            src="image-path.png"
            className="w-[305px] h-[146px] border border-black mb-10"
            alt="약관 설명 이미지"
          />
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
          <button className="py-1 px-4 bg-blue-100 text-[#808388] font-semibold rounded-lg hover:bg-blue-300 transition duration-300">
            보기
          </button>
        </div>
        <div className="flex justify-center">
          <img
            src="image-path.png"
            className="w-[305px] h-[146px] border border-black"
            alt="약관 설명 이미지"
          />
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
