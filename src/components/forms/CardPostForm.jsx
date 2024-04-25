import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { postCard } from '../../apis/CardAPI';
import { ModalContext } from '../../App';
import { Button } from '../Button';

const CardPostForm = ({ fetchCards }) => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [annualFee, setAnnualFee] = useState(0);
  const [benefitLimit, setBenefitLimit] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [info, setInfo] = useState('');

  const { setModal } = useContext(ModalContext);

  const handleSubmit = () => {
    if (name === '') {
      alert('카드 이름을 입력해주세요.');
      return;
    }
    if (image === '') {
      alert('카드 이미지를 입력해주세요.');
      return;
    }
    if (annualFee < 0) {
      alert('연회비는 0이상이어야 합니다.');
      return;
    }
    if (benefitLimit < 0) {
      alert('혜택 한도는 0이상이어야 합니다.');
      return;
    }
    if (performance < 0) {
      alert('전월 실적은 0이상이어야 합니다.');
      return;
    }

    const params = {
      image,
      name,
      annualFee,
      benefitLimit,
      performance,
      info,
    };

    postCard(params).then((res) => {
      setModal(false);
      if (res.errorCode) {
        alert(res.message);
      } else {
        alert('카드 생성 성공!');
      }
      fetchCards();
    });
  };

  return (
    <>
      <div className="flex justify-center items-center w-full h-4/6">
        <div className="flex flex-col gap-5 w-4/5">
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] w-24 font-bold ">카드 이미지</label>
            <input
              value={image}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] w-24 font-bold ">카드 이름</label>
            <input
              value={name}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <label className="text-[black] w-24 font-bold ">연회비</label>
            <input
              type="number"
              value={annualFee}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setAnnualFee(parseInt(e.target.value))}
            />
          </div>
          <div className="flex w-full">
            <label className="text-[black] w-24 font-bold ">혜택 한도</label>
            <input
              type="number"
              value={benefitLimit}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setBenefitLimit(parseInt(e.target.value))}
            />
          </div>
          <div className="flex w-full">
            <label className="text-[black] w-24 font-bold ">전월 실적</label>
            <input
              type="number"
              value={performance}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setPerformance(parseInt(e.target.value))}
            />
          </div>
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] font-bold w-24">카드 정보</label>
            <textarea
              className="w-3/4 h-34 font-normal rounded-lg border border-[#babdc0] ml-4 resize-none focus:outline-none focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-4/5 h-1/6 mb-5">
        <Button buttonText="생성" onClick={handleSubmit} width="w-48" height="h-12" />
      </div>
    </>
  );
};

CardPostForm.propTypes = {
  fetchCards: PropTypes.func.isRequired,
};

export default CardPostForm;
