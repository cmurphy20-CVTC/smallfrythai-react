import React from 'react';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import {Link, Route, Routes} from "react-router-dom";
import './App.css';
import Footer from "./components/Footer";

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
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} /> 
      </Routes>

      <Footer />
    
    </>
  );
}

export default App;
