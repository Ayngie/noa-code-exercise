import { styled } from "styled-components";

export const MainWrapper = styled.div`
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    text-align: center;
  }
`;

export const CounterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ButtonContents = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
