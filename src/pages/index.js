import React from 'react'
// import { useNavigate } from 'react-router-dom'
import Navbar from './../components/navBar/Navbar';
import Landing from './../components/landing/Landing';
import Products from '../components/Products';
import Top from './../components/top/Top';
import Arrivals from '../components/arrivals/Arrivals';

const Index = () => {
  return (
    <div>
      <Navbar/>
      <Landing />
      <Products />
      <Top />
      <Arrivals/>
    </div>
  );
}

export default Index
