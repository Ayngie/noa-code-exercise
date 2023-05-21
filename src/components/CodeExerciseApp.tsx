import { useState } from "react";
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
  const [repoToGet, setRepoToGet] = useState<string>(
    repoNamesList[count].repoName
  );
  console.log("count:", count);
  console.log("repoToGet: ", repoToGet);

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (count < 7) {
      console.log("Incremented one.");
      setCount(count + 1);
      setRepoToGet(repoNamesList[count + 1].repoName);
    } else {
      console.log("Count was 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (count > 0) {
      console.log("Decremented one.");
      setCount(count - 1);
      setRepoToGet(repoNamesList[count - 1].repoName);
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
