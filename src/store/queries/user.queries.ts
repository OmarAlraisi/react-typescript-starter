import { IAppState, IUserState } from "@types";

export const getUserState = (state: IAppState): IUserState => {
  return state.user;
};
