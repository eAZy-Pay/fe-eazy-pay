import PropTypes from 'prop-types';

const PageNavigator = ({ totalPages, currentPage, setPage }) => {
  const makePage = () => {
    const result = [];
    const maxPage = 10;
    const startPage = Math.floor(currentPage / maxPage) * maxPage + 1;
    const endPage = Math.min(startPage + maxPage - 1, totalPages);
    for (let i = startPage; i <= endPage; i++) {
      if (i === currentPage + 1) {
        result.push(
          <button
            key={i}
            className="flex justify-center items-center hover:bg-[#a6c8ff]"
            onClick={() => {
              setPage(i - 1);
            }}
          >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative p-2">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-semibold text-left text-[#001d6c] hover:text-[#0f62fe]">
                  {i}
                </p>
              </div>
            </div>
          </button>
        );
      } else {
        result.push(
          <button
            key={i}
            className="flex justify-center items-center hover:bg-[#a6c8ff]"
            onClick={() => {
              setPage(i - 1);
            }}
          >
            <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative p-2">
              <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2">
                <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#697077] hover:text-[#0f62fe]">
                  {i}
                </p>
              </div>
            </div>
          </button>
        );
      }
    }
    return result;
  };
  return (
    <>
      <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0">
        <button
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative p-2"
          onClick={() => {
            if (currentPage === 0) return;
            setPage(currentPage - 1);
          }}
        >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative gap-2.5 px-2">
            {currentPage === 0 ? (
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#697077]">
                이전
              </p>
            ) : (
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#697077] hover:text-[#0f62fe]">
                이전
              </p>
            )}
          </div>
        </button>

        {makePage()}
        <button
          className="flex justify-center items-center flex-grow-0 flex-shrink-0 h-10 relative p-2"
          onClick={() => {
            if (currentPage === totalPages - 1) return;
            setPage(currentPage + 1);
          }}
        >
          <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 relative px-2">
            {currentPage === totalPages - 1 ? (
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#697077]">
                다음
              </p>
            ) : (
              <p className="flex-grow-0 flex-shrink-0 text-base font-medium text-left text-[#697077] hover:text-[#0f62fe]">
                다음
              </p>
            )}
          </div>
        </button>
      </div>
    </>
  );
};

PageNavigator.propTypes = {
  totalPages: PropTypes.number,
  currentPage: PropTypes.number,
  setPage: PropTypes.func,
};

export default PageNavigator;
