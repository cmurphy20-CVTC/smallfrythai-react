import React from "react";
import ScheduleTitle from "../components/Schedule/ScheduleTitle";
import ScheduleImg from "../components/Schedule/ScheduleImg";
import ScheduleImg2023 from "../components/Schedule/ScheduleImg2023";
import FAQs from "../components/Schedule/FAQs";
import Contact from "../components/Schedule/Contact";

function Schedule() {
  return (

    <div className="container-fluid">

      <ScheduleImg />

      <ScheduleTitle />

      <ScheduleImg2023 />

      <FAQs />

      <Contact />
      
    </div>

  )
}

export default Schedule;