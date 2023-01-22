import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYesResultAsync = createAsyncThunk(
  "result/fetchYesResult",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/results?filter_by=yes");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const creatingYesResultAsync = createAsyncThunk(
  "result/creatingYesResult",
  async (id) => {
    try {
      const response = await axios.post(`http://localhost:3000/api/userresults/${id}`);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);

const resultSlice = createSlice({
  name: "result",
  initialState: [],
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchYesResultAsync.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(creatingYesResultAsync.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const resultReducer = resultSlice.reducer;

