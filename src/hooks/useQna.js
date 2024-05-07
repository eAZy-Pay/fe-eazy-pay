import { useEffect, useState } from 'react';
import { getQnas } from '../apis/QnaAPI';

const useQna = ({ page, size }) => {
  const [qnas, setQnas] = useState([]);
  const [totalPages, setTotalPages] = useState(0);

  const fetchQnas = async (page, size) => {
    if (!page) page = 0;
    if (!size) size = 10;
    const response = await getQnas(page, size);
    setQnas(response.content);
    setTotalPages(response.totalPages);
  };

  useEffect(() => {
    fetchQnas(page, size);
  }, [page, size]);

  return { qnas, totalPages, fetchQnas };
};

export default useQna;
