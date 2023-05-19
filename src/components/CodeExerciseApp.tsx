import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <Button symbol={"-"} text={"DECREMENT"} className={"normal"}></Button>
        <Counter />
        <Button symbol={"+"} text={"INCREMENT"} className={"primary"}></Button>
      </ButtonsContainer>
      <DisplayRepo />
    </MainWrapper>
  );
};
