import { Count } from "../models/Count";

interface ICounterProps {
  currentCount: Count;
}

export const Counter = ({ currentCount }: ICounterProps) => {
  return (
    <div>
      <p>Counter: {currentCount.count}</p>
    </div>
  );
};
