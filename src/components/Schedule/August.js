import React from "react";
import Event from "./Event";
import augustEvents from "./monthData/august";

function August(){
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          August
        </h3>
      </div>
    </div>

    {augustEvents.map(item => (

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

export default August;