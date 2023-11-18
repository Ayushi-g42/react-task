import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketData: [],
};

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    setRocketData: (state, action) => {
      state.rocketData = action.payload;
    },
  },
});

export const { setRocketData } = rocketSlice.actions;

export default rocketSlice.reducer;
