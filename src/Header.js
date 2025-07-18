import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
// Header component to display the top navigation bar
import './Header.css'; // Assuming you have a CSS file for styling the Header component
import Login from './Login'; // Importing the Login component
function Header() {
  const [{ basket }, dispatch] = useStateValue(); // Get the basket from the state

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header__logo">
          <AddShoppingCartIcon className="headerlogo" />
          <h2>Eshop</h2>
        </div>
      </Link>

      <div className="header__search">
        <input type="text" className="header__searchinput" />
        <SearchIcon className="header__searchicon" />
      </div>

      <div className="header_nav">
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <div className="navitemdiv">
            <span className="newiteminone">Hello</span>
            <span className="newiteminTwo">Sign In</span>
          </div>
        </Link>
       
        <div className="navitemdiv">
          <span className="newiteminone">Your</span>
          <span className="newiteminTwo">Shop</span>
        </div>
        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="navitemdiv">
            <ShoppingBasketIcon fontSize="large" />
            <span className="newiteminTwo">{basket.length || 0}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;