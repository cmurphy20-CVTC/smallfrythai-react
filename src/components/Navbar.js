import React, {useState} from 'react';
import Link from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
         
        </div>
      </nav>

    </>
  )
}

export default Navbar
