import React from "react";

import blogsImg1 from "../assets/blogs-img-1 copy.png";
import blogsImg2 from "../assets/blogs-img-2 copy.png";
import blogsImg3 from "../assets/blogs-img-3 copy.png";
import blogsImg4 from "../assets/blogs-img-4 copy.png";
import blogsImg5 from "../assets/blogs-img-5 copy.png";
import blogsImg6 from "../assets/blogs-img-6 copy.png";

import Carousel from "./homecarousel";
import MultiCarousel from "../multicarousel/multicarousel";
import {
  BlogsContainer,
  BlogsLeft,
  BlogsRight,
  Homecontainer,
} from "./homemainstyle";
import PopUp from "./popupvideo/popup";

const HomeMain = () => {
  return (
    <div>
      <Carousel />
      <Homecontainer>
        <h2>Recommend</h2>
        <MultiCarousel />

        <h2>Video</h2>
        <PopUp />
        <h2>Blogs</h2>
        <BlogsContainer>
          <BlogsLeft>
            <h3>Lorem ipsum</h3>
            <p>@Lorem ipsum</p>

            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Placerat
              platea mauris at turpis. Volutpat, morbi sit vitae id. Aliquam
              eleifend aenean neque in in a quam vivamus
            </h5>
          </BlogsLeft>
          <BlogsRight>
            <img src={blogsImg1} alt="" />
            <img src={blogsImg2} alt="" />
            <img src={blogsImg3} alt="" />
            <img src={blogsImg4} alt="" />
            <img src={blogsImg5} alt="" />
            <img src={blogsImg6} alt="" />
          </BlogsRight>
        </BlogsContainer>
      </Homecontainer>
    </div>
  );
};

export default HomeMain;
