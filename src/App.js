import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Amit_Perets from './pages/Amit_Perets';
import Israel_Shushan from './pages/Israel_Shushan';
import David_Asulin from './pages/David_Asulin';
import Yuval_Hilay from './pages/Yuval_Hilay';
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Amit_Perets" element={<Amit_Perets />} />
          <Route path="/Israel_Shushan" element={<Israel_Shushan />} />
          <Route path="/David_Asulin" element={<David_Asulin />} />
          <Route path="/Yuval_Hilay" element={<Yuval_Hilay />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
