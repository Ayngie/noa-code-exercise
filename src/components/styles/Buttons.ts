import styled from "styled-components";

interface IButtonsProps {
  symbol?: string;
  text?: string;
  className?: string;
}

const Button = styled.button`
  padding: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 50px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;

export const NormalButton = styled(Button)<IButtonsProps>`
  color: black;
  background-color: white;
  border: 1px solid black;
  &:hover {
    background-color: black;
    border: 1px solid black;
  }
  &:active {
    color: black;
    background-color: white;
    border: 1px solid black;
  }
`;

export const PrimaryButton = styled(Button)`
  color: white;
  background-color: hotpink;
  border: 1px solid hotpink;
  &:hover {
    background-color: rebeccapurple;
    border: 1px solid rebeccapurple;
  }
  &:active {
    color: white;
    background-color: hotpink;
    border: 1px solid hotpink;
  }
`;
