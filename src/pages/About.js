import React from 'react';
import AboutTitle from '../components/About/AboutTitle';
import AboutImg from '../components/About/AboutImg';
import AboutContent from '../components/About/AboutContent';


function About() {
  return (
    <div class="about">
      <div class="row">

        <AboutTitle />

        <AboutImg />

        <AboutContent />
      </div>
    </div>
  )
}

export default About;