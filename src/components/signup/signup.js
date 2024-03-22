import React, {useRef, useEffect, useState} from 'react'
import './signup.css';
import { FaUser, FaLock, FaEnvelope } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Signup() {
  let username = localStorage.getItem("username") ? localStorage.getItem("username") : null
  let userEmaail = localStorage.getItem("email")
    ? localStorage.getItem("email")
    : null;
  let userpass = localStorage.getItem("password")
    ? localStorage.getItem("password")
    : null;

  const userRef = useRef();
  const emailRef = useRef();
  const passRef = useRef(); 

  const [user, setUser] = useState(username);
  const [email, setEmail] = useState(userEmaail);
  const [pass, setPass] = useState(userpass);

  const handleClick = () => {
    if (userRef.current.value === "" || emailRef.current.value === "" || passRef.current.value === "") {
      alert('Please fill out all fields');
    } else {
      setUser(userRef.current.value);
      setEmail(emailRef.current.value)
      setPass(passRef.current.value)
      localStorage.setItem("username", JSON.stringify(user));
      localStorage.setItem("email", JSON.stringify(email));
      localStorage.setItem("password", JSON.stringify(pass));
      setTimeout(() => {
        window.location = '/'
      },1000)
    }
  
  }
  useEffect(() => {
    localStorage.setItem("username", JSON.stringify(user));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("password", JSON.stringify(pass));
  },[user, email, pass])
    useEffect(() => {
        userRef.current.focus()
    }, [])
  
  return (
    <div className="signup">
      <div className="container">
        <h3>Sign Up</h3>
        <div className="inputs">
          <label>
            <FaUser className="icon" />
          </label>
          <input type="text" ref={userRef} required placeholder=' User Name' />
        </div>

        <div className="inputs">
          <label>
            <FaEnvelope  className="icon" />
          </label>
          <input type="email" ref={emailRef} required placeholder='Email Address'/>
        </div>

        <div className="inputs">
          <label>
            <FaLock className="icon" />
          </label>
          <input type="password" ref={passRef} required placeholder='Password' />
        </div>

        <button  onClick={()=> handleClick()}>Sign Up</button>
        <p>Already have an account?</p>
        <NavLink to="/signin">Log In</NavLink>
      </div>
    </div>
  );
}

export default Signup
