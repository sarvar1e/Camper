import React from "react";
import { locationm } from "../mock/campingplacemock";
import { Link } from "react-router-dom";
import { LocationWrapper } from "./campingstyle";

const CampingPlaceBody = () => {
  const data = locationm.maindata;
  console.log("camp Data: ", data);
  return (
    <p>hi</p>
    // <div>
    //   {data.map((value, key) => {
    //     return (
    //       <LocationWrapper key={key}>
    //         <p>{value.location.name || "no data"}</p>
    //       </LocationWrapper>
    //     );
    //   })}
    // </div>
  );
};

export default CampingPlaceBody;
