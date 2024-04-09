import { createSlice } from "@reduxjs/toolkit";
import data from "../sample.json";

const initialState = data.entries;

const streamingDataSlice = createSlice({
  name: "streamingData",
  initialState,
  reducers: {
    fetchData: (state) => {},
  },
});

export const { fetchData } = streamingDataSlice.actions;
export default streamingDataSlice.reducer;
