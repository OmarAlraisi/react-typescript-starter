import { IAppState } from "@types";

export const getCounterValue = (state: IAppState): number => {
  return state.counter;
};
