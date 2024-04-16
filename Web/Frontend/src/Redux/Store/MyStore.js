import { configureStore } from "@reduxjs/toolkit";
import { UserReducer } from "../Reducer/UserReducer";

export const MyStore = configureStore({
  reducer: {
    user: UserReducer,
  },
});
