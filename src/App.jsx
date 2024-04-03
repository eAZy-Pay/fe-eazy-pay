import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RecommendationPage />} />
      </Routes>
    </Router>
  );
}

export default App;
