import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer, fetchAllQuestionsAsync } from "./questionsSlice";
import { fetchYesResultAsync, resultReducer, creatingYesResultsAsync } from "./resultsSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
});

export { fetchAllQuestionsAsync, fetchYesResultAsync, creatingYesResultsAsync as creatingYesResultAsync};
