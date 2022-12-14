import { createAction } from "redux-actions";
import { generateActionType } from "@utils/store.utils";

const ACTION_TYPE = "counter action";

export const incrementCounter = createAction(
  generateActionType(ACTION_TYPE, "increment counter"),
);
