import { useState, useContext, useEffect } from 'react';

import Table from '../../components/table/Table';
import useCards from '../../hooks/useCards';

import AdminDefaultLayout from '../../components/layout/AdminDefaultLayout';
import CardPostForm from '../../components/forms/CardPostForm';
import { ModalContext, CurrentPageContext } from '../../App';

import { Button } from '../../components/Button';

const AdminCardPage = () => {
  const { setModal } = useContext(ModalContext);
  const { setCurrentPage } = useContext(CurrentPageContext);
  setCurrentPage(0);

  const [page, setPage] = useState(0);
  const size = 10;
  const { cards, totalPages, fetchCards } = useCards(page, size);
  const [rows, setRows] = useState([]);

  const makeRows = (cards) => {
    if (!cards) return [];
    const result = cards.map((card) => {
      if (card) {
        return [
          card.uid,
          card.name,
          card.annualFee.toLocaleString(),
          card.benefitLimit.toLocaleString(),
          card.performance.toLocaleString(),
        ];
      }
      return {};
    });
    return result;
  };

  useEffect(() => {
    setRows(makeRows(cards));
  }, [cards]);

  const columns = ['이름', '연회비', '혜택한도', '실적기준'];
  const widthList = ['300px', '200px', '200px', '200px'];

  return (
    <AdminDefaultLayout>
      <div className="flex">
        <div className="flex justify-start items-start bg-[#ffffff] w-full">
          <div className="flex flex-col justify-start items-start flex-grow gap-3 py-3 px-6">
            <div className="flex justify-start items-center mb-1 w-full">
              <div className="flex flex-col justify-start items-start flex-grow">
                <p className="text-5xl font-bold text-left text-[#21272a]">카드관리</p>
              </div>
              <div className="w-52 flex justify-center items-center mx-7">
                <Button
                  buttonText="생성"
                  onClick={() => {
                    setModal({
                      isOpen: true,
                      content: <CardPostForm fetchCards={fetchCards} />,
                      title: '카드 생성',
                    });
                  }}
                />
              </div>
            </div>
            <Table
              rows={rows}
              fetchRows={fetchCards}
              columns={columns}
              pageName={'카드'}
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

export default AdminCardPage;
