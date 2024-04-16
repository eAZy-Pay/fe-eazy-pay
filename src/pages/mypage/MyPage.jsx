// import React from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import RotatedCard from '../../components/card/RotatedCard';
import DefaultFrame from '../../components/layout/DefaultFrame';
import eazy from '../../assets/eAZyCard.svg';
import CardsGage from '../main/CardsGage';
import CardLetter from '../main/CardLetter';

const userMain = {
  userName: '박선주',
  images: [
    eazy,
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/21/1fa0a89f-0811-43b1-9c24-a4bb8bf750f4.png',
    'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/bfee31ee-d644-4bc8-bbdb-1a4f78eb231c.gif',
  ],
  benefitAmount: 200000,
};

const MyPage = () => {
  // 임시 더미 값
  const ben_amount = 15323; // 받은 혜택
  const ben_total = 50000; // 총 혜택

  return (
    <DefaultLayout>
      {/* 컨텐츠 컨테이너 */}
      <div className="flex justify-between h-auto pt-14">
        <div className="flex flex-col gap-10 w-1/2 p-4">
          {/* 내 정보 */}
          <DefaultFrame boxShadow={false}>
            <div className="flex flex-col mx-6 my-4 gap-14">
              <div className="flex gap-1 ">
                <div className="text-2xl font-extrabold">천지민 </div>
                <div className="text-2xl "> 님</div>
              </div>
              <div className="w-32 h-10 rounded-xl border-2 border-gray-200 flex justify-center items-center ml-auto shadow-md hover:shadow-lg transition duration-300 ease-in-out">
                <div className="text-xl text-center">내 정보 관리</div>
              </div>
            </div>
          </DefaultFrame>
          <DefaultFrame boxShadow={false}>
            {/* 이용내역 */}
            <div className="text-2xl font-extrabold h-96 mx-6 my-4 ">최근 이용내역</div>
          </DefaultFrame>
          <DefaultFrame boxShadow={false}>
            {/* 이용가능금액 */}
            <div className="text-2xl font-extrabold h-80 mx-6 my-4">현재 이용가능 금액</div>
          </DefaultFrame>
        </div>

        {/* 오른쪽 섹션 */}
        <div className="flex-grow p-4">
          <DefaultFrame boxShadow={false}>
            <h2 className="text-2xl font-extrabold mx-6 my-4">내 카드 관리</h2>
            <div className="text-2xl mx-6 my-10">총 혜택</div>
            <DefaultFrame className="flex m-6 max-w-[32rem]">
              <img
                src={eazy}
                alt="Eazy Image"
                className="ml-12"
                style={{ transform: 'rotate(90deg)', maxWidth: '5.75rem', height: 'auto' }}
              />
              <div className="flex flex-col justify-center gap-4">
                <CardsGage color="#f79042" amount={ben_amount} total={ben_total} width="w-3/4" />
                <CardLetter color="#f79042" label="혜택" amount={ben_amount} total={ben_total} />
              </div>
            </DefaultFrame>
            <div className="text-2xl self-left flex items-center mx-6 my-10">카드별 혜택</div>
            <div className="flex flex-col w-full">
              {userMain.images.map(
                (image, index) =>
                  index !== 0 && (
                    <DefaultFrame key={index} className="flex mx-6 mb-11 max-w-[32rem]">
                      <RotatedCard image={image} style={{ maxWidth: '5.75rem', height: 'auto' }} />
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
          </DefaultFrame>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default MyPage;
