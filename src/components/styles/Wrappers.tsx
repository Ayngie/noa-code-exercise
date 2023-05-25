import { styled } from "styled-components";

export const MainWrapper = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  h1 {
    text-align: center;
  }
`;

export const CodeTestWrapper = styled(MainWrapper)`
  background-color: white;
  padding: 2rem;
  border: 5px solid blanchedalmond;
  border-radius: 5px;
  width: 70%;

  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const CounterRowWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const ButtonContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RepositoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;

  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
