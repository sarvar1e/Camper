import styled from "styled-components";

export const ImageCont = styled.div`
  display: grid;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 60px 0 60px;
  gap: 20px;
  img {
    height: 150px;
    width: 100%;
    border-radius: 10px;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    );
  }
  @media (max-width: 850px) {
    display: grid;
    grid-template-columns: auto auto auto;
  }
  @media (max-width: 430px) {
    display: grid;
    grid-template-columns: auto auto;
  }
`;

export const Copymap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 40px;
  padding: 0 60px 0 60px;

  button {
    color: var(--sariq, #ff7a00);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 120px;
    height: 25px;
    border-radius: 5px;
    border: 1px solid var(--yellow, #ff7a00);
    background-color: white;
    color: #ff7a00;
    cursor: pointer;
  }
  p {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Locationline = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1px;
  background: rgba(55, 55, 55, 0.2);
  margin-top: 10.24px;
  margin-bottom: 20px;
`;

export const ContactInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  gap: 100px;
  padding: 0 60px;
  div {
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  h3 {
    color: var(--blue, #006dab);
    font-family: monospace;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* align-items: center;
justify-content: left; */
  padding: 0 60px 0 60px;
  margin-top: 20px;
  h2 {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: 10px;
  }
`;
