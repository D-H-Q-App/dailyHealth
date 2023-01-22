import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer, fetchAllQuestionsAsync } from "./questionsSlice";
import { fetchYesResultAsync, resultReducer, creatingYesResultAsync } from "./resultsSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
  },
});

export { fetchAllQuestionsAsync, fetchYesResultAsync, creatingYesResultAsync};
