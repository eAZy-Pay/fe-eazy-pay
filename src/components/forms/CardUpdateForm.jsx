import PropTypes from 'prop-types';
import { useState, useContext, useEffect } from 'react';
import { updateCard } from '../../apis/CardAPI';
import { ModalContext } from '../../App';
import { Button } from '../Button';
import useCardById from '../../hooks/useCardById';

const CardUpdateForm = ({ id, fetchCards }) => {
  const card = useCardById(id)?.card;

  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [annualFee, setAnnualFee] = useState(0);
  const [benefitLimit, setBenefitLimit] = useState(0);
  const [performance, setPerformance] = useState(0);
  const [info, setInfo] = useState('');

  const { setModal } = useContext(ModalContext);

  useEffect(() => {
    if (card) {
      setImage(card.image);
      setName(card.name);
      setAnnualFee(card.annualFee);
      setBenefitLimit(card.benefitLimit);
      setPerformance(card.performance);
      setInfo(card.info);
    }
  }, [card]);

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
      id,
      image,
      name,
      annualFee,
      benefitLimit,
      performance,
      info,
    };

    updateCard(params).then((res) => {
      setModal(false);
      if (res.errorCode) {
        alert(res.message);
      } else {
        alert('카드 수정 성공!');
      }
      fetchCards();
    });
  };

  if (!card) {
    return <div>로딩 중...</div>;
  }

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
              onChange={(e) => setAnnualFee(e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <label className="text-[black] w-24 font-bold ">혜택 한도</label>
            <input
              type="number"
              value={benefitLimit}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setBenefitLimit(e.target.value)}
            />
          </div>
          <div className="flex w-full">
            <label className="text-[black] w-24 font-bold ">전월 실적</label>
            <input
              type="number"
              value={performance}
              className="w-3/4 h-12 font-normal rounded-lg border p-[10px] border-[#babdc0] ml-4 focus:outline-none  focus:ring-1 focus:ring-[#4c43ff]"
              onChange={(e) => setPerformance(e.target.value)}
            />
          </div>
          <div className="flex justify-start items-center w-full">
            <label className="text-[black] font-bold w-24">카드 정보</label>
            <textarea
              className="w-3/4 h-34 font-normal rounded-lg border border-[#babdc0] ml-4 resize-none focus:outline-none focus:ring-1 focus:ring-[#4c43ff]"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center w-4/5 h-1/6 mb-5">
        <Button buttonText="수정" onClick={handleSubmit} width="w-48" height="h-12" />
      </div>
    </>
  );
};

CardUpdateForm.propTypes = {
  id: PropTypes.number.isRequired,
  fetchCards: PropTypes.func.isRequired,
};

export default CardUpdateForm;
