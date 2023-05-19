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
    props.className === "primary" ? "2px solid hotpink" : "2px solid black"};

  &:hover {
    cursor: pointer;
    color: ${(props) => (props.className === "primary" ? "white" : "white")};
    background-color: ${(props) =>
      props.className === "primary" ? "rebeccapurple" : "black"};
    border: ${(props) =>
      props.className === "primary"
        ? "2px solid rebeccapurple"
        : "2px solid black"};
  }

  &:active {
    color: ${(props) => (props.className === "primary" ? "white" : "black")};
    background-color: ${(props) =>
      props.className === "primary" ? "hotpink" : "white"};
    border: ${(props) =>
      props.className === "primary" ? "2px solid hotpink" : "2px solid black"};
  }
`;

const Text = styled.span`
  font-size: 1rem;
  font-weight: 500;
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
