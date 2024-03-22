import React from 'react'
import "./cartItems.css"

const Total = ({ total }) => {
  return (
    <div className='side'>
              <h3>Cart Summary</h3>
              <div className='data'>
                  <p>Total Price : </p>
                  <p>{total}</p>
              </div>
    </div>
  )
}

export default Total
