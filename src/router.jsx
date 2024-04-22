import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import HomeContainer from "./Components/Motors/home";
import CaravanComponent from "./Components/Caravan/caravanmain";
import HomeMain from "./Components/Home/homemain";
import Footer from "./Components/footer/footer";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/motor" element={<HomeContainer />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        {/* <Route path="/rooms" element={<Rooms />} /> */}
        {/* <Route path="/contactus" element={<ContacUs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterComponent;
