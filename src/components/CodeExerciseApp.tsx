import { useEffect, useState } from "react";
import { MainWrapper } from "../styles/Wrappers";
import { CounterView } from "./CounterView";
import { RepoView } from "./RepoView";
import { IRepo } from "../models/IRepo";
import axios from "axios";
import { Loader } from "../styles/Loader";

export const CodeExerciseApp = () => {
  const [count, setCount] = useState<number>(0);
  console.log("count:", count);

  const [repoToShow, setRepoToShow] = useState<IRepo>({
    full_name: "",
    description: "",
    stargazers_count: 0,
  });

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noRepo, setNoRepo] = useState<boolean>(false);

  useEffect(() => {
    setNoRepo(true);
    setIsLoading(true);

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
        const response = await axios.get<IRepo>(
          `https://api.github.com/repos/${repoToGet}`
        );
        const newRepo: IRepo = {
          full_name: response.data.full_name,
          description: response.data.description,
          stargazers_count: response.data.stargazers_count,
        };
        setRepoToShow(newRepo);
        setIsLoading(false);
        setNoRepo(false);
      } catch (error) {
        if (error) {
          console.log("if error");
          setNoRepo(true);
          setIsLoading(false);
        }
        console.error("Oops, there was the following error: ", error);
        return {};
      }
    }

    fetchData();
  }, [count]);

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (count < 7) {
      console.log("Incremented one.");
      let newCount: number = count + 1;

      setCount(newCount);
      // setNoRepo(false);
    } else {
      console.log("Count is 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (count > 0) {
      console.log("Decremented one.");
      let newCount: number = count - 1;

      setCount(newCount);
      // setNoRepo(false);
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
      {isLoading && (
        <div>
          <h3>Loading repository...</h3>
          <Loader />
        </div>
      )}
      {noRepo && !isLoading && (
        <h2>Sorry, we can't show you this repository.</h2>
      )}
      {!noRepo && <RepoView repoToShow={repoToShow} />}
    </MainWrapper>
  );
};
