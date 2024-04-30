import { useContext } from 'react';
import Close from '../../assets/close.svg';
import { ModalContext } from '../../App';

const Modal = () => {
  const { modal, setModal } = useContext(ModalContext);
  if (!modal.isOpen) {
    return null; // 모달이 닫혀 있을 때는 아무것도 렌더링하지 않음
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-[#000000] bg-opacity-50">
        <div className="flex flex-col justify-center items-center bg-[#FFFFFF] w-2/6 h-3/5 rounded-3xl">
          <div className="flex justify-end items-center w-full h-1/6 px-10">
            <div className="flex justify-left items-center w-full h-full text-[#21272a] text-4xl font-bold mt-10">
              {modal.title}
            </div>
            <button
              className="flex justify-center items-center w-[50px] h-[50px] rounded-full"
              onClick={() => setModal({ ...modal, isOpen: false })}
            >
              <img src={Close} />
            </button>
          </div>
          {modal.content}
        </div>
      </div>
    </>
  );
};

export default Modal;
