import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import { MODE } from "@config";

export const store = configureStore({
  reducer: rootReducer,
  devTools: MODE === "development" ? true : false,
});
