import { useReducer } from "react";
import { ActionType, CountReducer } from "../reducers/CountReducer";
import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  const [count, dispatch] = useReducer(
    CountReducer,
    0
    // JSON.parse(localStorage.getItem("count" || 0)) // "0" ??
  );

  // localStorage.setItem("count", JSON.stringify(count));

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <Button
          onClick={() =>
            dispatch({ type: ActionType.DECREMENTED, payload: count })
          }
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></Button>
        <Counter count={count} />
        <Button
          onClick={() => {
            dispatch({ type: ActionType.INCREMENTED, payload: count });
          }}
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></Button>
      </ButtonsContainer>
      <DisplayRepo />
    </MainWrapper>
  );
};
