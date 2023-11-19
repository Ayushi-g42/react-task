import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketData: [],
  upComingLanuchData: [],
  previousLanuchData: [],
};

export const rocketSlice = createSlice({
  name: "rocket",
  initialState,
  reducers: {
    setRocketData: (state, action) => {
      state.rocketData = action.payload;
    },
    setUpComingLaunchData: (state, action) => {
      state.upComingLanuchData = action.payload;
    },
    setPreviousLaunchData: (state, action) => {
      state.previousLanuchData = action.payload;
    },
  },
});

export const { setRocketData, setUpComingLaunchData, setPreviousLaunchData } =
  rocketSlice.actions;

export default rocketSlice.reducer;
