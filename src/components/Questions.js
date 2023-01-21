import React, { Fragment, useEffect } from "react";
import { fetchAllQuestionsAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";


export default function Questions() {
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);

  useEffect(() => {
    dispatch(fetchAllQuestionsAsync());
  }, []);

  const renderedQuestions = questions.map((question) => {
    return (
      <div key={question.id}>
        <h3> {question.question}</h3>
        <div className="button-update">
        <FormGroup>
  <FormControlLabel control={<Checkbox />} label="yes" />
  <FormControlLabel control={<Checkbox />} label="no" />
</FormGroup>
      </div>
      </div>
    );
  });
  return <Fragment>{renderedQuestions}</Fragment>;
}
