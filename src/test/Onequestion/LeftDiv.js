import React from "react";

const LeftDiv = (question) => {
    
  return (
    <div id="leftDiv">
      <div>
        {question.views}
       {" "}Views
      </div>
      <div>
        {question.answers.length+" "}
        Answers
      </div>
    </div>
  );
};

export default LeftDiv;
