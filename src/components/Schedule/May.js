import React from "react";
import Event from "./Event";
import mayEvents from "./monthData/may";

function May() {
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          May
        </h3>
      </div>
    </div>

    {mayEvents.map(item => (

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

export default May;