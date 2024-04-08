// import React from "react";
import RotatedCard from '../../components/card/RotatedCard';
import CardsGage from './CardsGage';
import CardLetter from './CardLetter';

const UserMainComponent = ({ image }) => {
  const ben_amount = 15323;  // 받은 혜택
  const ben_total = 50000;   // 총 혜택
  const per_amount = 2532949;  // 사용 금액
  const per_total = 5000000;   // 총 한도


  return (
    <>
      <div className='flex items-center justify-center'>
        <RotatedCard image={image} />
        <div className='flex flex-col items-center gap-8'>
          <div className='flex'>
            <CardsGage color="#f79042" amount={ben_amount} total={ben_total} />
            <CardLetter color="#f79042" label="혜택" amount={ben_amount.toLocaleString()} total={ben_total.toLocaleString()} />
          </div>
          <div className='flex'>
            <CardsGage color="#70a6e8" amount={per_amount} total={per_total} />
            <CardLetter color="#70a6e8" label="실적" amount={per_amount.toLocaleString()} total={per_total.toLocaleString()} />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserMainComponent;
