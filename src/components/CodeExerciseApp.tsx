import { Button } from "./Button";
import { Counter } from "./Counter";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CodeExerciseApp = () => {
  return (
    <Wrapper>
      <p>NoA Ignite - code exercise</p>
      <ButtonsContainer>
        <Button symbol={"- "} text={"DECREMENT"}></Button>
        <Counter />
        <Button symbol={"+ "} text={"INCREMENT"}></Button>
      </ButtonsContainer>
    </Wrapper>
  );
};
