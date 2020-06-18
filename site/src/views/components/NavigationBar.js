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
          ABOUT //{" "}
        </li>
        <li className="nav_li" onClick={() => this.handeClick("work")}>
          WORK //{" "}
        </li>
        <li className="nav_li" onClick={() => this.handeClick("contact")}>
          CONTACT
        </li>
      </ul>
    );
  }
}
