import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import CardSearchPage from './pages/search/CardSearchPage';
import MyPage from './pages/mypage/MyPage';
import ShoppingPage from './pages/shopping/ShoppingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/card-recommend" element={<RecommendationPage />} />
        <Route path="/card-search" element={<CardSearchPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
