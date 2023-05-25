import { styled } from "styled-components";

export const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainWrapper = styled(ColumnWrapper)`
  padding: 3rem;
  gap: 1rem;
  h1 {
    text-align: center;
  }
`;

export const CodeTestWrapper = styled(ColumnWrapper)`
  gap: 2rem;
  padding: 2rem;
  background-color: white;
  border: 5px solid blanchedalmond;
  border-radius: 5px;
  width: 70%;
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const CounterRowWrapper = styled(ColumnWrapper)`
  gap: 1rem;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;

export const ButtonContentsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

export const RepositoryWrapper = styled(ColumnWrapper)`
  width: 100%;
  @media (min-width: 1000px) {
    width: 60%;
  }
`;

export const NotFoundWrapper = styled(ColumnWrapper)`
  text-align: center;
`;
