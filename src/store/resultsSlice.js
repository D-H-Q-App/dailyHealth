import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

let defaultState = {submitting:false, success:false, resultId:[], selectedResults: []}
if(localStorage.getItem("resultsSlice") != null){
  defaultState = JSON.parse(localStorage.getItem("resultsSlice"))
}

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
  async(resultIds)=>{
    try{
      // const userResults = await axios.get('http://localhost:3000/api/userresults')
      // const resultIds = userResults.data.map((result)=>{
      //   return result.resultId
      // })
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
  initialState: defaultState,
  reducers: {saveResultIds(state, action){
    state.resultId = action.payload.ids
    state.submitting = false
    state.success = true
  }},
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
      localStorage.setItem("resultsSlice", JSON.stringify(state))
    })
  },
});



export const resultReducer = resultSlice.reducer;

export const { saveResultIds } = resultSlice.actions
