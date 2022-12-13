import { handleActions } from "redux-actions";
import { IUserState } from "@types";
import { addUser } from "@actions";

const initState: IUserState = {
  users: [
    {
      id: 1,
      name: "John",
    },
    {
      id: 2,
      name: "Nhoj",
    },
  ],
};

export const userReducer = handleActions<IUserState, any>(
  {
    [addUser.toString()](state, { payload }: ReturnType<typeof addUser>) {
      const { name } = payload;

      return {
        ...state,
        users: [
          ...state.users,
          {
            id: state.users.length,
            name,
          },
        ],
      };
    },
  },
  initState
);
