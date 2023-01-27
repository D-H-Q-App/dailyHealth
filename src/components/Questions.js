import React, { Fragment, useEffect, useState} from "react";
import { fetchAllQuestionsAsync } from "../store";
import { useDispatch, useSelector } from "react-redux";
import { FormGroup, FormControlLabel, Checkbox, Button} from "@mui/material";
import { creatingYesResultAsync } from "../store";
import { useNavigate } from "react-router-dom";




export default function Questions() {
  const [yesQuestions, setYesQuestions]= useState([]);
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const questions = useSelector((state) => state.questions);
  const result = useSelector((state) => state.result);

  useEffect(() => {
    dispatch(fetchAllQuestionsAsync());
  }, []);

  useEffect(() => {
    if(result.success){
    }
  }, [result]);

function handleNo(questionId){
setYesQuestions((previousState)=>{
  return previousState.filter((id)=>{
    return id !== questionId
  })
})
}

function handleYes(questionId){
  setYesQuestions((previousState)=>{
    const filteredList= previousState.filter((id)=>{
      return id !== questionId
    })
    return [...filteredList,questionId]
})
}

function handleSubmit(){
  console.log(yesQuestions)
  // yesQuestions.forEach((id)=>{
  //   dispatch(creatingYesResultAsync({id}))
  // })
  dispatch(creatingYesResultAsync({ids:yesQuestions}))
  navigate('/results')
}



  const renderedQuestions = questions.map((question) => {
    return (
      <div key={question.id}>
        <h3> {question.question}</h3>
        <div>
          <FormGroup>
            <FormControlLabel onChange={()=>{handleYes(question.id)}} control={<Checkbox />} label="yes" />
            <FormControlLabel onChange={()=>{handleNo(question.id)}} control={<Checkbox />} label="no" />
          </FormGroup>
        </div>
      </div>
    );
  });
  return <Fragment>
    {renderedQuestions}
    <div>
    <Button onClick={handleSubmit} color="primary" size="medium" variant="outlined" >Submit</Button>
    </div>
  </Fragment>;
}
