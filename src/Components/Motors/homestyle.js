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
    @media only screen and (max-width: 900px) {
      display: none;
    }
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
  margin-top: 50px;
`;

export const ItemNavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(55, 55, 55, 0.3);

  .ItemNavContainerLeft {
    flex: 1;

    p {
      color: var(--text, #373737);
      font-family: Montserrat;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 100%;
    }
  }

  .ItemNavContainerRight {
    flex: 2;
    display: flex;
    justify-content: end;
    p {
      color: var(--text, #373737);
      font-family: Montserrat;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 100%;
    }
    .selectbox {
      width: 227px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      display: flex;

      margin: -8px 0 10px 10px;

      .selectboxleft {
        flex: 5;
        display: flex;
        align-items: center;
        cursor: pointer;

        p {
          color: rgba(55, 55, 55, 0.6);
          font-family: Montserrat;
          margin-left: 5px;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
        }
      }
      .selectboxright {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid rgba(55, 55, 55, 0.3);
        cursor: pointer;
      }
    }

    .selectboxnumber {
      width: 80px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 5px;
      border: 1px solid rgba(55, 55, 55, 0.3);
      display: flex;
      margin: -8px 0 10px 10px;
      cursor: pointer;

      .selectboxnumberleft {
        flex: 2;
        display: flex;
        align-items: center;

        p {
          color: rgba(55, 55, 55, 0.6);
          font-family: Montserrat;
          margin-left: 5px;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
        }
      }
      .selectboxnumberright {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 1;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid rgba(55, 55, 55, 0.3);
      }
    }

    .choosebtn {
      width: 81px;
      height: 30px;
      display: flex;
      margin: -8px 0 10px 10px;
      cursor: pointer;

      .choosebtnleft {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 41px;
        height: 30px;
        flex-shrink: 0;
        border-radius: 5px 0px 0px 5px;
        border: 1px solid rgba(55, 55, 55, 0.3);
      }

      .choosebtnright {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 41px;
        height: 30px;
        flex-shrink: 0;
        border-radius: 0px 5px 5px 0px;
        border: 1px solid rgba(55, 55, 55, 0.3);
      }
    }
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
`;

export const BoxContainer = styled.div`
  flex: 1;
  width: 223px;
  height: 307px;
  overflow: hidden;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export const FooterContainer = styled.div`
  background: #006dab;
  display: flex;
  justify-content: center;
  padding-top: 80px;
  gap: 200px;
  color: #fff;
  height: 300px;
  margin-top: 50px;
  @media only screen and (max-width: 1300px) {
    .footeroff {
      display: none;
    }
    gap: 0;
    display: flex;
    justify-content: space-between;
    padding: 40px 80px;
  }
  @media only screen and (max-width: 660px) {
    .footeroff {
      display: none;
    }

    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 40px 20px;
    gap: 0;
  }
`;

export const FooterBox = styled.h2`
  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 40px;
`;
