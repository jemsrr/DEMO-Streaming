import { configureStore } from "@reduxjs/toolkit";
import streamingData from "./reducer/streamingData";

export const store = configureStore({
  reducer: { streamingData },
});