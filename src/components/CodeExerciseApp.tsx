import { useEffect, useState } from "react";
import { MainWrapper } from "../styles/Wrappers";
import { CounterView } from "./CounterView";
import { RepoView } from "./RepoView";

export const CodeExerciseApp = () => {
  const repoNamesList = [
    { repoName: "eslint/eslint" },
    { repoName: "oakwood/front-end-questions" },
    { repoName: "babel/babel" },
    { repoName: "webpack/webpack" },
    { repoName: "storybooks/storybook" },
    { repoName: "facebook/react" },
    { repoName: "reactjs/redux" },
    { repoName: "expressjs/express" },
  ];

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(7);
  console.log("count:", count);

  const [repoToGet, setRepoToGet] = useState<string>(
    repoNamesList[count].repoName
  );
  console.log("repoToGet: ", repoToGet);

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (count < 7) {
      console.log("Incremented one.");
      let newCount: number = count + 1;
      let nameOfNewRepoToGet: string = repoNamesList[newCount].repoName;

      setCount(newCount);
      setRepoToGet(nameOfNewRepoToGet);
    } else {
      console.log("Count was 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (count > 0) {
      console.log("Decremented one.");
      let newCount: number = count - 1;
      let nameOfNewRepoToGet: string = repoNamesList[newCount].repoName;

      setCount(newCount);
      setRepoToGet(nameOfNewRepoToGet);
    } else {
      console.log("Count was 0, no decrement action was performed.");
    }
  };

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <CounterView
        count={count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      {/* {isLoading && <h3>Repo is loading...</h3>} */}
      <RepoView />
    </MainWrapper>
  );
};
