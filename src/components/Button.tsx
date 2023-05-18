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

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ButtonSymbol = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Button = ({ symbol, text }: IButtonProps) => {
  return (
    <>
      <StyledButton>
        <TextWrapper>
          <ButtonSymbol>{symbol}</ButtonSymbol>
          <span>{text}</span>
        </TextWrapper>
      </StyledButton>
    </>
  );
};
