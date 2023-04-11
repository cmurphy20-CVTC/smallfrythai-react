import React from 'react';
import Home from './pages/Home';
import Logo from './assets/Small Fry Thai.png';

import Menu from './pages/Menu';
import About from './pages/About';
import {Link, Route, Routes} from "react-router-dom";
import Footer from "./components/Footer";
import Schedule from './pages/Schedule';

function App() {
  return (
    <div className='container-fluid'>
    
      <nav className='navbar navbar-expand-lg sticky-top'>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarContent">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div id="navbarContent" className='collapse navbar-collapse justify-content-start'>

        <img id="brandLogo" src={Logo} alt="Small Fry Thai Logo"></img>

          <ul className='nav nav-pills nav-fill '>
            <li className='nav-item'>
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/menu">Menu</Link>
            </li>
            
            <li className='nav-item'>
              <Link className="nav-link" to="/schedule">Schedule</Link>
            </li>
            <li className='nav-item'>
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/schedule" element={<Schedule />} /> 
        <Route path="/about" element={<About />} /> 
      </Routes>



      <Footer />
    
    </div>
  );
}

export default App;
