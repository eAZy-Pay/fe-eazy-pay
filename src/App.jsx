import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import LoginPage from './pages/login/LoginPage';
import RegisterPage from './pages/register/RegisterPage';
import MainPage from './pages/main/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card-recommend" element={<RecommendationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
