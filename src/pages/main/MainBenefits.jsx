//import React from 'react'
import OverlappedCards from '../../components/card/OverlappedCards';
import PropTypes from 'prop-types';
const MainBenefits = ({ userMain }) => {
  return (
    <>
      <div>
        <div className="flex justify-between relative">
          <div className="flex self-start">
            <OverlappedCards images={userMain.images} />
            <div className="text-2xl mx-5">
              <div>
                <span className="text-3xl font-bold">{userMain.userName}</span>님이
              </div>
              <span className="font-extrabold">3개월</span>간 받은 혜택
            </div>
          </div>

          <div className="flex-end relative mx-5 mt-[8rem] self-bottom right-10">
            <span className="text-5xl font-black text-blue-700 relative">
              {userMain.benefitAmount.toLocaleString()}
            </span>
            <span className="text-3xl">원</span>
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
