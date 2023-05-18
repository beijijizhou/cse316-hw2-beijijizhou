import React from "react";

import Onequestion from "./onequestion";
import Header from "./header.js";
import { Context } from "./Context";
  
export default class Data extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
 
    return (
      <div>
        <Header
          data={this.props.data}
          length={this.props.data.questions.length}
          setcontent={this.props.setcontent}
          left={"Questions"}
          mid={"All Questions"}
        />
        {/* <input type={"email"} ></input> */}
        {/* <Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer> */}
        {this.props.data.questions.map((question) => 
            <div key={question.qid}>
              {" "}
              <Onequestion
                item={question}
                setcontent={this.props.setcontent}
                data={this.props.data}
              />
            </div>
        )}
      </div>
    );
  }
}
