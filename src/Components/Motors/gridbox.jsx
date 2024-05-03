import React from "react";
import { campcar } from "../mock/mockdata";
import { Link } from "react-router-dom";
import {
  CardButtonWrapper,
  Price,
  CarContainer,
  Card,
  CardBottom,
  CardBottomCarName,
  CardBottomMiddle,
  MappingButton,
  CardImg,
} from "../Motors/motorstyle";

function GridMenu() {
  const data = campcar.maindata;
  return (
    <CarContainer>
      {data.map((value, key) => {
        return (
          <Card key={key}>
            <Link to={`${value.id}`}>
              <CardImg>
                <img
                  src={value.car.photo}
                  alt="Photo of car not entered"
                  width={"100%"}
                />
              </CardImg>
            </Link>
            <CardBottom>
              <CardBottomCarName>{value.car.name}</CardBottomCarName>
              <CardBottomMiddle>
                <p>{value.car.company}</p>
                <div>
                  {/* <img src={star} alt="" width={"20px"} /> */}
                  <label>{value.car.rating}</label>
                </div>
              </CardBottomMiddle>
              <Price>{value.car.cost} Won</Price>
              <CardButtonWrapper>
                <MappingButton>Order</MappingButton>
                <MappingButton>Compare</MappingButton>
              </CardButtonWrapper>
            </CardBottom>
          </Card>
        );
      })}
    </CarContainer>
  );
}

export default GridMenu;
