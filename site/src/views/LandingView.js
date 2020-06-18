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
          <TypingElement word="JAMES" initalDelay="200" />
        </div>

        <div className="name surname" id="surname">
          <TypingElement word="KENYON" initialDelay="600" />
        </div>

        <div id="cursor"></div>

        <div id="landing_view_info">
          ELECTRONIC AND INFORMATION ENGINEERING UNDERGRADUATE STUDENT WITH A
          LOVE FOR TECHNOLOGY AND DESIGN. PROGRAMMING SINCE THE AGE OF 16 AND
          STILL GOING STRONG.
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
