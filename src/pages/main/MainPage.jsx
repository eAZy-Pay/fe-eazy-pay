import { useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import MainBanner from './MainBanner';

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
  const [checkedIndex, setcheckedIndex] = useState(0);

  return (
    <>
      <DefaultLayout banner={<MainBanner />}>
        <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div>

        <HashTagSearch
          tags={omakase.data}
          checkedIndex={checkedIndex}
          setCheckedIndex={setcheckedIndex}
        />
        <CategoryCards
          categoryCards={omakase.data[checkedIndex].cards}
          maxColumn={5}
          maxRow={1}
          showInfo={false}
        />
      </DefaultLayout>
    </>
  );
};

export default MainPage;
