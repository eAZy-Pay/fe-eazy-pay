import { useContext } from 'react';
import { DropdownContext } from '../../App';

const DropdownMenu = () => {
  const { isDropdownOpen, dropdownContent } = useContext(DropdownContext);
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center w-auto h-auto absolute right-0 mt-2 bg-white rounded-md shadow-xl py-2 z-20 ${!isDropdownOpen && 'hidden'}`}
        style={{ top: '100%', border: '1px solid #E5E7EB' }} // 부모 컴포넌트의 높이만큼 아래에 위치
      >
        {dropdownContent}
      </div>
    </>
  );
};

export default DropdownMenu;
