import React from "react";
import MenuPic from '../../assets/pexels-chan-walrus-958545.jpg';

function MenuImg() {
  return(
    <section class="introduction">

    <div class="row">
      <div class="col">
        <img id="menuPic" class="titlePic" src={MenuPic} alt="Many Thai Dishes"></img>
      </div>
    </div>

  </section>

  )
}

export default MenuImg;