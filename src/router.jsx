import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomeFirstBox />} /> */}
        {/* <Route path="/facilities" element={<Facilities />} /> */}
        {/* <Route path="/rooms" element={<Rooms />} /> */}
        {/* <Route path="/contactus" element={<ContacUs />} /> */}
      </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
};

export default RouterComponent;
