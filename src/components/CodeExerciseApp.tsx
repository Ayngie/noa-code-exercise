import { useReducer } from "react";
import { ActionType, CountReducer } from "../reducers/CountReducer";
import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  const initialCount = { count: 4 };
  const [currentCount, dispatch] = useReducer(CountReducer, initialCount);

  console.log("currentCount:", currentCount);
  console.log("currentCount.count:", currentCount.count);

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <Button
          onClick={() =>
            dispatch({
              type: ActionType.DECREMENTED,
              payload: 1,
            })
          }
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></Button>
        <Counter count={currentCount.count} />
        <Button
          onClick={() => {
            dispatch({
              type: ActionType.INCREMENTED,
              payload: 1,
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
