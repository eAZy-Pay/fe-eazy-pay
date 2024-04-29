// import React from 'react';
import { useLocation } from 'react-router-dom';
import DefaultLayout from '../../components/layout/DefaultLayout';
import DefaultFrame from '../../components/layout/DefaultFrame';
import { useEffect, useState } from 'react';
import { getUserCardByUid } from '../../apis/CardAPI';

const SelectedCard = () => {
  // 현재 위치의 정보를 가져옴
  const location = useLocation(); // 현재 위치 정보를 가져옴
  const [userCard, setUserCard] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selectcard = await getUserCardByUid(location.state);

        setUserCard(selectcard); // 상태 업데이트
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, [location.state]);

  // num이 undefined가 아니면 마스킹 처리
  const maskedNum = userCard.num ? userCard.num.slice(-4).replace(/\d(?=\d{0}$)/, '*') : '';

  return (
    <DefaultLayout>
      <DefaultFrame className="border-solid border-[#962DFF] p-7 mt-10">
        {userCard && userCard.card && (
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                src={userCard.card.image}
                className="mx-5"
                style={{ width: '5rem', height: 'auto' }}
                alt="Selected Card"
              />
              <div className="flex flex-col gap-3">
                <div className="text-2xl">{userCard.card.name}</div>
                <div className="text-xl text-gray-400">카드 번호 {maskedNum}</div>
              </div>
            </div>
            <button className="flex justify-center items-center w-32 h-10 rounded-xl border-2 border-gray-200 shadow-md hover:shadow-lg transition duration-300 ease-in-out">
              <div className="text-xl text-center">카드변경</div>
            </button>
          </div>
        )}
      </DefaultFrame>

      {userCard && userCard.card && (
        <div className="flex flex-col w-1/2 gap-10 p-4 mt-10">
          <DefaultFrame className="border-none " boxShadow={false}>
            <div
              className="flex flex-col justify-center items-center rounded-lg "
              style={{
                backgroundColor: '#F4F7FC',
              }}
            >
              <img src={userCard.card.image} className="p-10" alt="Selected Card" />
            </div>
          </DefaultFrame>
        </div>
      )}
    </DefaultLayout>
  );
};

export default SelectedCard;
