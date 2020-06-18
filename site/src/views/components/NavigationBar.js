import React from "react";
import "../../App";

import "./components.css";

export default class NavigationBar extends React.Component {
  handeClick(id) {
    document
      .getElementById(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render() {
    return (
      <ul className="navbar">
        <li className="nav_li" onClick={() => this.handeClick("about")}>
          <h3 className="nav_text">ABOUT</h3> {"//"}
        </li>
        <li className="nav_li" onClick={() => this.handeClick("work")}>
          <h3 className="nav_text"> WORK</h3> {"//"}
        </li>
        <li className="nav_li" onClick={() => this.handeClick("contact")}>
          <h3 className="nav_text"> CONTACT</h3>
        </li>
      </ul>
    );
  }
}
