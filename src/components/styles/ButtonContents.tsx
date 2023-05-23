import { styled } from "styled-components";
import { ButtonContentsWrapper } from "./Wrappers";

interface IButtonContentProps {
  symbol?: string;
  text?: string;
  shouldTranslate?: boolean;
}

const Text = styled.span`
  line-height: 2rem;
  letter-spacing: 1px;
`;
const Symbol = styled.span<IButtonContentProps>`
  line-height: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  transform: ${(props: IButtonContentProps) =>
    props.shouldTranslate ? "translateY(-2px)" : "none"};
`;

export const ButtonContents = ({
  symbol,
  text,
  shouldTranslate,
}: IButtonContentProps) => {
  return (
    <ButtonContentsWrapper>
      <Symbol shouldTranslate={shouldTranslate}>{symbol}</Symbol>
      <Text>{text}</Text>
    </ButtonContentsWrapper>
  );
};
