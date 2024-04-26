import { useState } from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import HashTagSearch from '../../components/search/HashTagSearch';
import CategoryCards from '../../components/category/CategoryCards';
import MainBanner from './MainBanner';
import useEventCategory from '../../hooks/useEventCategory';
import useHighlightedCardByEventCategoryId from '../../hooks/useHighlightedCardByEventCategoryId';

const MainPage = () => {
  const [checkedIndex, setcheckedIndex] = useState(0);
  const eventCategories = useEventCategory();
  const highlightedCards = useHighlightedCardByEventCategoryId(eventCategories[checkedIndex]?.uid);

  if (!eventCategories || !highlightedCards) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <DefaultLayout banner={<MainBanner />}>
        <div className="my-3 w-auto h-[10em] bg-gray-500">Event</div>

        <HashTagSearch
          tags={eventCategories}
          checkedIndex={checkedIndex}
          setCheckedIndex={setcheckedIndex}
        />
        <CategoryCards categoryCards={highlightedCards} maxColumn={5} maxRow={1} showInfo={false} />
      </DefaultLayout>
    </>
  );
};

export default MainPage;
