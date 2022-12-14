import { handleActions } from "redux-actions";
import { incrementCounter } from "@actions";

const initState: number = 0;

export const counterReducer = handleActions<number, any>(
  {
    [incrementCounter.toString()](state, {}) {
      return (state += 1);
    },
  },
  initState,
);
