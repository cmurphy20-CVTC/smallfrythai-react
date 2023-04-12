import React from "react";
import Event from "./Event";
import aprilEvent from "./monthData/april";

function April() {
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          April
        </h3>
      </div>
    </div>

    {aprilEvent.map(item => (

    <Event
      key= {item.id}
      date= {item.date}
      location= {item.location}
      time= {item.time}
    />

    ))}

    </>
  
  )
}

export default April;