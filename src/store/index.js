import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer, fetchAllQuestionsAsync } from "./questionsSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
  },
});

export { fetchAllQuestionsAsync };
