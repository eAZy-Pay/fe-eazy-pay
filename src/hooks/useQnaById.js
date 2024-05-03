import { useEffect, useState } from 'react';
import { getQna } from '../apis/QnaAPI';

const useQnaById = ({ uid }) => {
  const [qna, setQna] = useState({});

  useEffect(() => {
    const fetchQna = async () => {
      const data = await getQna({ uid });
      setQna(data);
    };
    fetchQna();
  }, [uid]);

  return qna;
};

export default useQnaById;
