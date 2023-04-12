import React from "react";
import Event from "./Event";
import juneSH from "./monthData/juneSH";

function JuneSH(){
  return(
    <>
    
    <div id="month" class="row">
      <div class="col-md justify-content-start">
        <h3 id="monthTitle">
          June
        </h3>
      </div>
    </div>

    {juneEvents.map(item => (

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

export default JuneSH;