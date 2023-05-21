import { NormalButton, PrimaryButton } from "../styles/Button";
import { ButtonsContainer } from "../styles/Wrappers";

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
    <div>
      <ButtonsContainer>
        <NormalButton
          onClick={() => {
            handleIncrement();
          }}
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></NormalButton>

        <p>Counter: {count}</p>

        <PrimaryButton
          onClick={() => {
            handleDecrement();
          }}
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></PrimaryButton>
      </ButtonsContainer>
    </div>
  );
};
