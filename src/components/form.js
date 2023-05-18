import React, { Component } from "react";
import Data from "./data";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.handlePostClick = this.handlePostClick.bind(this);
    this.state = {
      form:{
        title: "",
        text: "",
        tags: "",
        username: "",
        error: "",
      },
      title: "",
      text: "",
      tags: "",
      username: "",
      error: "",
    };
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
  handlePostClick() {
   
    var data = this.props.data;
    var alertmessage = "";
    var title = this.state.title;
    var text = this.state.text;
    var tags = this.state.tags;
    tags = tags.split(" ");
    var tagset = new Set();
    for (let i of tags) {
      if (i !== " " && i !== "" && !tagset.has(i.toLocaleLowerCase())) {
        tagset.add(i.toLocaleLowerCase());
      }
    }

    var username = this.state.username;
    var f = false;
    if (title.length > 100) {
      alertmessage = "Title shoud not be more than 100 characters";
      f = true;
    } else if (title.length === 0) {
      alertmessage += "\nTitle shoud not be empty";
      f = true;
    }
    if (text.length === 0) {
      alertmessage += "\nText shoud not be empty";
      f = true;
    }
    if (tagset.size === 0) {
      alertmessage += "\nTags shoud not be empty";
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
      var tagidarray = [];
      var tagmap = new Map();
      for (let tag of data.tags) {
        tagmap.set(tag.name.toLocaleLowerCase(), tag.tid);
      }
      for (let i of tagset) {
        if (tagmap.has(i)) {
          tagidarray.push(tagmap.get(i));
        } else {
          var lenOfTags = data.tags.length + 1;
          var newtagid = "t" + lenOfTags;
          tagidarray.push(newtagid);
          var newtag = {
            tid: newtagid,
            name: i,
          };
          data.tags.push(newtag);
        }
      }

      var lenofquestion = data.questions.length;
      lenofquestion++;
      var hours = "" + new Date().getHours() + ":" + new Date().getMinutes();
      var q = {
        qid: "q" + lenofquestion,
        title: this.state.title,
        text: this.state.text,
        tagIds: tagidarray,
        askedBy: this.state.username,
        askedOn: this.getDate(),
        askedAt: hours,
        answers: [],
        views: 0,
      };

      this.props.data.questions.unshift(q);
      this.props.setcontent(
        <Data data={this.props.data} setcontent={this.props.setcontent} />
      );
    }
  }
 
  render() {
    return (
      <form >
        <div className="alertbox">{this.state.error}</div>
        <h2>Question Title</h2>
        <p>Title shoud not be more than 100 characters.</p>
        <textarea
          id="titlebox"
          className="box"
          placeholder="Come up with a good click bait"
          onChange={(e) => {
            this.setState({ title: e.target.value });
          }}
          
        ></textarea>
        <h2>Question Text</h2>
        <p>Add details</p>
        <textarea
          id="textbox"
          className="box"
          placeholder="Text should be as detail as possible"
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        ></textarea>
        <h2>Tags</h2>
        <p>Add Keywords separated by whitespace.</p>
        <textarea
          id="tagbox"
          className="box"
          placeholder="Add Keywords separated by whitespace."
          onChange={(e) => {
            this.setState({ tags: e.target.value });
          }}
        ></textarea>
        <h2>Username</h2>
        <p>Should not be more than 15 characters.</p>
        <textarea
          id="usernamebox"
          className="box"
          placeholder="Andy."
          onChange={(e) => {
            this.setState({ username: e.target.value });
          }}
        ></textarea>
        <div className="button" id="postbutton" onClick={this.handlePostClick}>
          Post Questions
        </div>
      </form>
    );
  }
}
