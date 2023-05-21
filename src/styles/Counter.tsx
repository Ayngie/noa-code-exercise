import styled from "styled-components";
interface ICounterProps {
  count: number;
}

const Text = styled.p`
  font-size: 1.5rem;
  font-family: Arial, Helvetica, sans-serif;
`;

export const Counter = ({ count }: ICounterProps) => {
  return (
    <>
      <Text>Counter: {count}</Text>
    </>
  );
};
