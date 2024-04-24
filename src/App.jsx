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
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/card-recommend" element={<RecommendationPage />} />
        <Route path="/card-search" element={<CardSearchPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/shopping/detail" element={<ShoppingDetail />} />
        <Route path="/shopping/complete" element={<ShoppingComplete />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/qna" element={<QnaPage />} />
        <Route path="/qna-write" element={<QnaWritePage />} />
        <Route path="/card-detail/:id" element={<CardDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
