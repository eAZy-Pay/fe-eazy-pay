import { useEffect, useState } from 'react';
import { getEventCategory } from '../apis/CategoryAPI';

const useEventCategory = () => {
  const [eventCategories, setEventCategories] = useState([]);

  useEffect(() => {
    getEventCategory().then(setEventCategories);
  }, []);

  return eventCategories;
};

export default useEventCategory;
