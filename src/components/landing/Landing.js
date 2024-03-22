import React from 'react'
import './landing.css'
import Hero from './Hero';
import Filter from './Filter';
const Landing = () => {
  return (
    <div className="landing">
      <div className="conatiner">
        <Filter />
        <Hero />
      </div>
    </div>
  );
}

export default Landing
