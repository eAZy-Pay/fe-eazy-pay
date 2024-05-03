import { useEffect, useState } from 'react';
import { getQna } from '../apis/QnaAPI';

const useQna = ({ page, size }) => {
  const [qnas, setQnas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchQnas = async (page, size) => {
    const response = await getQna(page, size);
    setQnas(response.content);
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchQnas(page, size);
  }, [page, size]);

  return { qnas, totalPages, fetchQnas };
};

export default useQna;
