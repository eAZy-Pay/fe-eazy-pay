import { useParams } from 'react-router';
import CreditCard from '../../components/card/CreditCard';
import useCardById from '../../hooks/useCardById';

const CardApply = () => {
  const { id } = useParams();
  const card = useCardById(id)?.card;

  if (!card) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex w-full">
        <CreditCard card={card} showName={false} showInfo={false} useLink={false} />
        <div className="flex flex-col p-6">
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl font-semibold">{card.name}</h1>
            <div className="w-full text-2xl font-medium">{card.info}</div>
            <div className="flex flex-col items-baseline mt-4">해당 카드를 신청중입니다.</div>
          </div>
        </div>
      </div>
      <div className="flex space-x-4 mb-6 text-sm font-medium">
        <div className="flex-auto flex space-x-4">
          <button
            className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
            type="button"
            onClick={() => window.open(card.applicationUrl, '_blank')}
          >
            카드 신청
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardApply;
