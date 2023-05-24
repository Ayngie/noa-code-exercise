import { styled } from "styled-components";
import { IRepo } from "../models/IRepo";
import { RepositoryWrapper } from "./styles/Wrappers";

interface IRepoViewProps {
  repoShown: IRepo;
}

const Info = styled.span`
  font-family: Georgia, "Times New Roman", Times, serif;
`;
const Title = styled(Info)`
  font-weight: bold;
`;

export const RepoView = ({ repoShown }: IRepoViewProps) => {
  return (
    <RepositoryWrapper>
      <h2>The repository you chose is:</h2>
      <div>
        <p>
          <Title>Full name: </Title> <Info>{repoShown.full_name}</Info>
        </p>
        <p>
          <Title>Description: </Title>
          <Info>{repoShown.description}</Info>
        </p>
        <p>
          <Title>Amount of stars: </Title>
          <Info>{repoShown.stargazers_count}</Info>
        </p>
      </div>
    </RepositoryWrapper>
  );
};
