import { useState } from "react";
import { MainWrapper } from "../styles/Wrappers";
import { CounterView } from "./CounterView";
import { RepoView } from "./RepoView";
import { Count } from "../models/Count";

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
  const [currentCount, setCurrentCount] = useState<Count>({ count: 5 });
  const [repoToGet, setRepoToGet] = useState<string>(
    repoNamesList[currentCount.count].repoName
  );
  console.log("currentCount.count:", currentCount.count);
  console.log("repoToGet: ", repoToGet);

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (currentCount.count < 7) {
      console.log("Incremented one.");
      setCurrentCount({ ...currentCount, count: currentCount.count + 1 });
      setRepoToGet(repoNamesList[currentCount.count + 1].repoName);
    } else {
      console.log("Count was 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (currentCount.count > 0) {
      console.log("Decremented one.");
      setCurrentCount({ ...currentCount, count: currentCount.count - 1 });
      setRepoToGet(repoNamesList[currentCount.count - 1].repoName);
    } else {
      console.log("Count was 0, no decrement action was performed.");
    }
  };

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <CounterView
        count={currentCount.count}
        handleIncrement={handleIncrement}
        handleDecrement={handleDecrement}
      />
      {/* {isLoading && <h3>Repo is loading...</h3>} */}
      <RepoView />
    </MainWrapper>
  );
};
