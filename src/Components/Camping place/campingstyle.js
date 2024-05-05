import styled from "styled-components";
import bgimage1 from "../assets/campingplace1.png";

export const CampingPlacebg = styled.div`
  background-image: url(${bgimage1});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  P {
    color: #fff;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  h3 {
    color: #fff;
    font-family: Montserrat;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 25px;
  }
  h1 {
    color: #fff;
    font-family: Montserrat;
    font-size: 80px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const LocationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 10%;
`;
export const LocationWrapper = styled.div`
  flex: 1;
  border: 1px solid black;
  border-radius: 20px;
`;

export const PlaceOptions = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  /* justify-content: space-evenly; */
  gap: 20px;

  width: 100%;
  height: fit-content;
  margin: 80px 30px 0 30px;

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: auto auto;
    width: 100%;
  }
  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: auto;
    width: 100%;
  }
`;

export const PlaceOffers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: fit-content;
  border-radius: 10px;
  padding-top: 20px;
  padding-bottom: 30px;

  p {
    padding-top: 20px;
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  a {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    cursor: pointer;
    text-transform: uppercase;
  }
  a:hover {
    text-decoration-line: underline;
  }
  img {
    width: 100%;
  }
`;
