import React, { Component } from "react";
import Form from "./form.js";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.askclick = this.askclick.bind(this);
  }
  askclick() {
    return () => {
      this.props.setcontent(
        <Form setcontent={this.props.setcontent} data={this.props.data}></Form>
      );
    };
  }

  render() {
    return (
      <div id="header">
        <div>
          {this.props.length} {this.props.left}
        </div>
        <div>{this.props.mid}</div>
        <div className="button" onClick={this.askclick()}>
          Ask A Question{" "}
        </div>
      </div>
    );
  }
}
