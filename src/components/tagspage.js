import React, { Component } from "react";
import Onequestion from "./onequestion";
import Header from "./header";
import { Context } from "./Context";

export default class Tagspage extends Component {
  state={

  }
  handleOneTagClick(id) {
    var data = this.props.data;
    var questionlist = [];
    var index = 0;
    var counter = 0;
    for (let question of data.questions) {
      for (let tagid of question.tagIds) {
        if (id.tid === tagid) {
          questionlist.push(index);
          counter++;
          break;
        }
      }
      index++;
    }
    var mid = "Question Tagged [" + id.name + "]";
    var question = counter === 1 ? "Question" : "Questions";
    this.props.setcontent(
      <div>
                <Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer>

        <Header
          data={this.props.data}
          length={counter}
          setcontent={this.props.setcontent}
          left={question}
          mid={mid}
        />
        <div key={id.name}>
          {questionlist.map((index) => (
            <Onequestion
              key={this.props.data.questions[index].qid}
              item={this.props.data.questions[index]}
              setcontent={this.props.setcontent}
              data={this.props.data}
            />
          ))}
        </div>
      </div>
    );
  }

  test(tid, questions) {
    var onetagcount = 0;
    var tag;
    for (let question of questions) {
      for (tag of question.tagIds) {
        if (tid.tid === tag) {
          onetagcount++;
        }
      }
    }
    questions = onetagcount === 1 ? "Question" : "Questions";
    return (
      <li
        key={tid.tid}
        id="bigtag"
        onClick={this.handleOneTagClick.bind(this, tid)}
      >
        <div id="onetag">{tid.name}</div>
        <div id="downtag">
          {" "}
          {onetagcount} {questions}
        </div>
      </li>
    );
  }
  render() {
    var data = this.props.data;
    var questions = data.questions;
    var tagid = [];
    for (let i of data.tags) {
      tagid.push(i);
    }
    
    return (
      <div>
        <Header
          data={this.props.data}
          length={tagid.length}
          setcontent={this.props.setcontent}
          left={"Tags"}
          mid={"All Tags"}
        />
        <div id="threetags">
          {tagid.map((tag) => this.test(tag, questions))}
        </div>
      </div>
    );
  }
}
