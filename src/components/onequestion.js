import React, { Component } from "react";
import Answerpage from "./answerpage";
export default class Onequestion extends Component {
  // constructor(props) {
  //   super(props);
  //   this.titleclick = this.titleclick.bind(this);
  // }
  // titleclick() {
  //   this.props.setcontent(
  //     <Answerpage
  //       data={this.props.data}
  //       setcontent={this.props.setcontent}
  //       item={this.props.item}
  //     />
  //   );
  // }
  titleclick=(e)=>{
    var s={a:1,b:2};
    console.log(e)
  this.props.setcontent(
      <Answerpage
        {...s}
        
        data={this.props.data}
        setcontent={this.props.setcontent}
        item={this.props.item}
      />
    );
  }
 
  fourtagsdiv(onetag) {
    return <li key={onetag}>{onetag}</li>;
  }
  render() {
    var taglist = new Map();
    for (let tag of this.props.data.tags) {
      taglist.set(tag.tid, tag.name);
    }
    var view = this.props.item.views === 1 ? "View" : "Views";
    var answers = this.props.item.views === 1 ? "Answer" : "Answers";
 
   
    return (
      <div id="dataDiv">
        <div id="leftDiv">
    
          <div>
            {this.props.item.views} {view}
          </div>
          <div>
            {this.props.item.answers.length} {answers}
          </div>
        </div>
        <div id="midDiv">
          <div id="titleDiv" onClick={()=>this.titleclick(test)}>
            {this.props.item.title}
          </div>
          <div id="tagDiv">
            {this.props.item.tagIds.map((id) =>
              this.fourtagsdiv(taglist.get(id))
            )}
          </div>
        </div>
        <div className="rightDiv">
          <li>
            Asked by <span className="askedBy">{this.props.item.askedBy}</span>
          </li>
          <div>
            On <span className="askedOn">{this.props.item.askedOn}</span>
          </div>
          <div>
            At <span className="askedAt">{this.props.item.askedAt}</span>
          </div>
        </div>
      </div>
    );
  }
}
