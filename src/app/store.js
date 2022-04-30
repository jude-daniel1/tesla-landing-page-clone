import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import carReducer from "../features/carSlice/carSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    carState: carReducer,
  },
});
