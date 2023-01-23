import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer, fetchAllQuestionsAsync } from "./questionsSlice";
import {  resultReducer, creatingYesResultsAsync, getYesResults } from "./resultsSlice";


export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
});

export { fetchAllQuestionsAsync, creatingYesResultsAsync as creatingYesResultAsync, getYesResults};


