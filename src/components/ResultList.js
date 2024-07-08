import React, { useEffect} from "react";
import {  useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { Box, FormControl, TextField, FormHelperText} from "@mui/material";


export default function ResultList(){
  const results = useSelector((state) => state.result);
  console.log(results)
  const dispatch = useDispatch();


  useEffect(() => {
    // dispatch(getYesResults());
  }, []);

  const renderedYesResults = results.selectedResults.map((result) => {
    return (
      <div >
      <ul key={result.id}>
        <li> {result.recommendation}</li>
      </ul>
      </div>
    );
  });
  return <Fragment>
    {renderedYesResults}
    { <Box
       m={1}
        //margin
       display="flex"
      justifyContent="center"
      alignItems="center"
      >
        <FormControl justifyContent="right" align="right">
          <TextField id="outlined-basic" label="Email Addresss" variant="outlined" size="small" />
          <FormHelperText id="my-helper-text">Email your results here. We'll never share your email! It gets deleted after results are sent.</FormHelperText>
        </FormControl>
    </Box> }

</Fragment>;
}
