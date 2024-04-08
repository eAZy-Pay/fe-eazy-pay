import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import RegisterPage from './pages/register/RegisterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecommendationPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
