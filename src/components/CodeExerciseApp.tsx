import { useReducer } from "react";
import { ActionType, CountReducer } from "../reducers/CountReducer";
import { Button } from "../styles/Button";
import { MainWrapper, ButtonsContainer } from "../styles/Wrappers";
import { Counter } from "./Counter";
import { DisplayRepo } from "./DisplayRepo";

export const CodeExerciseApp = () => {
  const [currentCount, dispatch] = useReducer(
    CountReducer,
    JSON.parse(localStorage.getItem("currentCountFromLS") || "5")
  );
  localStorage.setItem("currentCountFromLS", JSON.stringify(currentCount));

  const repoNamesList = [
    { repoName: "eslint/eslint", position: 0 },
    { repoName: "oakwood/front-end-questions", position: 1 },
    { repoName: "babel/babel", position: 2 },
    { repoName: "webpack/webpack", position: 3 },
    { repoName: "storybooks/storybook", position: 4 },
    { repoName: "facebook/react", position: 5 },
    { repoName: "reactjs/redux", position: 6 },
    { repoName: "expressjs/express", position: 7 },
  ];
  // console.log("List of repoNames: ", repoNamesList);
  // console.log("repoNamesList[0]: ", repoNamesList[0]);
  // console.log("repoNamesList[currentCount]: ", repoNamesList[+currentCount]);

  const currentRepo = repoNamesList[+currentCount];
  console.log("currentRepo: ", currentRepo);

  return (
    <MainWrapper>
      <h1>NoA Ignite - code exercise</h1>
      <ButtonsContainer>
        <Button
          onClick={() =>
            dispatch({
              type: ActionType.DECREMENTED,
              payload: currentCount.count,
            })
          }
          symbol={"-"}
          text={"DECREMENT"}
          className={"normal"}></Button>
        <Counter currentCount={currentCount} />
        <Button
          onClick={() => {
            dispatch({
              type: ActionType.INCREMENTED,
              payload: currentCount.count,
            });
          }}
          symbol={"+"}
          text={"INCREMENT"}
          className={"primary"}></Button>
      </ButtonsContainer>
      <DisplayRepo />
    </MainWrapper>
  );
};
