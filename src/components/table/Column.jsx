import Cell from './Cell';
import PropTypes from 'prop-types';

const Column = ({ columns, widthList }) => {
  const makeColumns = (columns, widthList) => {
    const result = [];
    columns.map((column, index) => {
      result.push(
        <Cell key={index} value={column} width={widthList[index]} bgColor={'#f2f4f8'}></Cell>
      );
    });
    return result;
  };
  return (
    <>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 overflow-hidden bg-[#f2f4f8] border border-[#dde1e6]">
        <div className="flex justify-start items-end self-stretch flex-grow-0 flex-shrink-0 overflow-hidden px-7">
          {makeColumns(columns, widthList)}
          <div className="flex flex-col justify-center items-start self-stretch flex-grow-0 w-52 border-t border-r-0 border-b-0 border-l-0 border-[#dde1e6]">
            <div className="flex justify-start items-center self-stretch flex-grow flex-shrink-0 relative overflow-hidden gap-2 px-3 py-4"></div>
          </div>
        </div>
      </div>
    </>
  );
};

Column.propTypes = {
  columns: PropTypes.array,
  widthList: PropTypes.array,
};

export default Column;
