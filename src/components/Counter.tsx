interface ICounterProps {
  count: number;
}

export const Counter = ({ count }: ICounterProps) => {
  return (
    <div>
      <p>Counter: {count}</p>
    </div>
  );
};
