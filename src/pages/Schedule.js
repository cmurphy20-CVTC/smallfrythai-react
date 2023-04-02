import React from "react";
import FAQs from "../components/Schedule/FAQs";
import Contact from "../components/Schedule/Contact";

function Schedule() {
  return (

    <div className="container-fluid">

      <ScheduleFirstHalf />

      <ScheduleSecondHalf />

      <FAQs />

      <Contact />
      
    </div>
    


  )
}

export default Schedule;