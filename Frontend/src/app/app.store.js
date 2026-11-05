import { configurestore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/state/auth.slice";    


export const store = configurestore({
  reducer: {
    auth: authReducer,
  },
});