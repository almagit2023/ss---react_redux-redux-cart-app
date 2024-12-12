// src/components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './NavBar.css';

const NavBar = () => {
  const cart = useSelector((state) => state.cart); // Access the cart state from Redux
  const totalCount = cart.reduce((acc, item) => acc + item.count, 0); // Total count of items in the cart

  return (
    <div className="navigationBlock">
      <Link to="/home" className="navigationItem">
        Home
      </Link>
      <Link to="/cart" className="navigationItem cartLink">
        Cart
        {totalCount > 0 && <span className="cartBadge">{totalCount}</span>}
      </Link>
    </div>
  );
};

export default NavBar;
