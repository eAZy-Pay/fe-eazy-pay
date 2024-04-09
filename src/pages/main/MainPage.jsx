import { useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import MainBenefits from './MainBenefits';
import eazy from '../../assets/eAZyCard.svg';
import CardRecommendation from '../recommendation/CardRecommendation';
import CardPerfomance from '../main/CardPerformance';
// import React from 'react';

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

const omakase = {
  data: [
    {
      categoryName: '인기카드',
      useAmount: 540_000,
      color: '#1f77b4',
    },
    {
      categoryName: '연회비무료',
      useAmount: 300_000,
      color: '#ff7f0e',
    },
    {
      categoryName: '이벤트카드',
      useAmount: 200_000,
      color: '#2ca02c',
    },
  ],
};

const dummyCards = {
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
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2024/2/6/ddd6fc74-1334-410d-b682-5379f5ba98d1.png',
          name: '카드의 정석 EVERY POINT',
          info: '모두를 위한 간편 혜택',
          applicationUrl: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
    {
      cartegoryName: '연회비무료',
      cards: [
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
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
    {
      cartegoryName: '이벤트카드',
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
            'https://pc.wooricard.com/webcontent/cdPrdImgFileList/2023/7/17/f7886e80-e7cb-4f54-b30c-bf9bd0a351f4.gif',
          name: '카드의정석 EVERY CHECK',
          info: 'EVERYTIME EVERYWHERE EVERYWOORI',
          application_url: 'https://pc.wooricard.com/dcpc/yh1/crd/crd01/H1CRD101S03.do',
        },
      ],
    },
  ],
};
const MainPage = () => {
  const [checkedCategoryIndex, setCheckedCategoryIndex] = useState(0);
  const handleLegendClick = (seriesIndex) => {
    if (checkedCategoryIndex === seriesIndex) {
      setCheckedCategoryIndex(-1);
    } else {
      setCheckedCategoryIndex(seriesIndex);
    }
  };

  return (
    <>
      <DefaultLayout>
        <div className="my-4">
          <MainBenefits userMain={userMain} />
        </div>

        <div>
          {userMain.images.map(
            (image, index) => index !== 0 && <CardPerfomance key={index} image={image} />
          )}
        </div>

        <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div>

        <CardRecommendation
          data={omakase.data}
          dummyCards={dummyCards.data}
          handleLegendClick={handleLegendClick}
          checkedCategoryIndex={checkedCategoryIndex}
        />
      </DefaultLayout>
    </>
  );
};

export default MainPage;
