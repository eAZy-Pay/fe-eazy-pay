import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CloseIcon from '../../assets/close.svg';

const SelectedCardModal = ({ isOpen, title, content, actionType, onConfirm, onClose }) => {
  const [isVisible, setIsVisible] = useState(isOpen);

  useEffect(() => {
    setIsVisible(isOpen); // 모달 열림/닫힘 상태를 외부 prop으로부터 업데이트
  }, [isOpen]);

  const handleConfirm = () => {
    onConfirm(actionType); // 외부에서 전달된 onConfirm 함수 호출
    setIsVisible(false); // 모달 닫기
    onClose(); // 외부에서 전달된 onClose 함수 호출
  };

  const handleClose = () => {
    setIsVisible(false); // 모달 닫기
    onClose(); // 외부에서 전달된 onClose 함수 호출
  };

  if (!isVisible) {
    return null; // 모달이 닫혀있으면 렌더링하지 않음
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-5 w-1/3 relative">
        <div className="flex justify-between items-center">
          <h2 className="text-3xl">{title}</h2>
          <button onClick={handleClose}>
            <img src={CloseIcon} alt="Close" />
          </button>
        </div>
        <div className="mt-4">{content}</div>
        <div className="flex justify-end gap-5 mt-6">
          <button className="p-3 bg-red-500 text-white rounded-lg" onClick={handleConfirm}>
            예
          </button>
          <button className="p-3 bg-gray-500 text-white rounded-lg" onClick={handleClose}>
            아니요
          </button>
        </div>
      </div>
    </div>
  );
};

SelectedCardModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
  actionType: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SelectedCardModal;
