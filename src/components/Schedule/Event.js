import React from "react";

function Event(props) {
  return(
    <div id="oddItem" class="row">
                    
    <div  class="col-md-2">
      <p>{props.date}</p>
    </div>
    <div class="col-md-6">
      <p>{props.location}</p>
    </div>
    <div class="col-md-4">
      <p>{props.time}</p>
    </div>
  </div>
  )
}

export default Event;