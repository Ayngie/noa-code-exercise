import styled from "styled-components";

interface IButtonProps {
  symbol: string;
  text: string;
}

const StyledButton = styled.button`
  padding: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 50px;
  border-style: none;
`;

export const Button = ({ symbol, text }: IButtonProps) => {
  return (
    <>
      <StyledButton>
        <span>{symbol}</span>
        <span>{text}</span>
      </StyledButton>
    </>
  );
};
