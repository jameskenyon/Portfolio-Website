import React from "react";
import "./AboutView.css";
import BracketSection from "./components/BracketSection";
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

          <BracketSection heading="Education">
            <ul className="work_list">
              <li>
                <b>University of St Andrews (2021-2022)</b>
                <ul className="work_list_item">
                  <p>
                    MSc Artificial Intelligence.
                  </p>
                  <p>- Grade: Distinction.</p>
                  <p>- Placed on the Deans' List for academic excellence during the 2021/2 academic session.</p>
                  <p>- Dissertation focused on the implementation of artificial intelligence techniques to identify user patterns and assess the health of GitHub repositories within a software ecosystem.</p>
                </ul>
              </li>
              <li>
                <b>King's College London (2018-2021)</b>
                <ul className="work_list_item">
                  <p>
                    BEng Electronic and Information Engineering.
                  </p>
                  <p>- Grade: First Class Honours.</p>
                  <p>- Overall score: 87/100.</p>
                  <p>- Recipient of the King's College London Engineers Association (KCLEA) medal. </p>
                  <p>- Final year project (graded 94/100), focused on the application of machine learning techniques to the assessment of wildfire susceptibility in the UK.</p>
                </ul>
              </li>
              <li>
                <b>Brunel University London (2017-2018)</b>
                <ul className="work_list_item">
                  <p>
                    Computer Science with AI Foundation Year.
                  </p>
                  <p>- Grade: A*.</p>
                  <p>- Won the Foundation Student of the Year award for academic excellence.</p>
                </ul>
              </li>
            </ul>
          </BracketSection>

          <div className="about_column">
            <h2>FUTURE IDEAS</h2>
            <ul className="about_list">
              <li>
                <p>Continue perusing research into data science/machine learning, particularly with a focus on the environment.</p>
              </li>
              <li>
                <p>An app that aggregates all of your social media details into
                  one place.</p>
              </li>
              <li>
              <p>Food planner app/website.</p>
              </li>
              <li>
                <p>Custom home automation software.</p>
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
        </div>
      </div>
    );
  }
}
