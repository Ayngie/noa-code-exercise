import { CounterRowWrapper } from "./styles/Wrappers";
import { NormalButton, PrimaryButton } from "./styles/Button";
import { Counter } from "./styles/Counter";

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
      <div
        onClick={() => {
          handleDecrement();
        }}>
        <NormalButton
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></NormalButton>
      </div>

      <Counter count={count} />

      <div
        onClick={() => {
          handleIncrement();
        }}>
        <PrimaryButton
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></PrimaryButton>
      </div>
    </CounterRowWrapper>
  );
};
