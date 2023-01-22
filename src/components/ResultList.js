// import React, { useEffect} from "react";
// import { fetchYesResultAsync } from "../store";
// import {  useDispatch, useSelector } from "react-redux";

// export default function ResultList(){
//   const results = useSelector((state) => state.result);
//   const dispatch = useDispatch();

//   useDispatch(() => {
//     dispatch(fetchYesResultAsync());
//   }, []);

//   const renderedYesResults = results.map((result) => {
//     return (
//       <div>
//       <ul key={result.id}>
//         <li> {result.recommendation}</li>
//       </ul>
//       </div>
//     );
//   });
//   return <Fragment> {renderedYesResults}</Fragment>;
// }
