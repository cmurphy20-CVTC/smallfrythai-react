import React from "react";
import Event from "./Event";
import septemberEvents from "./monthData/september";

function September(){
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          September
        </h3>
      </div>
    </div>

    {septemberEvents.map(item => (

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

export default September;