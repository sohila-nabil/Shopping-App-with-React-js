import React, {useState, useEffect} from 'react'
import { FaShopify, FaCartShopping, FaBars } from "react-icons/fa6";
import { Link, NavLink } from 'react-router-dom';
import './navbar.css'
import { useShoppingCart } from '../contextApi/ShoppingCart';


const Navbar = () => {
  const [user, setUser] = useState("");
  const [openMenu, setOpenMenu] = useState(false)
  const [scroll, setScroll] = useState(false)
  const {cartQty} = useShoppingCart()
  
 
  useEffect(() => {
    const handlescroll = () => {
      if (window.scrollY > 60) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
    return () => window.removeEventListener("scroll", handlescroll);
  }, []);
   
    
    const handleToggle = () => {
        setOpenMenu(!openMenu)
  }
  
  useEffect(() => {
        let userData = JSON.parse(localStorage.getItem("username"));
        if (userData) {
            setUser(userData);
        } 
    },[]);


  return (
    <div id="header" className={scroll ? "activeScroll" : ""}>
      <div className="conatiner">
        <Link to="/" className="shop" >
          <FaShopify className="icon" />
          <h2>Shopping</h2>
        </Link>
        <FaBars className="bar" onClick={() => handleToggle()} />
        <nav id={openMenu ? "openMenu" : ""}>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="favourites">Favourites</Link>
            </li>
            <li>
              <NavLink to="cart">
                <FaCartShopping className="cart" />
                <span className="number">{cartQty}</span>
              </NavLink>
            </li>
          </ul>
          <div className="user">
            {user ? (
              <>
                <span>{user}</span>
                <Link to="signup">Logout</Link>
              </>
            ) : (
              <>
                <Link to="signup">Sign Up</Link>
                <Link to="signin">Sign in</Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
