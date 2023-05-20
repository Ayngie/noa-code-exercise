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
      if (action.payload < 8) {
        console.log("Clicked increment");
        return { ...currentCount, count: action.payload + 1 };
        // return count;
      } else {
        return currentCount;
      }
    }

    case ActionType.DECREMENTED: {
      if (action.payload > 0) {
        console.log("Clicked decrement");
        return { ...currentCount, count: action.payload - 1 };
        // return count;
      } else {
        return currentCount;
      }
    }

    default:
      //   return count;
      throw Error("Type does not exist, check spelling");
  }
};
