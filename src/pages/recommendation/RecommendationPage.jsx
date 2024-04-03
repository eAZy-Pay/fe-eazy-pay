import { useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import CardRecommendation from './CardRecommendation';
import DonutChart from '../../components/chart/DonutChart';
import MainDashBoard from '../../components/layout/MainDashBoard';

const monthlyFor6 = {
  data: [
    {
      categoryName: '생활/주거',
      useAmount: 540_000,
      color: '#1f77b4',
    },
    {
      categoryName: '슈퍼/마트',
      useAmount: 300_000,
      color: '#ff7f0e',
    },
    {
      categoryName: '외식',
      useAmount: 200_000,
      color: '#2ca02c',
    },
    {
      categoryName: '패션',
      useAmount: 150_000,
      color: '#d62728',
    },
    {
      categoryName: '숙박/여행',
      useAmount: 100_000,
      color: '#9467bd',
    },
    {
      categoryName: '문화/취미',
      useAmount: 50_000,
      color: '#8c564b',
    },
    {
      categoryName: '자동차',
      useAmount: 30_000,
      color: '#e377c2',
    },
    {
      categoryName: '기타',
      useAmount: 30_000,
      color: '#7f7f7f',
    },
  ],
};

const dummyCards = {
  data: [
    {
      categoryName: '생활/주거',
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
      cartegoryName: '슈퍼/마트',
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
      cartegoryName: '외식',
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
    {
      categoryName: '패션',
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
      cartegoryName: '숙박/여행',
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
      cartegoryName: '문화/취미',
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
    {
      categoryName: '자동차',
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
      cartegoryName: '기타',
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
  ],
};
const RecommendationPage = () => {
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
      <DefaultLayout
        banner={
          <MainDashBoard
            name="천지민"
            title="<div className='text-2xl font-bold text-left mt-8 mb-4 ml-4'><div> </>"
            // title="님의 6개월 간 소비 내역으로 카드를 추천드릴게요"
            bgColor="#F4F7FC"
            chart={
              <DonutChart
                data={monthlyFor6.data}
                handleLegendClick={handleLegendClick}
                checkedCategoryIndex={checkedCategoryIndex}
              />
            }
          />
        }
      >
        <CardRecommendation
          data={monthlyFor6.data}
          dummyCards={dummyCards.data}
          handleLegendClick={handleLegendClick}
          checkedCategoryIndex={checkedCategoryIndex}
        />
      </DefaultLayout>
    </>
  );
};

export default RecommendationPage;
