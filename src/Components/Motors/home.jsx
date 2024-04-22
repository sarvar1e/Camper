import React from "react";
import {
  BoxContainer,
  CostWrapper,
  Costbtn,
  HomeBg,
  HomeBodyWrapper,
  ItemContainer,
  ItemNavContainer,
  ItemWrapper,
  ProductItems,
  ProductsBox,
  Productwrapper,
} from "./homestyle";
import { campcar } from "../../mockdata";
import image1 from "../assets/compare1.png";
import image2 from "../assets/compare2.png";
import image3 from "../assets/compare3.png";
import icon1 from "../assets/more-icon.png";
import icon2 from "../assets/clarity_grid-view-solid.jpg";
import icon3 from "../assets/ic_round-view-list.png";
import HomeBoxes from "./homeboxes";

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
          <div className="allcost">
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

            <div className="comparewrapper">
              <p>Compare</p>
              <div className="comparephotos">
                <div className="comparebox">
                  {/* <img src={image1} alt="image1" /> */}
                </div>
                <div className="comparebox">
                  {/* <img src={image2} alt="image2" /> */}
                </div>
                <div className="comparebox">
                  {/* <img src={image3} alt="image3" /> */}
                </div>
              </div>
            </div>
          </div>
        </CostWrapper>
        <ItemWrapper>
          <ItemNavContainer>
            <div className="ItemNavContainerLeft">
              <p>
                Item <span style={{ color: "blue" }}>{data.length}</span>
              </p>
            </div>
            <div className="ItemNavContainerRight">
              <p>Sort by</p>

              <div className="selectbox">
                <div className="selectboxleft">
                  <p>Select</p>
                </div>
                <div className="selectboxright">
                  <img src={icon1} alt="icon" />
                </div>
              </div>
              <div className="selectboxnumber">
                <div className="selectboxnumberleft">
                  <p>60</p>
                </div>
                <div className="selectboxnumberright">
                  <img src={icon1} alt="icon" />
                </div>
              </div>

              <div className="choosebtn">
                <div className="choosebtnleft">
                  <img src={icon2} alt="icon2" />
                </div>
                <div className="choosebtnright">
                  <img src={icon3} alt="icon3" />
                </div>
              </div>
            </div>
          </ItemNavContainer>

          <ItemContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
            <BoxContainer></BoxContainer>
          </ItemContainer>
        </ItemWrapper>
      </HomeBodyWrapper>
    </>
  );
}

export default HomeContainer;
