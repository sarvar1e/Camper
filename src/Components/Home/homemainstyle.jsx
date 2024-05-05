import styled from "styled-components";

export const Homecontainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: fit-content;
  h2 {
    margin-top: 50px;
    margin-bottom: 44px;
    color: var(--text, #373737);
    font-family: Gilroy;
    font-size: 28px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    border-bottom: 2px solid #ff7a00;
  }
`;

export const VideosContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  /* justify-content: center;
  margin: auto; */

  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const BlogsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const BlogsLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h3 {
    color: #000;
    font-family: Montserrat;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  P {
    color: var(--sariq, #ff7a00);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 15px;
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 1300px) {
    flex-direction: column;
    align-items: center;
  }
  @media only screen and (max-width: 660px) {
    align-items: start;
  }
  h5 {
    width: 400px;
    color: #000;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    @media only screen and (max-width: 1300px) {
      width: 80vw;
    }
  }
`;

export const BlogsRight = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  @media only screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 660px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
