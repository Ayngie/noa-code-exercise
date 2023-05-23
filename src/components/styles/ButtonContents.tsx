import { styled } from "styled-components";
import { ButtonContentsWrapper } from "./Wrappers";

interface IButtonContentProps {
  symbol?: string;
  text?: string;
  shouldtranslate: string;
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
    props.shouldtranslate ? "translateY(-2px)" : "none"};
`;

export const ButtonContents = ({
  symbol,
  text,
  shouldtranslate,
}: IButtonContentProps) => {
  return (
    <ButtonContentsWrapper>
      <Symbol shouldtranslate={shouldtranslate}>{symbol}</Symbol>
      <Text>{text}</Text>
    </ButtonContentsWrapper>
  );
};
