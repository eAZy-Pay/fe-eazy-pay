import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RecommendationPage from './pages/recommendation/RecommendationPage';
import LoginPage from './pages/login/LoginPage';
import { createContext, useState } from 'react';
export const LoginUserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});

  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      <Router>
        <Routes>
          <Route path="/" element={<RecommendationPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </LoginUserContext.Provider>
  );
}

export default App;
