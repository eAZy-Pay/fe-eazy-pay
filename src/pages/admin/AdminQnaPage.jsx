import { useState, useContext, useEffect } from 'react';

import Table from '../../components/table/Table';
import useQna from '../../hooks/useQna';

import AdminDefaultLayout from '../../components/layout/AdminDefaultLayout';
import { CurrentPageContext } from '../../App';

const AdminQnaPage = () => {
  const { setCurrentPage } = useContext(CurrentPageContext);
  useEffect(() => {
    setCurrentPage(1);
  }, []);

  const [page, setPage] = useState(0);
  const size = 10;
  const { qnas, totalPages, fetchQnas } = useQna({ page, size });
  const [rows, setRows] = useState([]);

  const makeRows = () => {
    if (!qnas) return [];
    const result = qnas.map((qna) => {
      if (qna) {
        return [qna.uid, qna.title, qna.content, qna.userName, qna.date, qna.answered ? 'O' : 'X'];
      }
      return {};
    });
    return result;
  };

  useEffect(() => {
    setRows(makeRows(qnas));
  }, [qnas]);

  const columns = ['제목', '내용', '작성자', '등록일시', '답변여부'];
  const widthList = ['250px', '250px', '100px', '200px', '100px'];

  return (
    <AdminDefaultLayout>
      <div className="flex">
        <div className="flex justify-start items-start bg-[#ffffff] w-full">
          <div className="flex flex-col justify-start items-start flex-grow gap-3 py-3 px-6">
            <div className="flex justify-start items-center mb-1 w-full">
              <div className="flex flex-col justify-start items-start flex-grow">
                <p className="text-5xl font-bold text-left text-[#21272a]">QnA관리</p>
              </div>
            </div>
            <Table
              rows={rows}
              fetchRows={fetchQnas}
              columns={columns}
              pageName={'QnA'}
              currentPage={page}
              totalPages={totalPages}
              setPage={setPage}
              widthList={widthList}
            />
          </div>
        </div>
      </div>
    </AdminDefaultLayout>
  );
};

export default AdminQnaPage;
