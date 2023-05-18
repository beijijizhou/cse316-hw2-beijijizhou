import React, { Component } from "react";
import Answerpage from "./answerpage";
export default class Postanswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      username: "",
      error: "",
    };
    this.handlePostAnswer = this.handlePostAnswer.bind(this);
  }
  getDate() {
    var today = new Date();
    var dd = today.getDate();
    var getMonth = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];
    var mm = getMonth[today.getMonth()];
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }

    today = mm + " " + dd + "," + yyyy;
    return today;
  }
  handlePostAnswer() {
    var text = this.state.text;
    var username = this.state.username;
    var alertmessage = "";
    var f = false;
    if (text.length === 0) {
      alertmessage += "\nText shoud not be empty";
      f = true;
    }
    if (username.length === 0) {
      alertmessage += "\nUsername shoud not be empty";
      f = true;
    } else if (username.length > 15) {
      alertmessage += "\nUsername shoud not be more than 15 characters";
      f = true;
    }
    this.setState({
      error: alertmessage,
    });
    if (!f) {
      var data = this.props.data;
      var numOfanswers = data.answers.length;
      numOfanswers++;
      this.props.item.views--;
      var hr = "" + new Date().getHours() + ":" + new Date().getMinutes();
      var answers = {
        aid: "a" + numOfanswers,
        text: text,
        ansBy: username,
        ansOn: this.getDate(),
        ansAt: hr,
      };
      for (let c of data.questions) {
        if (c.title === this.props.item.title) {
          c.answers.unshift("a" + numOfanswers);
        }
      }

      data.answers.unshift(answers);
      this.props.setcontent(
        <Answerpage
          item={this.props.item}
          setcontent={this.props.setcontent}
          data={this.props.data}
        />
      );
    }
  }
  render() {
    return (
      <div>
        <div className="alertbox">{this.state.error}</div>
        <h2>Answer Text</h2>

        <textarea
          id="answertextbox"
          className="box"
          placeholder="Be respestful"
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></textarea>
        <h2>Username</h2>
        <textarea
          id="answernamebox"
          className="box"
          placeholder="Andy"
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        ></textarea>
        <div className="button" id="postbutton" onClick={this.handlePostAnswer}>
          Post answer
        </div>
      </div>
    );
  }
}
