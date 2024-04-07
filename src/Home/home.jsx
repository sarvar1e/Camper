import React from "react";
import {
  CostWrapper,
  Costbtn,
  HomeBg,
  HomeBodyWrapper,
  ProductItems,
  ProductsBox,
  Productwrapper,
} from "./homestyle";
import { campcar } from "../mockdata";

function HomeContainer() {
  const data = campcar.maindata;
  return (
    <>
      <HomeBg>
        <p>Home / Motors</p>
        <h3>Our ranges</h3>
        <h1>Motors</h1>
      </HomeBg>

      <HomeBodyWrapper>
        <CostWrapper>
          <h5>Cost of car</h5>

          <div className="locationinput">
            <div className="from">
              <p>from</p>
              <div className="frominput"></div>
            </div>
            <div className="to">
              <p>to</p>
              <div className="frominput"></div>
            </div>
          </div>

          <h5 style={{ marginTop: "50px" }}>Brand</h5>

          <Productwrapper>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Aidal</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Knal</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>escape</p>
            </ProductItems>
          </Productwrapper>

          <h5 style={{ marginTop: "50px" }}>Company</h5>

          <Productwrapper>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>escape</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Aidal</p>
            </ProductItems>
          </Productwrapper>

          <h5 style={{ marginTop: "50px" }}>License type</h5>

          <Productwrapper>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>1 year</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>2 year</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>1.5 year</p>
            </ProductItems>
          </Productwrapper>

          <h5 style={{ marginTop: "50px" }}>Number of travelers</h5>

          <Productwrapper>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>2</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>3-4</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>5+</p>
            </ProductItems>
          </Productwrapper>

          <h5 style={{ marginTop: "50px" }}>Location</h5>

          <Productwrapper>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Seoul</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Korea</p>
            </ProductItems>
            <ProductItems>
              <ProductsBox></ProductsBox>
              <p>Pusan</p>
            </ProductItems>
          </Productwrapper>

          <div style={{ display: "flex" }}>
            <Costbtn>
              <p>Cancel</p>
            </Costbtn>
            <Costbtn $costbtn>
              <p>Search</p>
            </Costbtn>
          </div>

          <div className="comparebox">
            <p>Compare</p>
          </div>
        </CostWrapper>
      </HomeBodyWrapper>
    </>
  );
}

export default HomeContainer;
