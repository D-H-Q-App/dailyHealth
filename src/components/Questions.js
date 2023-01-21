// import React, { Fragment, useEffect } from "react";
// import { fetchAllQuestionsAsync } from "../store";
// import { useDispatch, useSelector } from "react-redux";

// export default function Questions() {
//   const dispatch = useDispatch();
//   const questions = useSelector((state) => state.questions);

//   useEffect(() => {
//     dispatch(fetchAllQuestionsAsync());
//   });

//   const renderedQuestions = questions.map((question) => {
//     return (
//       <div key={question.id}>
//         <h3> {question}</h3>
//       </div>
//     );
//   });
//   return <Fragment>{renderedQuestions}</Fragment>;
// }
