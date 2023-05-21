import { IRepo } from "../models/IRepo";

interface IRepoViewProps {
  repoToShow: IRepo;
}

export const RepoView = ({ repoToShow }: IRepoViewProps) => {
  return (
    <div>
      <h2>The repository you chose is:</h2>
      <p>
        <span>Full name:</span> <span>{repoToShow.full_name}</span>
      </p>
      <p>
        <span>Description:</span> <span>{repoToShow.description}</span>
      </p>
      <p>
        <span>Amount of stars:</span> <span>{repoToShow.stargazers_count}</span>
      </p>
    </div>
  );
};
