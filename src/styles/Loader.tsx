import styled from "styled-components";

const Spinner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

const SpinnerLoader = styled.div`
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid rgb(252, 0, 122);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s lin;
`;

export const Loader = () => {
  return (
    <>
      <Spinner>
        <SpinnerLoader></SpinnerLoader>
      </Spinner>
    </>
  );
};
