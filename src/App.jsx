import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage.jsx';
import HomePage from './pages/HomePage.jsx';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate('/home');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<LoginPage onLogin={handleLogin} />} />
      <Route path="/home" element={isAuthenticated ? <HomePage onLogout={handleLogout} /> : <LoginPage onLogin={handleLogin} />} />
    </Routes>
  );
}

export default App;