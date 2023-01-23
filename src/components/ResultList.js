import React, { useEffect} from "react";
import { fetchUserResultAsync } from "../store";
import {  useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";
import { getYesResults } from "../store";

export default function ResultList(){
  const results = useSelector((state) => state.result);
  console.log(results)
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getYesResults());
  }, []);

  const renderedYesResults = results.selectedResults.map((result) => {
    return (
      <div>
      <ul key={result.id}>
        <li> {result.recommendation}</li>
      </ul>
      </div>
    );
  });
  return <Fragment> {renderedYesResults}</Fragment>;
}
