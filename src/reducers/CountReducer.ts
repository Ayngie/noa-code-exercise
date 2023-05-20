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
      console.log(" Incremented - action.payload: ", action.payload);

      if (+action.payload < 8) {
        return { ...currentCount, count: action.payload + 1 };
      } else {
        return currentCount;
      }
    }

    case ActionType.DECREMENTED: {
      console.log("Clicked decrement");
      console.log(" Decremented - action.payload: ", action.payload);

      if (+action.payload > 0) {
        return { ...currentCount, count: action.payload - 1 };
      } else {
        return currentCount;
      }
    }

    default:
      console.log("CountReducer error...");
      throw Error("Type does not exist, check spelling");
  }
};
