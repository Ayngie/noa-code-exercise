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
      if (currentCount.count < 7) {
        return { ...currentCount, count: currentCount.count + action.payload };
      } else {
        console.log("Count is 7, no increment action was performed.");
        return currentCount;
      }
    }

    case ActionType.DECREMENTED: {
      if (currentCount.count > 0) {
        return { ...currentCount, count: currentCount.count - action.payload };
      } else {
        console.log("Count is 0, no decrement action was performed.");
        return currentCount;
      }
    }

    default:
      console.log("ActionType error...");
      throw new Error(`Type: '${action.type}' does not exist, check spelling.`);
  }
};
