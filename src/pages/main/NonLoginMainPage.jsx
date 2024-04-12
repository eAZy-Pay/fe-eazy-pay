import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import DefaultLayout from '../../components/layout/DefaultLayout';
import CardCategorySearch from '../recommendation/CardCategorySearch';
import OverlappedCard from '../../assets/overlappedCard.png';
const omakase = {
  data: [
    {
      categoryName: '인기카드',
      cards: [
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
          name: '카드의정석 EVERY 1',
          info: '전월실적/할인한도 없이 EVERYTIME 1%',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
          name: '카드의정석 EVERY 1',
          info: '전월실적/할인한도 없이 EVERYTIME 1%',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/f7886e80-e7cb-4f54-b30c-bf9bd0a351f4.gif',
          name: '카드의정석 EVERY CHECK',
          info: 'EVERYTIME EVERYWHERE EVERYWOORI',
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
    {
      categoryName: '연회비무료',
      cards: [
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/f7886e80-e7cb-4f54-b30c-bf9bd0a351f4.gif',
          name: '카드의정석 EVERY CHECK',
          info: 'EVERYTIME EVERYWHERE EVERYWOORI',
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
          name: '카드의정석 EVERY 1',
          info: '전월실적/할인한도 없이 EVERYTIME 1%',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
          name: '카드의정석 EVERY 1',
          info: '전월실적/할인한도 없이 EVERYTIME 1%',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
    {
      categoryName: '이벤트카드',
      cards: [
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/f7886e80-e7cb-4f54-b30c-bf9bd0a351f4.gif',
          name: '카드의정석 EVERY CHECK',
          info: 'EVERYTIME EVERYWHERE EVERYWOORI',
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/f7886e80-e7cb-4f54-b30c-bf9bd0a351f4.gif',
          name: '카드의정석 EVERY CHECK',
          info: 'EVERYTIME EVERYWHERE EVERYWOORI',
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
        {
          image:
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/e7b88886-8706-4bfd-be01-29ec5a77fd19.gif',
          name: '카드의정석 EVERY 1',
          info: '전월실적/할인한도 없이 EVERYTIME 1%',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
  ],
};

const MainPage = () => {
  const navigate = useNavigate();
  const [checkedIndex, setcheckedIndex] = useState(0);
  const handleLegendClick = (seriesIndex) => {
    setcheckedIndex(seriesIndex);
  };

  useEffect(() => {
    if (sessionStorage.getItem('user') !== null) {
      navigate('/main');
    }
  }, [navigate]);

  return (
    <>
      <DefaultLayout>
        <div className="p-3 relative">
          <div className="flex justify-center items-center flex-col absolute z-10 inset-0 bg-white bg-opacity-50 backdrop-filter backdrop-blur-sm">
            <div className="mx-auto  mt-4 bottom-1/2 text-center text-3xl ">
              로그인 하면 얼마나 혜택을 받을 수 있는지 알 수 있어요
            </div>
            <Link to="/login">
              <div className="mt-[1rem] mx-auto w-[13rem] py-3 rounded-[20px] bg-[#1d92e9] text-2xl text-center text-white">
                로그인 하기
              </div>
            </Link>
          </div>

          <img src={OverlappedCard} alt="Card" className="w-auto h-auto" />
          <div className="absolute right-0 bottom-5">
            <div className="mr-[15rem] flex-end relative">
              <span className="text-5xl font-black text-blue-700 relative">???</span>
              <span className="text-3xl">원</span>
            </div>
          </div>
        </div>

        <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div>

        <CardCategorySearch
          data={omakase.data}
          categoryCards={omakase.data[checkedIndex].cards}
          handleLegendClick={handleLegendClick}
          checkedIndex={checkedIndex}
          maxColumn={5}
          maxRow={1}
          showInfo={false}
        />
      </DefaultLayout>
    </>
  );
};

export default MainPage;
