
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUserResultAsync = createAsyncThunk(
  "userResults",
  async () => {
    try {
      const response = await axios.get(`/api/userResults`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const userResultSlice = createSlice({
  name: "userResults",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUserResultAsync.fulfilled, (state, action) => {
      return action.payload
    });
  },
});

export const userResultReducer = userResultSlice.reducer;
