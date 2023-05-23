import { styled } from "styled-components";
import { IRepo } from "../models/IRepo";
import { RepositoryContents } from "./styles/Wrappers";

interface IRepoViewProps {
  repoShown: IRepo;
}

const Title = styled.span`
  font-weight: bold;
`;
const Info = styled.span`
  font-family: Georgia, "Times New Roman", Times, serif;
`;

export const RepoView = ({ repoShown }: IRepoViewProps) => {
  return (
    <RepositoryContents>
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
    </RepositoryContents>
  );
};
