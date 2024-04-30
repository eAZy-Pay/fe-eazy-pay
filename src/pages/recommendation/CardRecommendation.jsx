import { useState, useEffect } from 'react';
import useRecommendationCard from '../../hooks/useRecommendationCard';
import { Button } from '../../components/Button';
import Slider from '../../components/slider/Slider';
import { getUserSession } from '../../utils/authUtils';

const CardRecommendation = () => {
  const user = getUserSession();
  const recommendationCard = useRecommendationCard(user?.uid || 0);
  const recommendList = recommendationCard.recommendList;
  // const userTop3CategoryCardList = recommendationCard?.userTop3CategoryCardList;
  const userTop3UseAmountCardList = recommendationCard?.userTop3UseAmountCardList;
  const userTop3CategoryUseAmountList = recommendationCard.userTop3CategoryUseAmountList;
  const [contents, setContents] = useState([]);

  const makeContents = (recommendList) => {
    setContents(
      recommendList.map((cardWithBenefit, index) => (
        <>
          {userTop3UseAmountCardList?.length > 0 && userTop3CategoryUseAmountList?.length > 0 ? (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">
                  {' '}
                  3개월간 {userTop3CategoryUseAmountList[index].categoryName}에서{' '}
                </p>

                <p className="text-2xl font-bold">
                  {' '}
                  {userTop3CategoryUseAmountList[index].useAmount.toLocaleString()}원을
                  사용하셨습니다.
                </p>
                <p className="text-2xl font-bold"> {cardWithBenefit.card.name}</p>
                <p className="text-2xl font-bold">카드를 추천합니다.</p>
              </div>
              <img
                className="w-[157.71px] h-[251.98px]"
                key={cardWithBenefit.card.uid}
                src={cardWithBenefit.card.image}
                alt={cardWithBenefit.card.name}
              />
              <div className="mb-10">
                <Button
                  onClick={() => {
                    window.location.href = `/card-detail/${cardWithBenefit.card.uid}`;
                  }}
                  buttonText="자세히 보기"
                />
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="flex flex-col items-center justify-center">
                <p className="text-2xl font-bold">
                  {' '}
                  사용자들이 {userTop3CategoryUseAmountList[index]?.categoryName}에서 많이 사용하는{' '}
                </p>
                <p className="text-2xl font-bold"> {cardWithBenefit.card.name}</p>
                <p className="text-2xl font-bold">카드를 추천합니다.</p>
              </div>
              <img
                className="w-[157.71px] h-[251.98px]"
                key={cardWithBenefit.card.uid}
                src={cardWithBenefit.card.image}
                alt={cardWithBenefit.card.name}
              />
              <div className="mb-10">
                <Button
                  onClick={() => {
                    window.location.href = `/card-detail/${cardWithBenefit.card.uid}`;
                  }}
                  buttonText="자세히 보기"
                />
              </div>
            </div>
          )}
          {/*  */}
        </>
      ))
    );
  };
  useEffect(() => {
    if (recommendList?.length > 0) {
      makeContents(recommendList);
    }
  }, [recommendList]);

  return (
    <>
      <Slider Contents={contents} className={'max-w-[400px]'} />
    </>
  );
};

export default CardRecommendation;
