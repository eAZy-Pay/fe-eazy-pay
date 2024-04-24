import PropTypes from 'prop-types';
import Row from './Row';
import PageNavigator from './PageNavigator';
import Column from './Column';

const Table = ({
  rows,
  fetchRows,
  columns,
  pageName,
  totalPages,
  currentPage,
  setPage,
  widthList,
}) => {
  return (
    <div className="table-container flex flex-col w-full overflow-auto border border-gray-300 rounded-lg shadow-sm">
      <Column columns={columns} widthList={widthList} />
      <div className="table-body flex flex-col w-full">
        {rows.map((row, index) => (
          <Row
            key={row[0] || index}
            id={row[0]}
            fetchRows={fetchRows}
            row={row.slice(1)}
            pageName={pageName}
            widthList={widthList}
          />
        ))}
      </div>
      <PageNavigator
        totalPages={totalPages}
        currentPage={currentPage}
        setPage={setPage}
        className="page-navigator my-2"
      />
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.array.isRequired,
  fetchRows: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  pageName: PropTypes.string.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
  widthList: PropTypes.array.isRequired,
};

export default Table;
