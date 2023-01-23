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

export const getYesResults = createAsyncThunk(
  "result/getYesResults",
  async()=>{
    try{
      const userResults = await axios.get('http://localhost:3000/api/userresults')
      const resultIds = userResults.data.map((result)=>{
        return result.resultId
      })
      console.log(resultIds)
      const listOfResults = await axios.get('http://localhost:3000/api/results')
      const exactResults = listOfResults.data.filter((result)=> {
        return resultIds.includes(result.id)
      })
      console.log(exactResults)
      return exactResults
    }catch(error){
      console.log(error)
    }
  }
);

const resultSlice = createSlice({
  name: "result",
  initialState: {submitting:false, success:false, resultId:[], selectedResults: []},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(creatingYesResultsAsync.fulfilled, (state, action) => {
      state.submitting = false
      state.success=true
    });
    builder.addCase(creatingYesResultsAsync.pending, (state, action) => {
      state.submitting=true
    });
    builder.addCase(getYesResults.fulfilled, (state, action)=> {
      console.log(action.payload)
      state.selectedResults = action.payload
    })

  },
});

export const resultReducer = resultSlice.reducer;

