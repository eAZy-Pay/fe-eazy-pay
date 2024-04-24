import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ModalContext } from '../../App';
import { deleteCard } from '../../apis/CardAPI'; // 카드 삭제를 위한 API 호출 함수
import { Button } from '../Button';

const DeleteForm = ({ id, name, fetchRows }) => {
  const { setModal } = useContext(ModalContext);
  const [input, setInput] = useState('');

  const deleteData = () => {
    if (input !== name) {
      alert('입력한 내용이 일치하지 않습니다.');
      return;
    }

    setModal(false);

    deleteCard(id).then((res) => handleDeleteResponse(res));
  };

  const handleDeleteResponse = (res) => {
    console.log(res);
    if (res.status === 200) {
      alert(`카드 삭제에 성공했습니다.`);
    } else {
      alert(`카드 삭제에 실패했습니다.`);
    }
    fetchRows();
  };

  const getModalContent = () => {
    return (
      <p className="text-[#21272a] text-xl font-bold w-5/6 text-center">
        {`"${name}" 카드`}를 &nbsp;
        <span style={{ color: 'rgb(239 68 68)' }}>정말 삭제하시겠습니까?</span>
      </p>
    );
  };

  const getContent = () => {
    return (
      <div className="flex justify-center items-center w-full flex-col gap-8 mt-16 mb-16">
        {getModalContent()}
        <p className="text-[#21272a] text-xl font-bold w-5/6 text-center">
          삭제하려면 카드 이름을 입력해주세요.
        </p>
        <textarea
          className="w-3/4 h-20 font-normal rounded-lg border resize-none border-[#babdc0] focus:outline-none focus:ring-1 focus-ring[#4c43ff] ml-4 focus:border-transparent p-2"
          placeholder={name}
          onChange={(e) => setInput(e.target.value)}
        />
      </div>
    );
  };

  return (
    <>
      {getContent()}
      <div className="flex justify-center items-center w-full h-1/6 mb-10 gap-5">
        <Button buttonText="취소" onClick={() => setModal(false)} width="w-32" height="h-12" />
        <Button buttonText="삭제" onClick={deleteData} isDeleteButton width="w-32" height="h-12" />
      </div>
    </>
  );
};

DeleteForm.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  fetchRows: PropTypes.func.isRequired,
};

export default DeleteForm;
