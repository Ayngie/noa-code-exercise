import { useEffect, useState } from "react";
import { IRepo } from "../models/IRepo";
import {
  CodeTestWrapper,
  MainWrapper,
  NotFoundWrapper,
} from "./styles/Wrappers";
import { CounterView } from "./CounterView";
import { Loader } from "./styles/Loader";
import { RepoView } from "./RepoView";
import { getData } from "../services/getRepo";

export const CodeExerciseApp = () => {
  const [count, setCount] = useState<number>(
    parseInt(JSON.parse(localStorage.getItem("countfromLS") || "0")) || 0
  );

  const [repoShown, setRepoToShow] = useState<IRepo>(
    JSON.parse(
      localStorage.getItem("repoFromLS") ||
        JSON.stringify({
          full_name: "",
          description: "",
          stargazers_count: 0,
        })
    )
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [noRepo, setNoRepo] = useState<boolean>(false);

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
  const repoToGet: string = repoNamesList[count].repoName;

  useEffect(() => {
    setNoRepo(true);
    setIsLoading(true);

    localStorage.setItem("countfromLS", JSON.stringify(count));

    if (repoToGet === repoShown.full_name) {
      setNoRepo(false);
      setIsLoading(false);
    } else {
      fetchData();
    }

    async function fetchData() {
      try {
        const newRepo = await getData<IRepo>(repoToGet);

        localStorage.setItem("repoFromLS", JSON.stringify(newRepo));
        setRepoToShow(newRepo);
        setIsLoading(false);
        setNoRepo(false);
      } catch (error) {
        if (error) {
          localStorage.setItem("repoFromLS", JSON.stringify(""));
          setNoRepo(true);
          setIsLoading(false);
        }
        console.error("Oops, there was the following error: ", error);
        return {};
      }
    }
  }, [count, repoShown.full_name, repoToGet]);

  const handleIncrement = () => {
    if (count < 7) {
      let newCount: number = count + 1;
      setCount(newCount);
    } else {
      console.log("Count is 7, no increment action was performed.");
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      let newCount: number = count - 1;
      setCount(newCount);
    } else {
      console.log("Count is 0, no decrement action was performed.");
    }
  };

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <CodeTestWrapper>
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
          <NotFoundWrapper>
            <h2>Not Found </h2>
            <span>Sorry, but the repository "{repoToGet}" was not found.</span>
          </NotFoundWrapper>
        )}
        {!noRepo && <RepoView repoShown={repoShown} />}
      </CodeTestWrapper>
    </MainWrapper>
  );
};
