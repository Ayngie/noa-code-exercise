import styled from "styled-components";
import { ButtonContentsWrapper } from "./Wrappers";

interface IButtonProps {
  symbol: string;
  text: string;
  className: string;
}

const StyledButton = styled.button`
  padding: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 50px;

  color: ${(props) => (props.className === "primary" ? "white" : "black")};
  background-color: ${(props) =>
    props.className === "primary" ? "hotpink" : "white"};
  border: ${(props) =>
    props.className === "normal" ? "2px solid black" : "none"};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.className === "normal" ? "white" : "white")};
    background-color: ${(props) =>
      props.className === "primary" ? "rebeccapurple" : "black"};
  }

  &:active {
    color: ${(props) => (props.className === "primary" ? "white" : "black")};
    background-color: ${(props) =>
      props.className === "primary" ? "hotpink" : "white"};
  }
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
  line-height: 2;
`;

const Symbol = styled.span`
  font-size: 2rem;
  font-weight: bold;
`;

export const Button = ({ symbol, text, className }: IButtonProps) => {
  return (
    <StyledButton className={className}>
      <ButtonContentsWrapper>
        <Symbol>{symbol}</Symbol>
        <Text>{text}</Text>
      </ButtonContentsWrapper>
    </StyledButton>
  );
};
