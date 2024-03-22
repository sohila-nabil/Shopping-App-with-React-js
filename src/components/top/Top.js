import React from 'react'
import { FaBorderAll } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import './top.css'
const Top = () => {
    const data = [
      {
        name: "Watch",
        imag: "./images/category-2.png",
        sold: "3k orders in week",
      },
      {
        name: "sunglases",
        imag: "./images/category-3.png",
        sold: "6k orders in week",
      },
      {
        name: "headphone",
        imag: "./images/category-1.png",
        sold: "2k orders in week",
      },
    ];
  return (
    <div id="top">
      <div className="title">
        <FaBorderAll className="ticon" />
        <h2>Top Category</h2>

        <span>
          View All
          <IoMdArrowDropright className="arrow" />
        </span>
      </div>
      <div className="container">
        {data.map((item, index) => (
          <div key={index} className="card">
            <div className="data">
              <span>{item.name}</span>
              <span>{item.sold}</span>
            </div>
            <img src={item.imag} alt="j" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Top
