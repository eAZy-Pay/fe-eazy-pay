import DefaultFrame from '../../components/layout/DefaultFrame';
import CategoryBenefit from './CategoryBenefit';
import OverlappedCards from '../../components/card/OverlappedCards';
import { getCardUsageSummary } from '../../apis/CardAPI';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
const CardUsageSummary = ({ userMain, userId }) => {
  const [summary, setSummary] = useState({});
  useEffect(() => {
    if (userId) {
      getCardUsageSummary(userId).then((response) => {
        if (response.data) {
          setSummary(response.data);
        }
      });
    }
  }, [userId]);

  return (
    <>
      <div className="text-4xl mb-4 font-bold self-left inline-block">
        <span className="text-3xl font-extrabold text-main-color">{userMain.userName}</span>
        <span className="text-2xl">님의</span>
        <span className="text-3xl font-extrabold ml-3 text-main-color">혜택</span>
        <span className="text-2xl mr-3">을</span>
        <span className="text-3xl font-extrabold">eAZy</span>
        <span className="text-2xl ">하게 챙겼어요</span>
      </div>
      <div className="sm:flex sm:mb-4">
        <div
          className={`flex flex-col justify-center mb-[3rem] sm:ml-[4rem] sm:mt-0 mx-[6rem] mt-[2rem] sm:mb-0 `}
        >
          <OverlappedCards images={userMain.images} />
        </div>
        <DefaultFrame className={'flex sm:px-[2rem] h-[20rem] '}>
          <div className="flex flex-col text-4xl font-bold w-full ">
            <div className="text-xl flex flex-row gap-2 w-full h-full justify-center">
              {
                summary.categoryBenefitAmount && summary.benefitOfMonth ? (
                  summary.categoryBenefitAmount.map((categoryData, index) =>
                    index < summary.categoryBenefitAmount.length - 1 ? (
                      <CategoryBenefit {...categoryData} rank={index + 1} key={index} />
                    ) : (
                      <div key={index}></div>
                    )
                  )
                ) : (
                  <div className="my-auto mb-[3em] ml-[1em] text-2xl">
                    아직 이번 달 혜택 내역이 없습니다.
                  </div>
                ) // '착시때문에 왼쪽 마진 추가'
              }
              {!summary && '정보를 불러올 수 없습니다.'}
            </div>

            <div className="flex flex-col mt-auto">
              <hr className="border-1 w-full my-[0.5em]" />
              <div className="flex items-center">
                <div className="mt-auto mr-auto">
                  {summary.categoryBenefitAmount &&
                    summary.categoryBenefitAmount[summary.categoryBenefitAmount.length - 1]
                      .benefitAmount > 0 && (
                      <div className="flex py-1 text-lg ml-[1em] mr-auto">
                        그 외 카테고리 :{' '}
                        {summary.categoryBenefitAmount[
                          summary.categoryBenefitAmount.length - 1
                        ].benefitAmount.toLocaleString()}
                        <span className="ml-2">원</span>
                      </div>
                    )}
                </div>

                <span className="text-xl mr-2">이번달</span>
                <div className="text-xl mr-[1rem]">총 혜택</div>
                <div className="text-4xl font-black text-main-color">
                  {summary.benefitOfMonth ? summary.benefitOfMonth.toLocaleString() : 0}
                </div>
                <div className="text-3xl">원</div>
              </div>
            </div>
          </div>
        </DefaultFrame>
      </div>
    </>
  );
};

CardUsageSummary.propTypes = {
  userMain: PropTypes.object.isRequired,
  userId: PropTypes.number.isRequired,
};

export default CardUsageSummary;
