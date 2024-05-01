import { useState } from 'react';
import PropTypes from 'prop-types';

function UserInfoComponent({ userInfo = '', category = '', passwordSection = false }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(userInfo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setEditedPhoneNumber(userInfo.phoneNumber); // 원래 번호로 되돌리기
  };

  const handleSave = () => {
    // onUpdate({ ...userInfo, phoneNumber: editedPhoneNumber });
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setEditedPhoneNumber(event.target.value);
  };

  return (
    <>
      {passwordSection ? (
        <div className="flex justify-between w-full">
          <div className="flex w-4/5 items-center justify-between">
            <p className="text-2xl">{category}</p>
            {isEditing ? (
              <input
                type="text"
                value={editedPhoneNumber}
                onChange={handleChange}
                className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
              />
            ) : (
              <div className="flex items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                <p className="flex-grow w-[329px] text-base text-[#697077]">{userInfo}</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        // passwordSection이 false일 때의 출력
        <div className="flex justify-between w-full">
          <div className="flex w-4/5 items-center justify-between">
            <p className="text-2xl">{category}</p>
            {isEditing ? (
              <input
                type="text"
                value={editedPhoneNumber}
                onChange={handleChange}
                className="flex items-center w-[361px] px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd] text-base text-[#697077]"
              />
            ) : (
              <div className="flex items-center px-4 py-3 bg-[#f2f4f8] border-b border-l-0 border-[#c1c7cd]">
                <p className="flex-grow w-[329px] text-base text-[#697077]">{userInfo}</p>
              </div>
            )}
          </div>
          <div className="flex space-x-2">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black text-lg"
                >
                  저장
                </button>
                <button
                  onClick={handleCancel}
                  className="w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black text-lg"
                >
                  취소
                </button>
              </>
            ) : (
              <button
                onClick={handleEdit}
                className="w-[3.875rem] h-[2.813rem] rounded-[8.16px] bg-white border-[0.82px] border-black text-lg"
              >
                변경
              </button>
            )}
          </div>
        </div>
      )}
    </>
  );
}

UserInfoComponent.propTypes = {
  userInfo: PropTypes.string,
  category: PropTypes.string,
  changeButton: PropTypes.bool,
  className: PropTypes.string,
  passwordSection: PropTypes.bool,
};

export default UserInfoComponent;
