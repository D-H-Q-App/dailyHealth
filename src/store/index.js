import { configureStore } from "@reduxjs/toolkit";
import { questionsReducer, fetchAllQuestionsAsync } from "./questionsSlice";
import {  resultReducer, creatingYesResultsAsync } from "./resultsSlice";
import { userResultReducer, fetchUserResultAsync } from "./userResultSlice";

export const store = configureStore({
  reducer: {
    questions: questionsReducer,
    result: resultReducer,
    userResult: userResultReducer
  },
});

export { fetchAllQuestionsAsync, creatingYesResultsAsync as creatingYesResultAsync};

export {fetchUserResultAsync}
