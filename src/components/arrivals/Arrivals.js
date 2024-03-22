import React from 'react'
import { IoMdArrowDropright } from 'react-icons/io';
import icon from "../image-page/new.png"
import "./arrivals.css"

const Arrivals = () => {
    const data = [
      {
        name: "Sunglass",
        imag: "./images/arrivals1.png",
        price: "120",
      },
      {
        name: "Makeup",
        imag: "./images/arrivals2.png",
        price: "324",
      },
      {
        name: "Smart Watch",
        imag: "./images/arrivals4.png",
        price: "990",
      },
      {
        name: "Lipstick",
        imag: "./images/arrivals5.png",
        price: "100",
      },
      {
        name: "Green plant",
        imag: "./images/arrivals5 (1).png",
        price: "400",
      },
      {
        name: "Bonsai tree",
        imag: "./images/arrivals4.png",
        price: "788",
      },
    ];
  return (
    <div className="arrivals">
      <div className="title">
              <img src={ icon} alt='' />
        <h2>Top Category</h2>
        <span>
          View All
          <IoMdArrowDropright className="arrow" />
        </span>
          </div>
          <div className='content'>
              {
                  data.map((item, index) => 
                       (<div className="box" key={index}>
                          <img src={item.imag} alt="" />
                          <div className='data'>
                              <h4>{item.name}</h4>
                              <span>{ item.price}</span>
                          </div>
                      </div>)
                  )
              }
          </div>
    </div>
  );
}

export default Arrivals
