import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import LoginPage from './pages/login/LoginPage';
import MainPage from './pages/main/MainPage';
import NonLoginMainPage from './pages/main/NonLoginMainPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<NonLoginMainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/card-recommend" element={<RecommendationPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
