import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
    
      <Navbar />
      <Routes>
        <Route path="/" element={} />
        <Route path="/menu" element={} />
        <Route path="/schedule" element={} />
        <Route path="/about" element={} />
      </Routes>
    
    </>
  );
}

export default App;
