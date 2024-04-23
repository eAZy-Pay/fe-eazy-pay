import { useEffect, useState } from 'react';

import DefaultLayout from '../../components/layout/DefaultLayout';
import SearchImg from '../../assets/searchImg.png';
import { getCardsLikeName, getCategoryCards } from '../../apis/CardAPI';
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
  const [categoryCards, setCategoryCards] = useState([]);

  const handleSearch = () => {
    if (searchText === '') {
      return;
    }
    // sql injection 방지
    const regExp = /[`~!@#$%^&*|\\';:/?]/gi;
    if (regExp.test(searchText)) {
      alert('특수문자는 입력할 수 없습니다.');
      return;
    }
    getCardsLikeName(searchText).then(setCategoryCards);
  };

  useEffect(() => {
    getCategoryCards(categoryId).then(setCategoryCards);
  }, [categoryId]);

  // 엔터키 입력 시 검색
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <DefaultLayout>
      <p className="mt-[5rem] text-4xl text-left font-bold">eAZy가 카드를 찾아드릴게요</p>

      <div className="flex items-center justify-center bg-blue-200/50 rounded-lg py-2 px-8 my-6 w-full h-20 text-lg font-bold hover:bg-blue-200">
        <input
          type="text"
          placeholder="카드 이름을 입력해주세요"
          className="flex items-center justify-center w-full h-full object-cover mr-4 bg-transparent outline-none text-lg font-bold"
          value={searchText} // value 입력 시 React의 state를 통해 관리가 됨
          onChange={(e) => setSearchText(e.target.value)}
          onKeyPress={handleKeyPress} // 엔터키 입력 시 검색
        />
        <div
          onClick={handleSearch}
          className="flex items-center justify-center w-20 h-20 cursor-pointer"
        >
          <img src={SearchImg} alt="Search" className="w-16 h-16 object-cover mx-4" />
        </div>
      </div>
      <div className="my-6 text-3xl font-bold">어떤 카드를 찾으시나요?</div>
      <BlockTagSearch
        tags={categories}
        checkedIndex={checkedIndex}
        setCheckedIndex={setcheckedIndex}
      />
      <div className="my-6 text-3xl font-bold">검색 결과</div>
      {categoryCards.length ? (
        <CategoryCards categoryCards={categoryCards} maxColumn={4} maxRow={3} />
      ) : (
        <div className="text-2xl text-center my-6">검색 결과가 없습니다.</div>
      )}

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
