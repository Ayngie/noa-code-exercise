export enum ActionType {
  INCREMENTED,
  DECREMENTED,
}

export interface IAction {
  type: ActionType;
  payload: number;
}

export const CountReducer = (count: number, action: IAction) => {
  switch (action.type) {
    case ActionType.INCREMENTED:
      if (action.payload < 8) return { ...count, count: action.payload + 1 };
      else {
        return count;
      }
    case ActionType.DECREMENTED:
      if (action.payload > 0) return { ...count, count: action.payload - 1 };
      else {
        return count;
      }
    default:
      //   return count;
      throw Error("Type does not exist, check spelling");
  }
};
