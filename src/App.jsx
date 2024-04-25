import { createContext, useState } from 'react';
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
import CardApply from './pages/card/CardApply';
import ManageMyCard from './pages/mypage/ManageMyCard';

export const ModalContext = createContext();

function App() {
  const [modal, setModal] = useState({
    isOpen: false,
    title: '',
    content: '',
  });
  return (
    <Router>
      <ModalContext.Provider value={{ modal, setModal }}>
        <Routes>
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
                <CardApply />
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
        </Routes>
      </ModalContext.Provider>
    </Router>
  );
}

export default App;
