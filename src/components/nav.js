import React from "react";
import Data from "./data";
import Tagspage from "./tagspage";
import Onequestion from "./onequestion";
import Header from "./header";
import { Context } from "./Context";
export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
    this.QuestionClick = this.QuestionClick.bind(this);
    this.TagClick = this.TagClick.bind(this);
  }

  QuestionClick() {
    this.props.setcontent(
      <Data data={this.props.data} setcontent={this.props.setcontent} />
    );
  }
  TagClick() {
    this.props.setcontent(
      <Tagspage data={this.props.data} setcontent={this.props.setcontent} />
    );
  }
  search(e) {
    var data = this.props.data;
    var questionlist = new Map();
    var questionslist = new Set();
    var tagmap = new Map();
    for (let i of data.tags) {
      tagmap.set(i.name, i.tid);
    }
    for (let i = 0; i < data.questions.length; i++) {
      questionlist.set(data.questions[i].title, i);
    }
    var text = e;
    text = text.split(" ");
    var index = -1;
    for (let m of data.questions) {
      index++;
      var set = new Set();
      var questiontext = m.text.split(" ");
      var questiontitle = m.title.split(" ");

      for (let j of questiontext) {
        var s = j.toLocaleLowerCase();
        set.add(s);
      }
      for (let j of questiontitle) {
        s = j.toLocaleLowerCase();
        set.add(s);
      }
      for (let k of text) {
        if (set.has(k.toLocaleLowerCase())) {
          questionslist.add(index);
          break;
        } else if (k.charAt(0) === "[" && k.charAt(k.length - 1) === "]") {
          var id = -1;
          k = k.substring(1, k.length - 1);
          if (tagmap.has(k)) {
            k = tagmap.get(k);

            for (let q of data.questions) {
              id++;
              for (let t of q.tagIds) {
                if (t === k) {
                  questionslist.add(id);
                  break;
                }
              }
            }
          }
        }
      }
    }

    var searchresult = [];
    for (let index of questionslist) {
      searchresult.push(index);
    }
    var question = searchresult.length ? "Question" : "Questions";
    if (searchresult.length > 0) {
      this.props.setcontent(
        <div>
          <Header
            length={searchresult.length}
            data={this.props.data}
            setcontent={this.props.setcontent}
            left={question}
            mid={"Search Result"}
          />
          <Context.Consumer>{(value) => <div>{value}</div>}</Context.Consumer>
          {searchresult.map((index) => (
            <Onequestion
              item={data.questions[index]}
              key={data.questions[index].qid}
              setcontent={this.props.setcontent}
              data={this.props.data}
            />
          ))}
        </div>
      );
    } else {
      this.props.setcontent(
        <div>
          <Header
            length={searchresult.length}
            setcontent={this.props.setcontent}
            left={"Questions"}
            mid={"Search Result"}
          />

          <h1 id="noq">No Questions Found</h1>
        </div>
      );
    }
  }

  render() {
   var s=x=>y=>x+y;
   console.log(s(1)(2))
    return (
      <div id="sticky">
        <div className="nav" id="nav">
          <div id="questionsDiv" tabIndex="1" onClick={this.QuestionClick}>
            Questions
          </div>
          <div id="Tags" tabIndex="1" onClick={this.TagClick}>
            Tags
          </div>
          <h1>Fake Stack Overflow</h1>
          <div>
            <input
              type="text"
              id="search"
              placeholder="Search..."
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  this.search(this.state.search);
                }
              }}
              className="box"
              onChange={(e) => {
                this.setState({ search: e.target.value });
              }}
            ></input>
          </div>
        </div>
      </div>
    );
  }
}
