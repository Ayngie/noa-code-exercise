import { Button } from "./Button";
import { Counter } from "./Counter";

export const CodeExerciseApp = () => {
  return (
    <div>
      <p>NoA Ignite - code exercise</p>
      <div className="container">
        <Button symbol={"- "} text={"DECREMENT"}></Button>
        <Counter />
        <Button symbol={"+ "} text={"INCREMENT"}></Button>
      </div>
    </div>
  );
};
