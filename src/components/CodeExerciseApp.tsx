import { useReducer, useState } from "react";
import { ActionType, CountReducer } from "../reducers/CountReducer";
import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  const [currentCount, dispatch] = useReducer(
    CountReducer,
    JSON.parse(localStorage.getItem("currentCountFromLS") || "0")
  );
  localStorage.setItem("currentCountFromLS", JSON.stringify(currentCount));

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <Button
          onClick={() =>
            dispatch({
              type: ActionType.DECREMENTED,
              payload: currentCount.count,
            })
          }
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></Button>
        <Counter currentCount={currentCount} />
        <Button
          onClick={() => {
            dispatch({
              type: ActionType.INCREMENTED,
              payload: currentCount.count,
            });
          }}
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></Button>
      </ButtonsContainer>
      <DisplayRepo />
    </MainWrapper>
  );
};
