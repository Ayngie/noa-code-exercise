import { NormalButton, PrimaryButton } from "../styles/Button";
import { Counter } from "../styles/Counter";
import { CounterRow } from "../styles/Wrappers";

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
    <CounterRow>
      <NormalButton
        onClick={() => {
          handleIncrement();
        }}
        symbol={"-"}
        text={"DECREMENT"}
        className={"normal"}></NormalButton>

      <Counter count={count} />

      <PrimaryButton
        onClick={() => {
          handleDecrement();
        }}
        symbol={"+"}
        text={"INCREMENT"}
        className={"primary"}></PrimaryButton>
    </CounterRow>
  );
};
