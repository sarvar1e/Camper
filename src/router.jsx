import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/navbar";
import MotorContainer from "./Components/Motors/motormain";
import CaravanComponent from "./Components/Caravan/caravanmain";
import HomeMain from "./Components/Home/homemain";
import Footer from "./Components/footer/footer";
import CampingPlace from "./Components/Camping place/campingplacemain";
import LocationContainer from "./Components/Camping place/camping location/Locations";

const RouterComponent = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeMain />} />
        <Route path="/motor" element={<MotorContainer />} />
        <Route path="/caravan" element={<CaravanComponent />} />
        <Route path="/location" element={<LocationContainer />} />
        <Route path="/campingplace" element={<CampingPlace />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default RouterComponent;
