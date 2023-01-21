import React, { Fragment, useEffect } from "react";
import { fetchAllQuestionsAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";

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
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          Yes
        </Button>
      </div>
      <div className="button-update">
        <Button sx={{ m: 1 }} variant="contained" color="secondary">
          No
        </Button>
      </div>
      </div>
    );
  });
  return <Fragment>{renderedQuestions}</Fragment>;
}
