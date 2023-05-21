import { Button } from "../styles/Button";
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
        <Button
          onClick={() => {
            handleIncrement();
          }}
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></Button>
        <p>Counter: {count}</p>

        <Button
          onClick={() => {
            handleDecrement();
          }}
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></Button>
      </ButtonsContainer>
    </div>
  );
};
