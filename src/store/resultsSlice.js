import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



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

