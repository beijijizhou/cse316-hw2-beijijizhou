import React, { Component } from "react";
import Postanswer from "./postanswer";
import Header from "./header";
export default class Answerpage extends Component {
  constructor() {
    super();
    this.handleAnswerButton = this.handleAnswerButton.bind(this);
  }
  handleAnswerButton() {
    this.props.setcontent(
      <Postanswer
        setcontent={this.props.setcontent}
        data={this.props.data}
        item={this.props.item}
      ></Postanswer>
    );
  }
  printoneanswer(answers) {
    return (
      <div key={answers.aid} id="oneanswer">
        <div id="answerContent">{answers.text}</div>
        <div className="rightDiv">
          <li>
            Ans By <span className="askedBy">{answers.ansBy}</span>
          </li>
          <div>
            On <span className="askedOn">{answers.ansOn}</span>
          </div>
          <div>
            At <span className="askedAt">{answers.ansAt}</span>
          </div>
        </div>
      </div>
    );
  }

  render() {
    var answerslist = this.props.data.answers;
    
    var answers = [];
    for (let j of this.props.item.answers) {
      for (let i of answerslist) {
        if (i.aid === j) {
          answers.push(i);
        }
      }
    }
    this.props.item.views++;
    var view = this.props.item.views === 1 ? "View" : "Views";
    return (
      <div>
        <Header
          length={this.props.data.questions.length}
          data={this.props.data}
          setcontent={this.props.setcontent}
          left={"Questions"}
          mid={"All Questions"}
          disable={false}
        />
        <div id="dataDiv">
          <div
            style={{
              fontWeight: "bold",
              fontSize: "x-large",
              textAlign: "center",
              paddingTop: "2.5rem",
            }}
          >
            {this.props.item.views} {view}
          </div>
          <div>{this.props.item.text}</div>
          <div className="rightDiv">
            <li>
              Asked by{" "}
              <span className="askedBy">{this.props.item.askedBy}</span>
            </li>
            <div>
              On <span className="askedOn">{this.props.item.askedOn}</span>
            </div>
            <div>
              At <span className="askedAt">{this.props.item.askedAt}</span>
            </div>
          </div>
        </div>

        {answers.map((answer) => this.printoneanswer(answer))}
        <div
          className="button"
          id="answerbutton"
          onClick={this.handleAnswerButton}
        >
          Answer Question
        </div>
      </div>
    );
  }
}
