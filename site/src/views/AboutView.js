import React from "react";
import "./AboutView.css";
import TitleView from "./components/TitleView";

import profile_image from "../media/profile_image.png";

export default class AboutView extends React.Component {
  render() {
    return (
      <div className="View AboutView" id="about">
        <div className="ContainerView">
          <img src={profile_image} width="150px" height="150px" alt=" " />

          <TitleView text="ABOUT" color="blue" />

          <div className="intro">
            <p>
              I'm always up for a challenge and remain constantly curious -
              whether that is tearing something down to see how it works or
              developing projects which rise to meet the ever-changing needs of
              society. I have created this website to serve as an online
              portfolio on which to share and showcase my work and to engage
              with other creators in the tech community.
            </p>
          </div>

          <div className="about_column">
            <h2>EDUCATION</h2>
            <ul className="about_list">
              <li>
                <p>
                  <b>St Andrews Univeristy</b>
                  <p>MSc Artificial Intelligence.</p>
                  <p>- Active member of computing society.</p>
                </p>
              </li>
              <li>
                <p>
                  <b>King's College London</b>
                  <p>BENG Electronic and Information Engineering.</p>
                  <p>- Awarded First Class Honours degree, achieved a grade of 87 overall.</p>
                  <p>- Award-winning individual project (graded 94) focused on the application of machine learning to predict the susceptibility of land in the UK to wildfires.</p>
                </p>
              </li>
              <li>
                <p>
                  <b>Brunel University London</b>
                </p>
                <p>Computer Science Foundation Year</p>
                <p>- Won the student of the year award for my cohort.</p>
              </li>
              <li>
                <p>
                  <b>Alton College</b>
                </p>
                <p>Mathematics, Physics, Computer Science and Electronics</p>
              </li>
            </ul>
          </div>

          <div className="about_column">
            <h2>INTERESTS</h2>
            <ul className="about_list">
              <li>
                <p>Tennis</p>
              </li>
              <li>
                <p>Cooking</p>
              </li>
              <li>
                <p>Music - playing guitar</p>
              </li>
              <li>
                <p>American Football</p>
              </li>
              <li>
                <p>Chess</p>
              </li>
              <li>
                <p>Travelling</p>
              </li>
            </ul>
          </div>

          <div className="about_column">
            <h2>VOLUNTEERING</h2>
            <ul className="about_list">
              <li>
                <p> GoMAD Tanzania </p>
                <p>
                  Raised money before travelling to Tanzania with a small group.
                </p>
                <p>
                  Completed, and aided with, a range of poverty alleviation
                  projects including building water storage facilities and
                  goat-sheds.
                </p>
              </li>
            </ul>
          </div>

          <div className="future_ideas">
            <h2 id="open_bracket">FUTURE PROJECT IDEAS </h2>
            <ul className="about_list">
              <li>
                <p>Continue persuing research into data science/machine learning, particulary with a focus on the environment. </p>
              </li>
              <li>
                <p>
                  An app that aggrigates all of your social media details into
                  one place.
                </p>
              </li>
              <li>
                <p>Custom home automation software. </p>
              </li>
              <li>
                <p>Food planner app/website.</p>
              </li>
            </ul>
            <h2 id="close_bracket"> </h2>
          </div>
        </div>
      </div>
    );
  }
}
