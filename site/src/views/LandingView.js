import React from "react";

//media
import downArrow from "../media/down_arrow.png";
import logo from "../media/logo.png";
// styles and components
import "./LandingView.css";
import NavigationBar from "./components/NavigationBar";
import TypingElement from "./components/TypingElement";

export default class LandingView extends React.Component {
  handleFooterClick() {
    document
      .getElementById("about")
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
  render() {
    return (
      <div className="View LandingView">
        <div id="logo">
          <img src={logo} width="40px" height="40px" alt=" " />
        </div>

        <NavigationBar />

        <div id="view_block_1"></div>

        <div className="name forename" id="forename">
          <TypingElement word="JAMES" initalDelay="500" />
        </div>

        <div className="name surname" id="surname">
          <TypingElement word="KENYON" initialDelay="700" />
        </div>

        <div id="cursor"></div>

        <div id="landing_view_info">
          TECHNOLOGY IS THE PRISM THROUGH WHICH MODERN SOCIETY COMMUNICATES,
          INNOVATES, AND LEARNS; AS AN ELECTRONICS AND INFORMATION ENGINEERING
          STUDENT, MY AMBITION IS TO MEANINGFULLY IMPACT PEOPLE'S LIVES THROUGH
          TECH AND DESIGN.
        </div>

        <div id="landing_view_footer" onClick={() => this.handleFooterClick()}>
          READ MORE
          <br></br>
          <img src={downArrow} width="25px" height="25px" alt=" " />
        </div>
      </div>
    );
  }
}
