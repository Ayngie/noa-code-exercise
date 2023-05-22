import { useReducer } from "react";
import { ActionType, CountReducer } from "../reducers/CountReducer";
import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  const initialCount = { count: 4 };
  const [currentCount, dispatch] = useReducer(CountReducer, initialCount);

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <div
          onClick={() => {
            dispatch({
              type: ActionType.DECREMENTED,
              payload: 1,
            });
          }}>
          <Button symbol={"-"} text={"DECREMENT"} className={"normal"}></Button>
        </div>
        <Counter count={currentCount.count} />
        <div
          onClick={() => {
            dispatch({
              type: ActionType.INCREMENTED,
              payload: 1,
            });
          }}>
          <Button
            symbol={"+"}
            text={"INCREMENT"}
            className={"primary"}></Button>
        </div>
      </ButtonsContainer>
      <DisplayRepo />
    </MainWrapper>
  );
};
