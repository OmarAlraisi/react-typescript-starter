import { createAction } from "redux-actions";
import { generateActionType } from "@utils/store.utils";

const ACTION_TYPE = "user action";

export const addUser = createAction(
  generateActionType(ACTION_TYPE, "add user"),
  (name: string): { name: string } => ({ name })
);
