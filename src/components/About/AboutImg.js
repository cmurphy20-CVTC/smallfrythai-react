import React from "react";
import AboutPic from '../../assets/pexels-tima-miroshnichenko-5794166.jpg';

function AboutImg() {
  return(
    <div className="row">
       <div class="col-lg aboutImgDiv">
    <img id="aboutImg" src={AboutPic} alt="Food Truck Order Here"></img>
  </div>
    </div>
   
  )
}

export default AboutImg;