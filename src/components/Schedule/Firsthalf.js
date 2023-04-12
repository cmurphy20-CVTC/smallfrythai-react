import React from 'react';
import April from './April';
import May from "./May";
import JuneFH from './JuneFH';

function FirstHalf() {
  return (
    <div id="firstHalf" className="col-lg-5 col">

      <April />

      <May />

      <JuneFH />

    </div>

  )
}

export default FirstHalf;