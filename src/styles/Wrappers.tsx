import { styled } from "styled-components";

export const MainWrapper = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  background-color: #fff6eb;

  h1 {
    text-align: center;
  }
`;

export const CodeTestWrapper = styled(MainWrapper)`
  background-color: white;
  padding: 2rem;
  border: 5px solid blanchedalmond;
  height: auto;
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

export const RepositoryContents = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  @media (max-width: 768px) {
    width: 90%;
  }
`;
