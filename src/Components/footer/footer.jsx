import React from "react";
import { Link } from "react-router-dom";

import footerImg1 from "../assets/footer1.png";
import footerImg2 from "../assets/footer2.png";
import footerImg3 from "../assets/footer3.png";
import { FooterBox, FooterContainer } from "../Motors/motorstyle";

function Footer() {
  return (
    <div>
      <FooterContainer>
        <div>
          <p style={{ fontSize: "40px", fontWeight: "600" }}>Camper</p>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          className="footeroff"
        >
          <FooterBox className="footeroff">Services</FooterBox>
          <p className="footeroff">Camping</p>
          <p className="footeroff">Lodging</p>
          <p className="footeroff">Harbor</p>
          <p className="footeroff">Day Use</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <FooterBox className="footeroff">Menu</FooterBox>
          <Link
            to={""}
            style={{ textDecoration: "none", color: "white" }}
            className="footeroff"
          >
            About
          </Link>
          <Link
            to={""}
            style={{ textDecoration: "none", color: "white" }}
            className="footeroff"
          >
            Services
          </Link>
          <Link
            to={""}
            style={{ textDecoration: "none", color: "white" }}
            className="footeroff"
          >
            Booking
          </Link>
          <Link
            to={""}
            style={{ textDecoration: "none", color: "white" }}
            className="footeroff"
          >
            Blog
          </Link>
        </div>

        <div>
          <FooterBox className="footeroff">Contact</FooterBox>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
            }}
          >
            <img src={footerImg1} alt="" />
            <img src={footerImg2} alt="" />
            <img src={footerImg3} alt="" />
          </div>

          <p className="footeroff">021 Korea Seul, LA</p>
          <p className="footeroff">camper@example.com</p>
          <p className="footeroff">(021) 345-6789-99</p>
        </div>
      </FooterContainer>
    </div>
  );
}

export default Footer;
