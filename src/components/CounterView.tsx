import { CounterRowWrapper } from "./styles/Wrappers";
import { NormalButton, PrimaryButton } from "./styles/Buttons";
import { Counter } from "./styles/Counter";
import { ButtonContents } from "./styles/ButtonContents";

interface ICounterProps {
  count: number;
  handleIncrement: () => void;
  handleDecrement: () => void;
}

export const CounterView = ({
  count,
  handleIncrement,
  handleDecrement,
}: ICounterProps) => {
  return (
    <CounterRowWrapper>
      <NormalButton
        onClick={() => {
          handleDecrement();
        }}>
        <ButtonContents
          symbol={"-"}
          text={"DECREMENT"}
          shouldTranslate></ButtonContents>
      </NormalButton>

      <Counter count={count} />

      <PrimaryButton
        onClick={() => {
          handleIncrement();
        }}>
        <ButtonContents symbol={"+"} text={"INCREMENT"}></ButtonContents>
      </PrimaryButton>
    </CounterRowWrapper>
  );
};
