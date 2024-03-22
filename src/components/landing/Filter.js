import React from "react";
import "./landing.css";

const Filter = () => {
  const data = [
    {
      cateImg: "/images/cat1.png",
      cateName: "Fashion",
    },
    {
      cateImg: "/images/cat2.png",
      cateName: "Electronic",
    },
    {
      cateImg: "/images/cat3.png",
      cateName: "Cars",
    },
    {
      cateImg: "/images/cat4.png",
      cateName: "Home & Garden",
    },
    {
      cateImg: "/images/cat5.png",
      cateName: "Gifts",
    },
    {
      cateImg: "/images/cat6.png",
      cateName: "Music",
    },
    {
      cateImg: "/images/cat1.png",
      cateName: "Health & Beauty",
    },
    {
      cateImg: "/images/cat1.png",
      cateName: "Pets",
    },
    {
      cateImg: "/images/cat1.png",
      cateName: "Baby Toys",
    },
    {
      cateImg: "/images/cat1.png",
      cateName: "Groceries",
    },
    {
      cateImg: "/images/cat1.png",
      cateName: "Books",
    },
  ];

  return (
    <>
      <div className="category">
        {data.map((value, index) => {
          return (
            <div className="box" key={index}>
              <img src={value.cateImg} alt="" />
              <span>{value.cateName}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Filter;
