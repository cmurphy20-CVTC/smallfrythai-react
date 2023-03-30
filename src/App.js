import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import {Link, Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        {/* <Route path="/schedule" element={} />
        <Route path="/about" element={} /> */} 
      </Routes>
    
    </>
  );
}

export default App;
