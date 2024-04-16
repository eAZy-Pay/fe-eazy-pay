import { useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import SearchImg from '../../assets/searchImg.png';
import useCategoryCards from '../../hooks/useCategoryCards';
import BlockTagSearch from '../../components/search/BlockTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import Banner from '../../components/Banner';
import RecommedImg from '../../assets/recommendImg.png';

const CardSearchPage = () => {
  const categories = [
    { uid: 1, name: '생활/주거' },
    { uid: 2, name: '슈퍼/마트' },
    { uid: 3, name: '외식' },
    { uid: 4, name: '의료' },
    { uid: 5, name: '패션' },
    { uid: 6, name: '숙박/여행' },
    { uid: 7, name: '문화/취미' },
    { uid: 8, name: '자동차' },
    { uid: 9, name: '기타' },
  ];

  const [checkedIndex, setcheckedIndex] = useState(0);
  const categoryId = categories[checkedIndex]?.uid;
  const [searchText, setSearchText] = useState('');

  return (
    <DefaultLayout>
      <p className="text-4xl text-left font-bold">eAZy가 카드를 찾아드릴게요</p>

      <div className="flex items-center justify-center bg-blue-200/50 rounded-lg p-2 my-6 w-full h-20">
        <img src={SearchImg} alt="Search" className="w-16 h-16 object-cover mx-4" />
        <input
          type="text"
          placeholder="카드 이름을 입력해주세요"
          className="flex items-center justify-center w-full h-full object-cover mr-4 bg-transparent outline-none text-lg"
          value={searchText} // value 입력 시 React의 state를 통해 관리가 됨
          onChange={(e) => setSearchText(e.target.value)}
        />
      </div>
      <div className="my-6 text-3xl font-bold">어떤 카드를 찾으시나요?</div>
      <BlockTagSearch
        tags={categories}
        checkedIndex={checkedIndex}
        setCheckedIndex={setcheckedIndex}
      />
      <div className="my-6 text-3xl font-bold">검색 결과</div>
      <CategoryCards categoryCards={useCategoryCards(categoryId)} maxColumn={4} maxRow={3} />
      <Banner
        to={'/card-recommend'}
        title="어떤 카드를 골라야할지 고민이신가요?"
        description="내 소비에 맞는 카드 추천 받기"
        imageSrc={RecommedImg}
      />
    </DefaultLayout>
  );
};

export default CardSearchPage;
