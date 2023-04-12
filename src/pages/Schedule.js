import React from "react";
import ScheduleTitle from "../components/Schedule/ScheduleTitle";
import ScheduleImg from "../components/Schedule/ScheduleImg";
import Schedule2023 from "../components/Schedule/Schedule2023";
import FAQs from "../components/Schedule/FAQs";
import Contact from "../components/Schedule/Contact";

function Schedule() {
  return (

    <>

      <ScheduleImg />

      <section id="schedule" className="sampleMenuDiv">

        <ScheduleTitle />

        <div className="row">

          

          <Schedule2023 />
          
        
        </div>

        </section>

        <FAQs />

        <Contact />

     
      
      </>
   

  )
}

export default Schedule;