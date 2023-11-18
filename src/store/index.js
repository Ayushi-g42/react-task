import { configureStore } from "@reduxjs/toolkit";
import { rocketSlice } from "./rocket/slice";

const store = configureStore({
  reducer: {
    rocket: rocketSlice.reducer,
  },
});

export default store;
