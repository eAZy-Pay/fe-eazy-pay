// import React from 'react';
import DefaultFrame from '../../components/layout/DefaultFrame';
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from '../main/CardsGage';
import CardLetter from '../main/CardLetter';
import ArrowIcon from './ArrowIcon';
import eazy from '../../assets/eAZyCard.svg';
import PropTypes from 'prop-types';

const CardManagement = ({ images }) => {
  // 임시 더미 값
  const ben_amount = 15323; // 받은 혜택
  const ben_total = 50000; // 총 혜택

  return (
    <div className="flex-grow p-4">
      <DefaultFrame boxShadow={false}>
        <div className=" flex justify-between items-center text-2xl ">
          <h2 className="text-2xl font-extrabold ml-6 mr-1 my-4">내 카드 관리</h2>
          <ArrowIcon />
          {/* 카드 편집 버튼 */}
          <div className="w-32 h-10 mr-8 rounded-xl border-2 border-gray-200 flex justify-center items-center ml-auto shadow-md hover:shadow-lg transition duration-300 ease-in-out">
            <div className="text-xl text-center">카드 편집</div>
          </div>
        </div>
        {/* 이지카드 총 혜택 */}
        <div className="text-2xl mx-6 my-10">총 혜택</div>
        <DefaultFrame className="flex m-6 max-w-[32rem]">
          <img
            src={eazy}
            alt="Eazy Image"
            className="ml-9"
            style={{ transform: 'rotate(90deg)', maxWidth: '5.75rem', height: 'auto' }}
          />
          <div className="flex flex-col justify-center gap-4">
            <CardsGage color="#f79042" amount={ben_amount} total={ben_total} width="w-3/4" />
            <CardLetter color="#f79042" label="총 혜택" amount={ben_amount} total={ben_total} />
          </div>
        </DefaultFrame>
        {/* 카드관리 */}
        <div className="text-2xl self-left flex items-center mx-6 my-10">카드 관리</div>
        <div className="flex flex-col w-full">
          {images.map(
            (image, index) =>
              index !== 0 && (
                <DefaultFrame key={index} className="flex mx-6 mb-11 max-w-[32rem]">
                  < RotatedCard image={image} style={{ maxWidth: '5.75rem', height: 'auto' }} />
                  <div className="flex flex-col justify-center gap-4">
                    <CardsGage
                      color="#f79042"
                      amount={ben_amount}
                      total={ben_total}
                      width="w-3/4"
                    />
                    <CardLetter
                      color="#f79042"
                      label="혜택"
                      amount={ben_amount}
                      total={ben_total}
                    />
                  </div>
                </DefaultFrame>
              )
          )}
        </div>
      </DefaultFrame >
    </div >
  );
};

CardManagement.propTypes = {
  images: PropTypes.array,
};

export default CardManagement;
