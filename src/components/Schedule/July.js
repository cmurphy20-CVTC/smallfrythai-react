import React from "react";
import Event from "./Event";
import julyEvents from "./monthData/july";

function July(){
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          July
        </h3>
      </div>
    </div>

    {julyEvents.map(item => (

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

export default July;