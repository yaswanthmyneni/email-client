import { configureStore } from "@reduxjs/toolkit";
import emailReducer from "./slice/emailSlice/emailSlice";

export const store = configureStore({
  reducer: {
    email: emailReducer,
  },
});
