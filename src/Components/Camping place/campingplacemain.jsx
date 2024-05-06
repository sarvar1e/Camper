import React from "react";
import { CampingPlacebg, PlaceOffers, PlaceOptions } from "./campingstyle";
import placeone from "../assets/image 11.png";
import placetwo from "../assets/image 12.png";
import placethree from "../assets/image 13.png";
import Reveal from "react-reveal/Reveal";
import { Link } from "react-router-dom";

const CampingPlace = () => {
  return (
    <>
      <CampingPlacebg>
        <p>Home / Camping place</p>
        <h1>Camping places</h1>
      </CampingPlacebg>

      <Reveal>
        <PlaceOptions>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placeone} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placetwo} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placethree} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placetwo} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placeone} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placethree} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>

          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placeone} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placethree} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placetwo} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placeone} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placetwo} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
          <Link to="/location" style={{ textDecoration: "none" }}>
            <PlaceOffers>
              <img src={placethree} alt="place" />
              <div>
                <p>Camping place name</p>
                <Link to="/location">Location</Link>
              </div>
            </PlaceOffers>
          </Link>
        </PlaceOptions>
      </Reveal>
    </>
  );
};

export default CampingPlace;
