import React from "react";
import styled from "styled-components";

interface IButtonProps {
  symbol: string;
  text: string;
  className: string;
  children?: React.JSX.Element;
}

const BasicButtonStyling = styled.button`
  padding: 0.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  border-radius: 50px;
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

export const Button = ({ symbol, text, className, children }: IButtonProps) => {
  return (
    <BasicButtonStyling className={className}>
      {children}
      <TextWrapper>
        <ButtonSymbol>{symbol}</ButtonSymbol>
        <span>{text}</span>
      </TextWrapper>
    </BasicButtonStyling>
  );
};

export default Button;
