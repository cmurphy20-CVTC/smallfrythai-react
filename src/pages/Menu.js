import React from "react";
import MenuImg from "../components/Menu/MenuImg";
import Apps from "../components/Menu/Apps";
import Entrees from "../components/Menu/Entrees";
import Sides from "../components/Menu/Sides";

function Menu() {
  return (

  <div class="container-fluid">
    <MenuImg />

    <Apps />

    <Entrees />

    <Sides />

  </div>
  )
}

export default Menu;