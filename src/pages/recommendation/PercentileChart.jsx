import { useEffect, useState } from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import BounceChart from '../../components/chart/BounceChart';
import PropType from 'prop-types';

/**
 *
 * @param {0,1,2} userState 0: 결제 내역 보유한 사용자, 1: 결제 내역 없는 사용자, 2: 로그인하지 않은 사용자
 * @param {string} userTitle 컴포넌트 제목
 * @param {Array} usageStatics 사용자의 사용량 통계
 * @param {number} totalAmount 사용자의 총 사용 금액
 * @returns
 */
const PercentileChart = ({ userState, userTitle, usageStatics, totalAmount }) => {
  const [rank, setRank] = useState(0);
  const [userRank, setUserRank] = useState(0);
  const [percentileGroup, setPercentileGroup] = useState(100);
  useEffect(() => {
    // totalAmount가 0이 아닐 때만 계산 수행
    var checkBreak = false;
    if (totalAmount > 0) {
      for (let i = 0; i < usageStatics.length; i++) {
        if (usageStatics[i].useAmount >= totalAmount) {
          setPercentileGroup(usageStatics[i].percentile);
          setUserRank(usageStatics[i].percentile / 10);
          checkBreak = true;
          break;
        }
      }
      if (checkBreak) {
        // 루프를 완료했지만 해당되는 그룹을 찾지 못한 경우
        setPercentileGroup(0);
        setUserRank(9);
      }
    } else {
      setRank(5); // totalAmount가 0이면 중간 값으로 설정
    }
  }, [totalAmount, usageStatics]);

  const otherTotalAmount = usageStatics.find((stat) => stat.percentile === rank * 10)?.useAmount;

  return (
    <div className="flex flex-col items-center justify-start w-full h-full">
      <div className="flex w-full justify-start items-center">
        <div className="text-4xl mt-8 mb-4 mr-2 text-main-color">{userTitle}</div>
        <p className="text-3xl text-left mt-8 mb-4">의 소비 분석</p>
      </div>
      <DefaultFrame>
        <div className="flex flex-col w-full h-[32rem] items-center justify-between p-4 gap-4">
          <div className="flex justify-start h-full">
            <div className="flex flex-col items-start justify-start gap-2">
              <div className="flex text-2xl items-center justify-start">
                <div className="flex items-center justify-start">
                  <div className="text-2xl text-main-color">{userTitle}</div>
                  {userState === 0 ? (
                    <div className="text-2xl mr-1">은</div>
                  ) : (
                    <div className="text-2xl mr-1">의</div>
                  )}
                  <div className="text-2xl mr-1">상위</div>
                  <span className="text-3xl font-bold text-[#FF9169]">
                    {totalAmount ? percentileGroup : rank * 10}%
                  </span>
                  <div className="text-2xl">는</div>
                </div>
                <p className="text-2xl mx-1">평균</p>
                <p className="text-2xl font-bold mr-1">
                  {totalAmount ? totalAmount?.toLocaleString() : otherTotalAmount?.toLocaleString()}
                  원
                </p>
                <p className="text-2xl">사용합니다.</p>
              </div>
              {userState === 0 && (
                <p className="text-lg text-gray-500">
                  * {usageStatics[0]?.age}~{usageStatics[0]?.age + 5}세의 상위 {rank * 10}%의 평균
                  소비는 {otherTotalAmount?.toLocaleString()}
                  원입니다.
                </p>
              )}
            </div>
          </div>
          {usageStatics.length > 0 ? (
            <BounceChart
              rank={totalAmount ? userRank : rank}
              setRank={totalAmount ? () => {} : setRank}
            />
          ) : null}
        </div>
      </DefaultFrame>
    </div>
  );
};

PercentileChart.propTypes = {
  userState: PropType.number.isRequired,
  userTitle: PropType.string.isRequired,
  usageStatics: PropType.array.isRequired,
  totalAmount: PropType.number.isRequired,
};

export default PercentileChart;
