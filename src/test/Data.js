import React from "react";
import OneDiv from "./Onequestion/OneDiv";
const Data = (data) => {
  var questions = data.questions;

  return (
    <div>
      {questions.map((question) => (
        <OneDiv key={question.qid} {...question} {...data}></OneDiv>
      ))}
    </div>
  );
};

export default Data;
