import styled from "styled-components";
import { ButtonContentsWrapper } from "./Wrappers";

interface IButtonProps {
  onClick: () => void;
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
    cursor: pointer;
  }
`;

const Text = styled.span`
  line-height: 2rem;
`;

const Symbol = styled.span`
  line-height: 1rem;
  font-size: 1.3rem;
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

export const NormalButton = styled(Button).attrs((props) => ({
  className: "normal",
}))`
  color: black;
  background-color: white;
  border: 2px solid black;

  &:hover {
    color: white;
    background-color: black;
    border: 2px solid black;
  }

  &:active {
    color: black;
    background-color: white;
    border: 2px solid black;
  }
`;

export const PrimaryButton = styled(Button).attrs((props) => ({
  className: "primary",
}))`
  color: white;
  background-color: hotpink;
  border: 2px solid hotpink;

  &:hover {
    color: white;
    background-color: rebeccapurple;
    border: 2px solid rebeccapurple;
  }

  &:active {
    color: white;
    background-color: hotpink;
    border: 2px solid hotpink;
  }
`;
