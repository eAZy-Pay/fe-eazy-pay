import { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { ModalContext } from '../../App';
import ConsentToCollect from './ConsentToCollect';
import ConsentToThirdParty from './ConsentToThirdParty';

const AgreementForm = ({ checkBox1, setCheckBox1, checkBox2, setCheckBox2 }) => {
  const { setModal } = useContext(ModalContext);
  const [allChecked, setAllChecked] = useState(false);

  // 전체 동의 체크박스 클릭 시 호출되는 함수
  const handleAllChecked = (event) => {
    const isChecked = event.target.checked;
    setAllChecked(isChecked);
    setCheckBox1(isChecked);
    setCheckBox2(isChecked);
  };

  // useEffect를 사용하여 checkBox1, checkBox2가 변경될 때마다 allChecked 상태를 업데이트
  useEffect(() => {
    // 두 개의 필수 체크박스가 모두 선택되어 있을 때만 allChecked를 true로 설정
    if (checkBox1 && checkBox2) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [checkBox1, checkBox2]);

  // 각 필수 체크박스 클릭 시 호출되는 함수
  const handleCheckBox1 = (event) => {
    const isChecked = event.target.checked;
    setCheckBox1(isChecked);
  };
  const handleCheckBox2 = (event) => {
    const isChecked = event.target.checked;
    setCheckBox2(isChecked);
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
            style={{ transform: 'scale(1.5)' }}
            onChange={handleAllChecked} // 전체 동의 상태 관리
          />
          <label htmlFor="allCheck" className="w-72 text-left text-xl text-black">
            전체 동의
          </label>
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input
            type="checkbox"
            className="mr-4"
            id="required1" // 각 필수 체크박스에 고유한 ID 지정
            checked={checkBox1}
            style={{ transform: 'scale(1.5)' }}
            onChange={handleCheckBox1} // 첫 번째 필수 체크박스 상태 관리
          />
          <label htmlFor="required1" className="w-72 mr-4 text-left text-lg text-black">
            (필수) 개인정보 수집 및 이용·제공 동의
          </label>
          <button
            className="mr-2 w-12 border border-blue-500 rounded-lg py-1 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={() => {
              setModal({
                isOpen: true,
                title: '개인정보 수집 및 이용·제공 동의서',
                content: <ConsentToCollect />,
              });
            }}
          >
            보기
          </button>
        </div>

        <div className="flex justify-between items-center mb-5 w-full max-w-md">
          <input
            type="checkbox"
            className="mr-4"
            id="required2"
            checked={checkBox2}
            style={{ transform: 'scale(1.5)' }}
            onChange={handleCheckBox2} // 두 번째 필수 체크박스 상태 관리
          />
          <label htmlFor="required2" className="w-72 mr-4 text-left text-lg text-black">
            (필수) 개인정보 제3자 정보제공 동의
          </label>
          <button
            className="mr-2 w-12 border border-blue-500 rounded-lg py-1 text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition duration-300"
            onClick={() => {
              setModal({
                isOpen: true,
                title: '개인정보 제3자 정보제공 동의서',
                content: <ConsentToThirdParty />,
              });
            }}
          >
            보기
          </button>
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
