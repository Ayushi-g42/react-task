import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rocketData: [],
  upComingLanuchData: [],
  previousLanuchData: [],
  showRocketDetail: null,
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
    setShowRocketDetail: (state, action) => {
      state.showRocketDetail = action.payload;
    },
  },
});

export const {
  setRocketData,
  setUpComingLaunchData,
  setPreviousLaunchData,
  setShowRocketDetail,
} = rocketSlice.actions;

export default rocketSlice.reducer;
