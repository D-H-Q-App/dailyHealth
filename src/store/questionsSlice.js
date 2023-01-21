import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAllQuestionsAsync = createAsyncThunk(
  "questions/fetchAll",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/questions");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchAllQuestionsAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const questionsReducer = questionsSlice.reducer;
