import React from "react";
import {
  BarChart,
  SearchRounded,
  ShoppingCartRounded,
} from "@mui/icons-material";
import logo from "../img/logo.png";
import profil from "../img/photo.jpg";

function Header() {
  return (
    <header>
      <img src={logo} alt="logo" className="logo" />

      <div className="inputBox">
        <SearchRounded className="searchIcon" />
        <input type="text" placeholder="Search" />
      </div>

      <div className="shoppingCart">
        <ShoppingCartRounded className="cart" />
        <div className="cart_content">
          <p> 1</p>
        </div>
      </div>

      <div className="profileContainer">
        <div className="imgBox">
          <img src={profil} alt="profil" />
        </div>
        <h2 className="userName">Jorge Da Silva</h2>
      </div>

      <div className="toggleMenu">
        <BarChart className="toggleIcon" />
      </div>
    </header>
  );
}

export default Header;
