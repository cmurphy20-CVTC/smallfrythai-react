import React from "react";
import LogoOrange from '../assets/Small_Fry_Thai_2.png';

function Footer() {
  return (
    <footer class="footer ">
    <img class="brand" src={LogoOrange} alt="Orange Small Fry Thai Logo"></img>
    <div class="container-fluid">
      
      <a href="https://www.linkedin.com/in/casey-murphy-494b49114/" target="_blank" rel="noreferrer"><i class="social-icon fab fa-facebook-f fa-2x"></i></a>
      <a href="https://splendid-alfajores-593dac.netlify.app/" target="_blank" rel="noreferrer"><i class="social-icon fab fa-twitter fa-2x"></i></a>
      <a href="https://github.com/cmurphy20-CVTC" target="_blank" rel="noreferrer"><i class="social-icon fab fa-instagram fa-2x"></i></a>
      <a href="mailto:cmurphymwdf@gmail.com" target="_blank" rel="noreferrer"><i class="social-icon fas fa-envelope fa-2x"></i></a>
      <p>© Copyright 2022 Small Fry Thai</p>
    </div>
    
  </footer>
  
  )
}

export default Footer;