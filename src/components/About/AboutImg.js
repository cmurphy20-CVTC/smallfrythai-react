import React from "react";
import AboutPic from '../../assets/pexels-tima-miroshnichenko-5794166.jpg';

function AboutImg() {
  return(
    <div class="col-lg-6 aboutImgDiv">
    <img id="aboutImg" src={AboutPic} alt="Food Truck Order Here"></img>
  </div>
  )
}

export default AboutImg;