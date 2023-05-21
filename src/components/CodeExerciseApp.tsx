import { useEffect, useState } from "react";
import { MainWrapper } from "../styles/Wrappers";
import { CounterView } from "./CounterView";
import { RepoView } from "./RepoView";
import { IRepo } from "../models/IRepo";
import { IError } from "../models/IError";
import axios from "axios";

export const CodeExerciseApp = () => {
  // const [isLoading, setIsLoading] = useState<boolean>(false);
  const [count, setCount] = useState<number>(2);
  console.log("count:", count);

  //variable for reponame:
  //make sure variablename updates with state change of count

  //call getRepos with variablename, catch response
  const [repoToShow, setRepoToShow] = useState<IRepo>({
    full_name: "",
    description: "",
    stargazers_count: 0,
  });

  useEffect(() => {
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

    let repoToGet: string = repoNamesList[count].repoName;
    console.log("repoToGet: ", repoToGet);

    async function fetchData() {
      try {
        // You can await here
        const response = await axios.get<IRepo>(
          `https://api.github.com/repos/${repoToGet}`
        );
        // ...
        const newRepo: IRepo = {
          full_name: response.data.full_name,
          description: response.data.description,
          stargazers_count: response.data.stargazers_count,
        };
        setRepoToShow(newRepo);
      } catch (error) {
        console.error("Oops, there was the following error: ", error);
        return {};
      }
    }

    fetchData();
  }, [count]); // Or [] if effect doesn't need props or state

  //send response as prop

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (count < 7) {
      console.log("Incremented one.");
      let newCount: number = count + 1;
      // let nameOfNewRepoToGet: string = repoNamesList[newCount].repoName;

      setCount(newCount);
      // setRepoToGet(nameOfNewRepoToGet);
    } else {
      console.log("Count is 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (count > 0) {
      console.log("Decremented one.");
      let newCount: number = count - 1;
      // let nameOfNewRepoToGet: string = repoNamesList[newCount].repoName;

      setCount(newCount);
      // setRepoToGet(nameOfNewRepoToGet);
    } else {
      console.log("Count is 0, no decrement action was performed.");
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
      {/* {isLoading && <h3>Repository is loading...</h3>} */}
      <RepoView repoToShow={repoToShow} />
    </MainWrapper>
  );
};
