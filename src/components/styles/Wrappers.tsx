import { styled } from "styled-components";

export const MainWrapper = styled.div`
  position: relative;
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
  position: absolute;
  margin-top: 10%;
  background-color: white;
  padding: 2rem;
  border: 5px solid blanchedalmond;
  border-radius: 5px;

  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;

export const CounterRowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const ButtonContentsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const RepositoryWrapper = styled.div`
  font-family: Georgia, "Times New Roman", Times, serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 60%;
  @media (max-width: 1000px) {
    width: 90%;
  }
`;
