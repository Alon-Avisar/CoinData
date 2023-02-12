import React from "react";
import { FaCoins } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../assets/styles/cmps/Navbar.scss";

export const Navbar = () => {
  return (
    <Link to="/">
      <div className="navbar">
        <FaCoins className="icon" />
        <h1>
          Coin<span className="blue">Data</span>
        </h1>
      </div>
    </Link>
  );
};
