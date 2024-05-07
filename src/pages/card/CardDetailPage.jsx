import { useParams } from 'react-router-dom';
import CardDetail from './CardDetail';
import DefaultLayout from '../../components/layout/DefaultLayout';
import useCardById from '../../hooks/useCardById';
import DefaultFrame from '../../components/layout/DefaultFrame';

const CardDetailPage = () => {
  const { id } = useParams();
  const cardWithBenefit = useCardById(id);

  if (!cardWithBenefit) {
    return <div>Loading...</div>;
  }
  const formatAnnualFee = (fee) => (fee === 0 ? '없음' : `${fee.toLocaleString()}원`);
  const formatBenefitLimit = (limit) => (limit >= 999999 ? '없음' : `${limit.toLocaleString()}원`);

  return (
    <DefaultLayout
      banner={
        <DefaultFrame>
          <CardDetail card={cardWithBenefit.card} benefitList={cardWithBenefit.benefitList} />
        </DefaultFrame>
      }
      bannerClassName={'py-14 bg-[#F4F7FC]'}
    >
      <div className="flex flex-col items-center w-full mt-10">
        <div className="flex gap-2 text-lg font-light">
          <div>{`연회비: ${formatAnnualFee(cardWithBenefit.card.annualFee)}`}</div>
          <div>{` / `}</div>
          <div>{`전월 실적 기준: ${cardWithBenefit.card.performance.toLocaleString()}원`}</div>
          <div>{` / `}</div>
          <div>{`혜택 한도: ${formatBenefitLimit(cardWithBenefit.card.benefitLimit)}`}</div>
        </div>
        <div className="text-red-500 text-sm mt-2">
          <strong>주의사항:</strong> 연회비 환급 조건을 꼭 확인하세요.
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CardDetailPage;
