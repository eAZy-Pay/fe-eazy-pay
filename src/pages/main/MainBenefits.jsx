//import React from 'react'
import OverlappedCards from '../../components/card/OverlappedCards';
import PropTypes from 'prop-types';
const MainBenefits = ({ userMain }) => {
  return (
    <>
      <div>
        <div className="relative flex justify-between">
          <div className="flex self-start">
            <OverlappedCards images={userMain.images} />
            <div className="mx-5 text-2xl">
              <div>
                <span className="text-3xl font-bold">{userMain.userName}</span>님이
              </div>
              <span className="font-extrabold">3개월</span>간 받은 혜택
            </div>
          </div>

          <div className="mx-5 flex-end relative top-0 mt-[8rem] self-bottom">
            <span className="text-5xl font-black text-blue-700 relative absolute right-0">
              {userMain.benefitAmount}
            </span>
            <span className="text-3xl">원</span>
          </div>
        </div>
      </div>
    </>
  );
};

MainBenefits.propTypes = {
  userMain: PropTypes.node.isRequired,
};
export default MainBenefits;
