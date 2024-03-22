import React,{memo} from 'react'
import './products.css'
import LabtopItem from "../components/LabtopItem";



const Products = () => {
  
  return (
    <div id="products">
        <LabtopItem/>
      </div>
  );
}

export default memo(Products);
