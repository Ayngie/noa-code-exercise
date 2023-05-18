import { Button } from "./Button";
import { Counter } from "./Counter";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CodeExerciseApp = () => {
  return (
    <Wrapper>
      <h1>NoA Ignite - code exercise</h1>
      <Container>
        <Button symbol={"-"} text={"DECREMENT"}></Button>
        <Counter />
        <Button symbol={"+"} text={"INCREMENT"}></Button>
      </Container>
    </Wrapper>
  );
};
