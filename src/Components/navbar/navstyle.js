import styled from "styled-components";

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  position: inherit;
  padding: 22px 70px;
  z-index: 999;
`;

export const NavTextWrapper = styled.div`
  flex: 4.5;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const NavTextBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const LogoMain = styled.div`
  flex: 1.5;
  display: flex;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--blue, #006dab);
    font-family: Montserrat;
    font-size: 38px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
  }
`;

export const Orangenotfication = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 13.263px;
  flex-shrink: 0;
  background-color: #ff7a00;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9998;
  margin-left: -8px;

  P {
    color: #fff;
    font-family: Inter;
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const NavIcons = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
`;
