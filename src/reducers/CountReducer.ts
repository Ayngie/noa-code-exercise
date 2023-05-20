import { Count } from "../models/Count";

export enum ActionType {
  INCREMENTED,
  DECREMENTED,
}

export interface IAction {
  type: ActionType;
  payload: number;
}

export const CountReducer = (currentCount: Count, action: IAction) => {
  switch (action.type) {
    case ActionType.INCREMENTED: {
      console.log("Clicked increment");
      console.log(" Incremented - action.payload is: ", action.payload);

      if (currentCount.count < 7) {
        console.log("Incremented one.");
        return { ...currentCount, count: currentCount.count + action.payload };
      } else {
        console.log("Count was 7, no increment action was performed.");
        return currentCount;
      }
    }

    case ActionType.DECREMENTED: {
      console.log("Clicked decrement");
      console.log(" Decremented - action.payload is: ", action.payload);

      if (currentCount.count > 0) {
        console.log("Decremented one.");
        return { ...currentCount, count: currentCount.count - action.payload };
      } else {
        console.log("Count was 0, no decrement action was performed.");
        return currentCount;
      }
    }

    default:
      console.log("ActionType error...");
      throw new Error(`Type: '${action.type}' does not exist, check spelling.`);
  }
};
