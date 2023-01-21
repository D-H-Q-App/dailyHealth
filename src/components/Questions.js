import React, { Fragment, useEffect } from "react";
import { fetchAllQuestionsAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material";



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
        <div>
          <FormGroup>
            <FormControlLabel control={<Checkbox onChange={handleChange}/>} label="yes" />
            <FormControlLabel control={<Checkbox />} label="no" />
          </FormGroup>
        </div>
      </div>
    );
  });
  return <Fragment>
    {renderedQuestions}
    <div>
    <Button color="primary" size="medium" variant="outlined">Submit</Button>
    </div>
  </Fragment>;
}
