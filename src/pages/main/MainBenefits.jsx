import OverlappedCards from '../../components/card/OverlappedCards';
import CategoryBenefit from './CategoryBenefit';
import PropTypes from 'prop-types';

import arrowIcon from '../../assets/arrowIcon.svg';
const MainBenefits = ({ userMain }) => {
  const Data = {
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
    ],
    other: 1000,
    annualFee: 39800,
    benefitOfYear: 15000,
  };

  return (
    <>
      <div className="mb-3">
        <div className="flex flex-row justify-between relative">
          <div className={`ml-[3em]`}>
            <OverlappedCards images={userMain.images} />
          </div>

          <div className="text-2xl z-50">
            <div className="bg-white rounded-md px-5 py-3 shadow">
              <span className="text-3xl font-bold">{userMain.userName}</span>님께서
              <span className="font-extrabold mx-3">이달 받은 혜택</span>
              {Data.categoryDatas.map((categoryData, index) => (
                <CategoryBenefit {...categoryData} rank={index + 1} key={index} />
              ))}
              {Data.other && (
                <div className="ml-auto">
                  그 외 카테고리에서 {Data.other}
                  <span>원</span>{' '}
                </div>
              )}
            </div>
          </div>
          <img className="ml-auto" src={arrowIcon}></img>
          <img src={arrowIcon}></img>

          <div className="border-l border-solid border-gray-300 h-50 ml-auto mr-[4rem]"></div>

          <div className="absolute text-sm right-[3.7rem] top-0">
            <div className="mt-auto">
              <div className="flex text-blue-600 ">
                - 내고있는 연회비 :<div>{Data.annualFee}</div>
                <div>원</div>
              </div>

              <div className="flex text-sm text-red-600">
                + 올해 받은 혜택 :<div>{Data.benefitOfYear}</div>
                <div>원</div>
              </div>
            </div>
            <div className="border-t border-solid border-gray-300 w-full my-auto"></div>
          </div>

          <div className="mt-auto mr-[3rem] relative">
            <div className="flex items-center">
              <div className="text-3xl">총 혜택</div>
              <div className="text-5xl font-black text-blue-700">
                {userMain.benefitAmount.toLocaleString()}
              </div>
              <div className="text-3xl">원</div>
            </div>

            <div>
              <div className="h-[1.8rem]"></div>
              <div className="text-2xl ml-auto absolute right-0 bottom-0">받았어요</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

MainBenefits.propTypes = {
  userMain: PropTypes.object.isRequired,
};

export default MainBenefits;
