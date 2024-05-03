import { useContext } from 'react';
import PropTypes from 'prop-types';
import Cell from './Cell';
import { Button } from '../Button';
import { ModalContext } from '../../App';
import CardUpdateForm from '../forms/CardUpdateForm';
import DeleteForm from '../forms/DeleteForm';
import QnaAnswerForm from '../forms/QnaAnswerForm';

const Row = ({ id, fetchRows, row, pageName, widthList }) => {
  const makeCell = (row) => {
    const result = [];
    row.map((cell, index) => {
      result.push(
        <Cell key={index} value={cell} width={widthList[index]} bgColor={'#ffffff'}></Cell>
      );
    });

    return result;
  };
  const { setModal } = useContext(ModalContext);

  const getEditForm = () => {
    if (pageName === '카드') {
      return <CardUpdateForm id={id} fetchCards={fetchRows} />;
    }
    if (pageName === 'QnA') {
      return <QnaAnswerForm id={id} fetchQnas={fetchRows} />;
    }
  };

  const getUsage = () => {
    if (pageName === 'QnA') {
      return '답변';
    }
    return '수정';
  };

  return (
    <>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[#ffffff] border border-[#dde1e6]">
        <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 overflow-hidden mx-7">
          {makeCell(row)}
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 w-52 gap-[15px] bg-[#ffffff]">
            <Button
              buttonText={getUsage()}
              onClick={() => {
                setModal({
                  isOpen: true,
                  content: getEditForm(),
                  title: pageName + ' ' + getUsage(),
                });
              }}
            />
            <Button
              buttonText={'삭제'}
              onClick={() => {
                setModal({
                  isOpen: true,
                  content: (
                    <DeleteForm id={id} pageName={pageName} name={row[0]} fetchRows={fetchRows} />
                  ),
                  title: pageName + ' 삭제',
                });
              }}
              isDeleteButton
            />
          </div>
        </div>
      </div>
    </>
  );
};

Row.propTypes = {
  id: PropTypes.number.isRequired,
  fetchRows: PropTypes.func.isRequired,
  row: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
  widthList: PropTypes.array.isRequired,
};

export default Row;
