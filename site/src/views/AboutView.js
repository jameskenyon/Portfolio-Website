import React from "react";
import "./AboutView.css";
import TitleView from "./components/TitleView";

import profile_image from "../media/profile_image.png";

export default class AboutView extends React.Component {
  render() {
    return (
      <div className="View AboutView">
        <div className="ContainerView">
          <img src={profile_image} width="150px" height="150px" alt=" " />

          <TitleView text="ABOUT" color="blue" />

          <div className="intro">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <div className="about_column">
            <h2>EDUCATION</h2>
            <ul className="about_list">
              <li>
                <p> This is great I am looking at this. </p>
              </li>
              <li>
                <p> Some more bullet points about certain things. </p>
              </li>
              <li>
                <p> Blah Blah </p>
              </li>
            </ul>
          </div>

          <div className="about_column">
            <h2>INTERESTS</h2>
            <ul className="about_list">
              <li>
                <p> This is great I am looking at this. </p>
              </li>
              <li>
                <p> Some more bullet points about certain things. </p>
              </li>
              <li>
                <p> Blah Blah </p>
              </li>
            </ul>
          </div>

          <div className="about_column">
            <h2>VOLUNTEERING</h2>
            <ul className="about_list">
              <li>
                <p> This is great I am looking at this. </p>
              </li>
              <li>
                <p> Some more bullet points about certain things. </p>
              </li>
              <li>
                <p> Blah Blah </p>
              </li>
            </ul>
          </div>

          <div className="future_ideas">
            <h2 id="open_bracket">FUTURE PROJECT IDEAS </h2>
            <ul className="about_list">
              <li>
                <p> This is great I am looking at this. </p>
              </li>
              <li>
                <p> Some more bullet points about certain things. </p>
              </li>
              <li>
                <p> Blah Blah </p>
              </li>
            </ul>
            <h2 id="close_bracket"> </h2>
          </div>
        </div>
      </div>
    );
  }
}
