import React from "react";
import Header from "./Header";
import Data from "./Data";
const Main = (data) => {
  return (
    <div>
      <Header
        data={data}
        length={data.questions.length}
        left={"Questions"}
        mid={"All Questions"}
      ></Header>
      <Data {...data}></Data>
    </div>
  );
};

export default Main;
