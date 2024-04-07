import styled from "styled-components";
import image1 from "../assets/mainbg.png";

export const HomeBg = styled.div`
  background-image: url(${image1});
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

export const HomeBodyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CostWrapper = styled.div`
  flex: 1;
  padding: 50px;

  h5 {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%;
    padding: 10px;
    border-bottom: 1px solid rgba(55, 55, 55, 0.3);
  }
`;

export const Buttonbox = styled.div`
  width: 94px;
  height: 35px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 1px solid var(--blue, #006dab);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const Productwrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
`;

export const ProductItems = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  p {
    color: var(--text, #373737);
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 100%;
  }
`;

export const ProductsBox = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 5px;
  border: 1px solid #666;
  background: #fff;
  margin-right: 10px;
`;

export const Costbtn = styled.div`
  width: 115.804px;
  height: 38.968px;
  flex-shrink: 0;
  border-radius: 60px;
  background: var(#ff7a00);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  background: ${(props) => (props.$costbtn ? `#006DAB` : "#ff7a00")};
  margin-left: ${(props) => (props.$costbtn ? `8.2px` : "0px  ")};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
  p {
    color: #fff;
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;

export const ItemWrapper = styled.div`
  flex: 5;
`;
