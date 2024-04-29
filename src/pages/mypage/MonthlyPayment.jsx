// import React from 'react';
import DefaultLayout from '../../components/layout/DefaultLayout';
import arrowIconThin from '../../assets/arrowIconThin.svg';
import { useEffect, useState } from 'react';
import { getPaymentHistoryForMonth, getPaymentHistoryData } from '../../apis/UserAPI';
import { getUserSession } from '../../utils/authUtils';

const ITEMS_PER_PAGE = 10;
const currentMonth = new Date().getMonth() + 1;
const currentYear = new Date().getFullYear();

const MonthlyPayment = () => {
  const [transactions, setTransactions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [selectedYear, setCurrentYear] = useState(currentYear);
  const [total, setTotal] = useState(0); // total 상태 추가
  const [totalAmount, setTotalAmount] = useState(0); // totalAmount 상태 추가
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [tempMonth, setTempMonth] = useState(currentMonth);
  const [tempYear, setTempYear] = useState(currentYear);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

  // 페이지 번호 배열 생성
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // 페이지 번호 클릭 이벤트 핸들러
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 페이지 번호 렌더링
  const renderPageNumbers = pageNumbers.map((pageNumber) => (
    <button
      key={pageNumber}
      className={`px-4 py-2 border rounded-md ${pageNumber === currentPage ? 'bg-gray-300' : ''}`}
      onClick={() => handlePageClick(pageNumber)}
    >
      {pageNumber}
    </button>
  ));

  const toggleDropdown = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
    setDropdownOpen(!dropdownOpen);
  };

  const handleSelectChange = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
    const { name, value } = e.target;
    if (name === 'year') {
      setTempYear(Number(value));
    } else {
      setTempMonth(Number(value));
    }
  };

  useEffect(() => {
    // 클릭 이벤트가 document에 전파되는 것을 방지하기 위한 이벤트 리스너 추가
    const closeDropdown = () => setDropdownOpen(false);
    document.addEventListener('click', closeDropdown);
    return () => document.removeEventListener('click', closeDropdown);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 사용자 정보 가져오는 코드 추가
        const user = getUserSession();
        const uid = user.uid;
        const offset = (currentPage - 1) * ITEMS_PER_PAGE;
        const data = await getPaymentHistoryData(
          uid,
          selectedYear,
          selectedMonth,
          offset,
          ITEMS_PER_PAGE
        );
        const { totalPaymentCount, totalPaymentAmount } = await getPaymentHistoryForMonth(
          uid,
          selectedYear,
          selectedMonth
        );

        if (Array.isArray(data)) {
          setTransactions(data);
          setTotal(totalPaymentCount);
          setTotalAmount(totalPaymentAmount);
        } else {
          console.error('Expected an array, but got something else.');
        }
      } catch (error) {
        console.error('Failed to load user data:', error);
      }
    };
    fetchData();
  }, [currentPage, selectedMonth, selectedYear]);


  const applyDateChanges = (e) => {
    e.stopPropagation(); // 클릭 이벤트 전파 중지
    setSelectedMonth(tempMonth);
    setCurrentYear(tempYear);
    setDropdownOpen(false);  // 드롭다운 닫기
  };


  const loadPreviousMonth = () => {
    // 이전 월로 변경
    if (selectedMonth === 1) {
      // 현재가 1월인 경우에는 전년도 12월로 변경
      setSelectedMonth(12);
      setCurrentYear((prevYear) => prevYear - 1);
    } else {
      setSelectedMonth((prevMonth) => prevMonth - 1);
    }
  };

  const loadNextMonth = () => {
    // 다음 월로 변경
    if (selectedMonth === 12) {
      // 현재가 12월인 경우에는 다음년도 1월로 변경
      setSelectedMonth(1);
      setCurrentYear((prevYear) => prevYear + 1);
    } else {
      setSelectedMonth((prevMonth) => prevMonth + 1);
    }
  };

  return (
    <>

      <DefaultLayout>
        <h2 className=" my-10 text-4xl font-extrabold">이용대금명세서</h2>
      </DefaultLayout>

      <DefaultLayout
        showNavBar={false}
        bannerClassName={'py-4 bg-[#F4F7FC] h-[24rem]'}
        banner={
          <div
            className="flex flex-col w-full items-center bg-[#F4F7FC]"
            style={{ overflowX: 'visible' }} // overflow-x 속성을 설정하려면 이렇게 작성해야 해.
          >
            <div className="w-full flex justify-between items-center">
              {/* 주요 내용 */}
              <div className="flex flex-col justify-center items-center w-full">
                <div className="flex justify-between items-center w-full mb-10">
                  <button onClick={loadPreviousMonth} className="flex items-center">
                    <img src={arrowIconThin} alt="Arrow Icon Thin" className="pr-2" />
                    <h3 className="border-b2 text-[2rem] mb-1">{selectedMonth - 1}</h3>
                    <h3 className="border-b2 text-[2rem] mb-1">월</h3>
                  </button>
                  <div className="flex relative" onClick={toggleDropdown}>
                    <div className="flex justify-between items-center cursor-pointer" >
                      <div className="flex">
                        <h3 className="border-b-2 border-black text-[2rem]">{selectedMonth}</h3>
                        <h3 className="border-b-2 border-black text-[2rem]">월</h3>
                      </div>
                      <img
                        src={arrowIconThin}
                        alt="Arrow Icon Thin"
                        className="-rotate-90 ml-3 mr-7"
                      />
                    </div>

                    {dropdownOpen && (
                      <div className="absolute top-full left-0 bg-white border p-2" onClick={(e) => e.stopPropagation()}>
                        <select name="year" value={tempYear} onChange={handleSelectChange}>
                          {Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                            <option key={year} value={year}>{year}</option>
                          ))}
                        </select>
                        <select name="month" value={tempMonth} onChange={handleSelectChange}>
                          {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                            <option key={month} value={month}>{month}</option>
                          ))}
                        </select>
                        <button onClick={applyDateChanges}>확인</button>
                      </div>
                    )}

                    <h3 className="text-[2rem]">이용금액</h3>
                  </div>
                  <button onClick={loadNextMonth} className="flex items-center">
                    <h3 className="text-[2rem] mb-1">{selectedMonth + 1}</h3>
                    <h3 className="text-[2rem] mb-1">월</h3>
                    <img src={arrowIconThin} alt="Arrow Icon Thin" className="rotate-180 pr-2" />
                  </button>
                </div>
                <div className="flex gap-1 p-10">
                  <p className="text-5xl font-bold">{totalAmount.toLocaleString()}</p>
                  <p className="flex items-end text-3xl text-[2rem]">원</p>
                </div>
                <div className="flex ">
                  <p className="text-gray-600 text-xl">결제일: </p>
                  <p className="text-gray-600 text-xl">
                    {selectedYear}.{selectedMonth + 1}.01
                  </p>
                </div>
              </div>
            </div>
          </div>
        }
      >
        {/* 이용내역 */}
        <div className="flex flex-col items-center">
          <div className="flex justify-start w-5/6 mt-6 mb-2">
            <p className="text-gray-600 text-xl">총 승인</p>
            <p className="text-gray-600 text-xl ml-1">{total}</p>
            <p className="text-gray-600 text-xl">건</p>
          </div>
          <hr className="bold-hr2 w-5/6" />
          <div className="flex flex-col items-center w-5/6">
            {transactions.map((transaction, index) => {
              // formattedDate로 날짜 변환
              const formattedDate =
                transaction.paymentDate.substring(0, 10).replace(/-/g, '.') +
                ' ' +
                transaction.paymentDate.substring(11, 19);
              // num이 undefined가 아니면 마스킹 처리
              const maskedNum = transaction.cardNum ? transaction.cardNum.slice(-4).replace(/\d(?=\d{0}$)/, '*') : '';
              return (
                <div key={index} className="flex flex-col text-center w-full text-lg">
                  <div className="flex justify-center items-center justify-between my-5">
                    <div className="flex gap-4">
                      <p className="">{formattedDate}</p>
                      <p className="font-semibold">본인</p>
                      <p className="">{maskedNum}</p>
                      <p className="font-semibold">{transaction.storeName}</p>
                    </div>
                    <div className="flex">
                      <p className="font-semibold">{transaction.paymentAmount.toLocaleString()}</p>
                      <p className="">원</p>
                    </div>
                  </div>
                  <hr className="bold-hr2" />
                </div>
              );
            })}
          </div>
        </div>
        {/* 페이지 이동 */}
        <div className="flex items-center justify-center mt-4">
          {renderPageNumbers}
        </div>
      </DefaultLayout>
    </>
  );
};

export default MonthlyPayment;
