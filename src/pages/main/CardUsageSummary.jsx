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
      <div className="flex mb-4">
        <div className={`flex flex-col justify-center`}>
          {/* TODO: 그림자 추가 */}
          <OverlappedCards images={userMain.images} />
        </div>
        <DefaultFrame className={'py-[3rem] px-[3rem]'}>
          <div className="flex flex-col justify-between text-4xl font-bold ">
            <div className="text-3xl flex flex-col gap-4 items-start mr-auto">
              {
                summary.categoryBenefitAmount && summary.benefitOfMonth
                  ? summary.categoryBenefitAmount.map((categoryData, index) => (
                      <CategoryBenefit {...categoryData} rank={index + 1} key={index} />
                    ))
                  : '이번 달 혜택 내역이 없습니다.' // '올해 혜택받은 내역이 없습니다'
              }
              {!summary && '정보를 불러올 수 없습니다.'}
            </div>
            <hr className="border-t-1 border-gray-300 w-full mt-10 mb-5" />
            <div className="ml-auto flex items-end">
              <span className="text-2xl mr-2">이번달</span>
              <div className="text-2xl mr-[1rem]">총 혜택</div>
              <div className="text-5xl font-black text-blue-700">
                {summary.benefitOfMonth ? summary.benefitOfMonth.toLocaleString() : 0}
              </div>
              <div className="text-3xl">원</div>
              {/* <div className="text-2xl ml-auto ">받았어요</div> */}
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
