import styled from "styled-components";
import { ButtonContentsWrapper } from "./Wrappers";

interface IButtonProps {
  symbol: string;
  text: string;
  className: string;
}

const BasicButton = styled.button`
  padding: 0.5rem;
  padding-left: 2.5rem;
  padding-right: 2.5rem;
  border-radius: 50px;
  &:hover {
    color: white;
    cursor: pointer;
  }
`;
const Text = styled.span`
  line-height: 2rem;
  letter-spacing: 1px;
`;
const Symbol = styled.span`
  line-height: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = ({ symbol, text, className }: IButtonProps) => {
  return (
    <BasicButton className={className}>
      <ButtonContentsWrapper>
        <Symbol>{symbol}</Symbol>
        <Text>{text}</Text>
      </ButtonContentsWrapper>
    </BasicButton>
  );
};

export const NormalButton = styled(Button)`
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
  ${Symbol} {
    transform: translateY(-2px);
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
