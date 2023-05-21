import { useState } from "react";
import { MainWrapper } from "../styles/Wrappers";
import { CounterView } from "./CounterView";
import { RepoView } from "./RepoView";
import { Count } from "../models/Count";

export const CodeExerciseApp = () => {
  const [currentCount, setCurrentCount] = useState<Count>({ count: 4 });

  console.log("currentCount:", currentCount);
  console.log("currentCount.count:", currentCount.count);

  const handleIncrement = () => {
    console.log("Clicked increment");

    if (currentCount.count < 7) {
      console.log("Incremented one.");
      setCurrentCount({ ...currentCount, count: currentCount.count + 1 });
    } else {
      console.log("Count was 7, no increment action was performed.");
      // return currentCount;
    }
  };

  const handleDecrement = () => {
    console.log("Clicked decrement");

    if (currentCount.count > 0) {
      console.log("Decremented one.");
      setCurrentCount({ ...currentCount, count: currentCount.count - 1 });
    } else {
      console.log("Count was 0, no decrement action was performed.");
      // return currentCount;
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
      <RepoView />
    </MainWrapper>
  );
};
