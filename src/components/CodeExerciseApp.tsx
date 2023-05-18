import NormalButton from "./NormalButton";
import { Counter } from "./Counter";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const CodeExerciseContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

export const CodeExerciseApp = () => {
  return (
    <Wrapper>
      <h1>NoA Ignite - code exercise</h1>
      <CodeExerciseContainer>
        <NormalButton
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal-button"}></NormalButton>
        <Counter />
        <PrimaryButton
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary-button"}></PrimaryButton>
      </CodeExerciseContainer>
    </Wrapper>
  );
};
