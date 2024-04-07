import React from "react";
import image1 from "../assets/cart.png";
import image2 from "../assets/hamburger.png";
import image3 from "../assets/user.png";
import icon1 from "../assets/more-icon.png";
import {
  LogoMain,
  NavContainer,
  NavIcons,
  NavTextBtn,
  NavTextWrapper,
  Orangenotfication,
} from "./navstyle";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavContainer>
        <LogoMain>
          <div class="hamburger-one">
            <img src={image2} alt="image2" />
          </div>
          <h1>Camper</h1>
        </LogoMain>
        <NavTextWrapper>
          <NavTextBtn>
            <NavLink to="/">
              <p>Motor</p>
            </NavLink>
            <img src={icon1} alt="icon1" />
          </NavTextBtn>
          <NavTextBtn>
            <NavLink to="/caravan">
              <p>Caravan</p>
            </NavLink>
            <img src={icon1} alt="icon1" />
          </NavTextBtn>
          <NavTextBtn>
            <p>Tuning</p>
            <img src={icon1} alt="icon1" />
          </NavTextBtn>
          <NavTextBtn>
            <p>Used Car</p>
            <img src={icon1} alt="icon1" />
          </NavTextBtn>
          <p>Camping Place</p>
        </NavTextWrapper>
        <NavIcons>
          <div class="cart">
            <img src={image1} alt="image1" />
            <Orangenotfication>
              <p>1</p>
            </Orangenotfication>
          </div>
          <div class="hamburger-two">
            <img src={image2} alt="image2" />
          </div>
          <div class="user">
            <img src={image3} alt="image3" />
          </div>
          <NavTextBtn>
            <p>En</p>
            <img src={icon1} alt="icon1" />
          </NavTextBtn>
        </NavIcons>
      </NavContainer>
    </>
  );
};

export default Navbar;
