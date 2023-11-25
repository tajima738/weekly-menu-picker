import React, { useRef } from "react";
import styled from "styled-components";
import { FoodName } from "../types/food";
import { FOOD_LIST } from "../consts/foods";
import { FoodCounterDialog } from "./foodCounterDialog";

type Props = {
  name: FoodName;
};
const ImageContainerWrapper = styled.div`
  min-width: 65px;
`;
const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  width: 50px;
`;
const Image = styled.img`
  width: 100%;
`;
const NumOfFoodsText = styled.p`
  position: absolute;
  right: -15px;
  bottom: -5px;
  border: black 1px solid;
  background-color: white;
`;

export const FoodItem = ({ name }: Props) => {
  const src = FOOD_LIST.find((food) => food.name === name)?.src ?? "";
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  };

  const closeDialog = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
    }
  };

  return (
    <>
      <ImageContainerWrapper className="food-list" onClick={openDialog}>
        <ImageContainer>
          <Image src={src} alt={name} />
          <NumOfFoodsText>×10</NumOfFoodsText>
        </ImageContainer>
      </ImageContainerWrapper>
      <FoodCounterDialog
        name={name}
        initialCount={10}
        ref={dialogRef}
        closeDialog={closeDialog}
      />
    </>
  );
};
