import React from 'react';
import { BiSearch, BiCart } from "react-icons/bi";
import { SlLocationPin } from "react-icons/sl";
import './Header.css';
import LowerHeader from './LowerHeader';

const Header = () => {
  return (
    <header className="header">

      {/* Left: Logo + Delivery */}
      <div className="header-left">
        <a href="/" className="logo">
          <img src="https://pngimg.com/uploads/amazon/small/amazon_PNG11.png" alt="Amazon Logo"/>
        </a>
        <div className="delivery">
          <SlLocationPin className="delivery-icon"/>
          <div className="delivery-text">
            <p>Delivery to</p>
            <span>Ethiopia</span>
          </div>
        </div>
      </div>

      {/* Middle: Search Bar */}
      <div className="header-search">
        <select className="search-category">
          <option value="">All</option>
        </select>
        <input type="text" placeholder="Search products" className="search-input"/>
        <button className="search-button">
          <BiSearch className="search-icon"/>
        </button>
      </div>

      {/* Right: Language, Account, Orders, Cart */}
      <div className="header-right">

        {/* Language Selector */}
        <div className="language-selector">
          <img src="https://img.freepik.com/premium-vector/us-flag-vector-clipart_1169073-379.jpg?semt=ais_hybrid&w=740&q=80" alt="Flag"/>
          <select className="language-select">
            <option value="">EN</option>
          </select>
        </div>

        {/* Account */}
        <a href="#" className="account">
          <p>Sign In</p>
          <span>Account & Lists</span>
        </a>

        {/* Orders */}
        <a href="#" className="orders">
          <p>Returns</p>
          <span>& Orders</span>
        </a>

        {/* Cart */}
        <a href="/cart" className="cart">
          <BiCart className="cart-icon"/>
          <span className="cart-count">0</span>
        </a>

      </div>
       <LowerHeader />

    </header>
   
  )
}

export default Header;
