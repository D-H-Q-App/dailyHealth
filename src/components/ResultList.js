import React, { useEffect} from "react";
import { fetchUserResultAsync } from "../store";
import {  useDispatch, useSelector } from "react-redux";
import { Fragment } from "react";

export default function ResultList(){
  const results = useSelector((state) => state.userResult);
  console.log(results)
  const dispatch = useDispatch();


  useDispatch(() => {
    dispatch(fetchUserResultAsync());
  }, []);

  const renderedYesResults = results.map((result) => {
    return (
      <div>
      <ul key={result.userId}>
        <li> {result.recommendation}</li>
      </ul>
      </div>
    );
  });
  return <Fragment> {renderedYesResults}</Fragment>;
}
