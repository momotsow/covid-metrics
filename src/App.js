import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './pages/Navbar';
import HomePage from './components/HomePage';
import DetailPage from './components/DetailsPage';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/country/:name" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
