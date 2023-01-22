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

export const fetchYesUserResultAsync = createAsyncThunk(
  "result/fetchYesResult",
  async () => {
    try {
      const response = await axios.get("http://localhost:3000/api/userResult");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);



export const creatingYesResultsAsync = createAsyncThunk(
  "result/creatingYesResult",
  async ({ids}) => {
    try {
      for(let i = 0; i < ids.length; i++){
       await axios.post(`http://localhost:3000/api/userresults`, {resultId: ids[i], userId: 1});
      }
      return true;
    } catch (error) {
      console.log(error);
    }
  }
);

const resultSlice = createSlice({
  name: "result",
  initialState: {submitting:false, success:false, resultId:[]},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchYesResultAsync.fulfilled, (state, action) => {
      return action.payload
    });
    builder.addCase(creatingYesResultsAsync.fulfilled, (state, action) => {
      state.submitting = false
      state.success=true
    });
    builder.addCase(creatingYesResultsAsync.pending, (state, action) => {
      state.submitting=true
    });

  },
});

export const resultReducer = resultSlice.reducer;

