import React from "react";
import image1 from "../assets/cart.png";
import image2 from "../assets/hamburger.png";
import image3 from "../assets/user.png";
import { NavContainer } from "./navstyle";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <div class="logo">
          <div class="hamburger-one">
            <img src={image2} alt="image2" />
          </div>
          <h1>Camper</h1>
        </div>
        <div class="nav-text">
          <div class="nav-text-btn">
            <p>Motor</p>
          </div>
          <div class="nav-text-btn">
            <p>Caravan</p>
          </div>
          <div class="nav-text-btn">
            <p>Tuning</p>
          </div>
          <div class="nav-text-btn">
            <p>Used Car</p>
          </div>
          <p>Camping Place</p>
        </div>
        <div class="nav-icons">
          <div class="cart">
            <img src={image1} alt="image1" />
          </div>
          <div class="hamburger-two">
            <img src={image2} alt="image2" />
          </div>
          <div class="user">
            <img src={image3} alt="image3" />
          </div>
          <div class="nav-text-btn">
            <p>En</p>
          </div>
        </div>
      </NavContainer>
    </>
  );
};

export default Navbar;
