import React from "react";

import "./components.css";

export default class BracketSection extends React.Component {
  render() {
    return (
      <div className="BracketSection">
        <h2 id="open_bracket">{this.props.heading} </h2>
        {this.props.children}
        <h2 id="close_bracket"> </h2>
      </div>
    );
  }
}
