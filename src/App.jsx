import { createContext, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/MainPage';
import CardSearchPage from './pages/search/CardSearchPage';
import MyPage from './pages/mypage/MyPage';
import ShoppingPage from './pages/shopping/ShoppingPage';
import ShoppingDetail from './pages/shopping/ShoppingDetail';
import ShoppingComplete from './pages/shopping/ShoppingComplete';
import FaqPage from './pages/faq/FaqPage';
import QnaPage from './pages/qna/QnaPage';
import QnaWritePage from './pages/qna/QnaWritePage';
import CardDetailPage from './pages/card/CardDetailPage';
import ManageMyInformation from './pages/mypage/ManageMyInformation';
import MonthlyPayment from './pages/mypage/MonthlyPayment';
import AdminCardPage from './pages/admin/AdminCardPage';
import AuthRequiredPage from './pages/AuthRequiredPage';
import ManageMyCard from './pages/mypage/ManageMyCard';
import CardApplyPage from './pages/card/CardApplyPage';
import ManageLinkEazy from './pages/mypage/ManageLinkEazy';
import SelectedCard from './pages/mypage/SelectedCard';
import AdminQnaPage from './pages/admin/AdminQnaPage';
import NotFoundPage from './pages/NotFoundPage';

export const ModalContext = createContext();
export const DropdownContext = createContext();
export const CurrentPageContext = createContext();

function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: '',
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [dropdownContent, setDropdownContent] = useState();

  // 드롭다운바 닫힘 상태로 초기화
  useEffect(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <Router>
      <ModalContext.Provider value={{ modal, setModal }}>
        <DropdownContext.Provider
          value={{ isDropdownOpen, setIsDropdownOpen, dropdownContent, setDropdownContent }}
        >
          <CurrentPageContext.Provider value={{ currentPage, setCurrentPage }}>
            <Routes>
              <Route path="/*" element={<NotFoundPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/" element={<MainPage />} />
              <Route path="/card-recommend" element={<RecommendationPage />} />
              <Route path="/card-search" element={<CardSearchPage />} />
              <Route path="/shopping" element={<ShoppingPage />} />
              <Route path="/shopping/detail" element={<ShoppingDetail />} />
              <Route path="/shopping/complete" element={<ShoppingComplete />} />
              <Route
                path="/mypage"
                element={
                  <AuthRequiredPage>
                    <MyPage />
                  </AuthRequiredPage>
                }
              />
              <Route
                path="/mypage/manage"
                element={
                  <AuthRequiredPage>
                    <ManageMyInformation />
                  </AuthRequiredPage>
                }
              />
              <Route
                path="/mypage/payment"
                element={
                  <AuthRequiredPage>
                    <MonthlyPayment />
                  </AuthRequiredPage>
                }
              />
              <Route
                path="/mypage/card-management"
                element={
                  <AuthRequiredPage>
                    <ManageMyCard />
                  </AuthRequiredPage>
                }
              />
              <Route
                path="/mypage/card-management/link-eazy"
                element={
                  <AuthRequiredPage>
                    <ManageLinkEazy />
                  </AuthRequiredPage>
                }
              />
              <Route
                path="/mypage/card-management/selected-card"
                element={
                  <AuthRequiredPage>
                    <SelectedCard />
                  </AuthRequiredPage>
                }
              />

              <Route path="/register" element={<RegisterPage />} />
              <Route path="/faq" element={<FaqPage />} />

              <Route
                path="/qna"
                element={
                  <AuthRequiredPage>
                    <QnaPage />
                  </AuthRequiredPage>
                }
              />

              <Route
                path="/qna-write"
                element={
                  <AuthRequiredPage>
                    <QnaWritePage />
                  </AuthRequiredPage>
                }
              />

              <Route path="/card-detail/:id" element={<CardDetailPage />} />

              <Route
                path="/card-applicant/:id"
                element={
                  <AuthRequiredPage>
                    <CardApplyPage />
                  </AuthRequiredPage>
                }
              />

              <Route
                path="/admin/card"
                element={
                  <AuthRequiredPage requiredAdmin={true}>
                    <AdminCardPage />
                  </AuthRequiredPage>
                }
              />

              <Route
                path="/admin/qna"
                element={
                  <AuthRequiredPage requiredAdmin={true}>
                    <AdminQnaPage />
                  </AuthRequiredPage>
                }
              />
            </Routes>
          </CurrentPageContext.Provider>
        </DropdownContext.Provider>
      </ModalContext.Provider>
    </Router>
  );
}

export default App;
