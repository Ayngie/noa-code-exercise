import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
`;

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border: 16px solid #f3f3f3;
  border-top: 16px solid rgb(252, 0, 122);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: ${rotation} 2s linear infinite;
`;

export const Loader = () => {
  return (
    <>
      <Spinner></Spinner>
    </>
  );
};
