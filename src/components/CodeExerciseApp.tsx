import NormalButton from "./NormalButton";
import { Counter } from "./Counter";
import PrimaryButton from "./PrimaryButton";
import styled from "styled-components";
import { DisplayRepo } from "./DisplayRepo";

const Wrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
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
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <NormalButton
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal-button"}></NormalButton>
        <Counter />
        <PrimaryButton
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary-button"}></PrimaryButton>
      </ButtonsContainer>
      <DisplayRepo />
    </Wrapper>
  );
};
