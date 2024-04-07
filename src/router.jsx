import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./navbar/navbar";
import HomeContainer from "./Home/home";
import CaravanComponent from "./Caravan/caravanmain";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        {/* <Route path="/rooms" element={<Rooms />} /> */}
        {/* <Route path="/contactus" element={<ContacUs />} /> */}
      </Routes>
      {/* <FooterComponent /> */}
    </BrowserRouter>
  );
};

export default RouterComponent;
