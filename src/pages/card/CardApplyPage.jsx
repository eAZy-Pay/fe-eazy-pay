import { useParams } from 'react-router';
import useCardById from '../../hooks/useCardById';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DefaultFrame from '../../components/layout/DefaultFrame';
import CardDetail from './CardDetail';
import { Button } from '../../components/Button';
import { getUserSession } from '../../utils/authUtils';
import { postUserCardApplication, checkUserCard } from '../../apis/UserAPI';
import { useEffect } from 'react';

const CardApplyPage = () => {
  const { id } = useParams();
  const user = getUserSession();

  // 카드 신청 페이지 진입 시, 해당 카드를 이미 소유중이면 메인 페이지로 이동
  useEffect(() => {
    checkUserCard(user.uid, id).then((response) => {
      if (response?.message || response?.error) {
        alert(response.message || response.error);
        window.location.href = '/';
      }
    });
  }, [user.uid, id]);

  const cardWithBenefit = useCardById(id);

  if (!cardWithBenefit) {
    return <div>loading...</div>;
  }

  return (
    <DefaultLayout
      banner={
        <DefaultFrame>
          <CardDetail
            card={cardWithBenefit.card}
            benefitList={cardWithBenefit.benefitList}
            showApplyButton={false}
          />
        </DefaultFrame>
      }
      bannerClassName={'py-14 bg-[#F4F7FC]'}
    >
      <div className="flex flex-col justify-center items-center w-full h-4/6">
        <div className="mt-[5rem] mb-8 text-4xl font-bold self-left">
          eAZy에서 해당 카드를 신청해보세요!
        </div>

        <Button
          buttonText="카드 발급"
          onClick={() => {
            postUserCardApplication({ userId: user.uid, cardId: id }).then((response) => {
              if (response?.message) {
                alert(response.message);
                window.location.href = '/';
              } else if (response?.error) {
                alert(response.error);
              } else {
                alert('카드 신청에 실패했습니다.');
              }
            });
          }}
          width={'w-48'}
          height={'h-20'}
          textSize={'text-2xl'}
        />
      </div>
    </DefaultLayout>
  );
};

export default CardApplyPage;
