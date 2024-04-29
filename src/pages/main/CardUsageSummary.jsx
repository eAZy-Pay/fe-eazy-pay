import DefaultFrame from '../../components/layout/DefaultFrame';
import CategoryBenefit from './CategoryBenefit';
import OverlappedCards from '../../components/card/OverlappedCards';
import PropTypes from 'prop-types';
const CardUsageSummary = ({ userMain }) => {
  const cardUsageSummary = {
    categoryDatas: [
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        categoryName: '생활/주거',
        benefitAmount: 2000,
      },
      {
        categoryName: 'other',
        benefitAmount: 2000,
      },
    ],
    annualFee: 39800,
    benefitOfYear: 15000,
  };

  return (
    <>
      <div className="text-4xl mb-4 font-bold self-left inline-block">
        <span className="text-4xl font-extrabold">{userMain.userName}</span>
        <span className="text-2xl">님의</span>
        <span className="text-3xl font-extrabold mx-3">혜택을</span>
        eAZy 하게 챙겼어요
      </div>
      <div className="flex mb-4">
        <div className={`flex flex-col justify-center`}>
          <OverlappedCards images={userMain.images} />
        </div>
        <DefaultFrame className={'py-[3rem] px-[3rem]'}>
          <div className="flex flex-col justify-between text-4xl font-bold ">
            <div className="text-3xl flex flex-col gap-4 items-end mr-auto">
              {cardUsageSummary.categoryDatas.map((categoryData, index) => (
                <CategoryBenefit {...categoryData} rank={index + 1} key={index} />
              ))}
            </div>

            <div className="ml-auto flex items-end">
              <span className="text-2xl mr-2">이번 달</span>
              <div className="text-3xl mr-[1rem]">총 혜택</div>
              <div className="text-5xl font-black text-blue-700">
                {userMain.benefitAmount.toLocaleString()}
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
  cardUsageSummary: PropTypes.object.isRequired,
};

export default CardUsageSummary;
