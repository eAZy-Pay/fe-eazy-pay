import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import MainPage from './pages/main/MainPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/card-recommend" element={<RecommendationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
