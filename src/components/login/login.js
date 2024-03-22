import React, {useRef, useState, useEffect} from 'react'
import { FaUser, FaLock } from "react-icons/fa";
import { NavLink } from 'react-router-dom';


function Login() {

  const userRef = useRef();
  const passRef = useRef();
  
  const handleClick = () => {
    let userValue = userRef.current.value;
    let passwordValue = passRef.current.value;
    
    let userAccess = JSON.parse(localStorage.getItem("users"));
    if (userAccess) {
      userAccess.map((item) => {
        if ((item.username === userValue) & (item.password === passwordValue)) {
          setTimeout(() => {
            window.location = "/";
          }, 1000);
        } else if (
          item.username !== userValue ||
          item.password !== passwordValue
        ) {
          alert("wrong username or password");
        } else if (userValue === "" || passwordValue === "") {
          alert("enter all fields");
        }
      })
    }
  }

    return (
      <div className="signup">
        <div className="container">
          <h3>Sign Up</h3>
          <div className="inputs">
            <label>
              <FaUser className="icon" />
            </label>
            <input
              type="text"
              ref={userRef}
              required
              placeholder=" User Name"
            />
          </div>

          <div className="inputs">
            <label>
              <FaLock className="icon" />
            </label>
            <input
              type="password"
              ref={passRef}
              required
              placeholder="Password"
            />
          </div>

          <button onClick={() => handleClick()}>Sign in</button>
          <p>Creat new Account</p>
          <NavLink to="/signup">Sign up</NavLink>
        </div>
      </div>
    );
}

export default Login
