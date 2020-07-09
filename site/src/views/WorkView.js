import React from "react";

import "./WorkView.css";
import "./components/TitleView";
import "./components/BracketSection";
import TitleView from "./components/TitleView";
import BracketSection from "./components/BracketSection";

export default class WorkView extends React.Component {
  render() {
    return (
      <div className="View WorkView" id="work">
        <div className="ContainerView" id="WorkContainer">
          <TitleView text="WORK" color="white" />

          <div className="intro">
            <p>
              I programmed my first website at fourteen, and haven't shaken the
              bug for software development since. From websites I transitioned
              to apps, focusing primarily on the IOS platform. At University,
              I've had the opportunity to enhance my understanding of computer
              science through the study of electrical engineering. My current
              project plans, such as implementing machine learning to solve a
              real world problem, derive from a new found love of mathematics
              discovered whilst at King's. I look forward to exploring this
              field further as I dive into the start of my professional career.
            </p>
          </div>

          <BracketSection heading="EXPERIENCE">
            <ul className="work_list">
              <li>
                <b>2019 Leafless</b>
                <ul className="work_list_item">
                  <p>
                    Designed and began developing an IOS app for a fin-tech
                    startup.
                  </p>
                  <p>- Created the app using the Swfit progamming language.</p>
                  <p>- Designed and prototyped all elements of the app's UI.</p>
                  <p>- Basic web development setting up static webpage.</p>
                </ul>
              </li>
              <br></br>
              <li>
                <b>2018 Quantinuity/Tellermate</b>
                <ul className="work_list_item">
                  <p>
                    Contacted to create an API to allow the connection of a
                    Tellermate device to Apple Mac computers.
                  </p>
                  <p>
                    - API was requested by Apple Inc to use in its US stores.
                  </p>
                  <p>- Worked as part of a small team.</p>
                </ul>
              </li>
            </ul>
          </BracketSection>

          <BracketSection heading="PROJECTS">
            <ul className="work_list">
              <li>
                <p>
                  Since I was exposed to Git and GitHub whilst at university, I
                  have made a conscious effort to open source the projects I
                  have completed since. Growing up, I thought that I needed to
                  keep my personal projects private to protect them; I have come
                  to realise that the most powerful thing I can do is share them
                  with my friends and the community. Starting small, with the
                  code and design files for this website, I aim to make all my
                  future personal projects as available as possible.
                </p>
                <br></br>
                <table className="projects_table">
                  <tbody>
                    <tr>
                      <th> Name </th>
                      <th> Description </th>
                      <th> Github </th>
                    </tr>
                    <tr>
                      <td> Portfolio Website </td>
                      <td>
                        {" "}
                        Personal website made with ReactJS, CSS and HTML
                        deployed with GitHub pages.{" "}
                      </td>
                      <td className="break">
                        <a
                          id="project_link"
                          href="https://github.com/jameskenyon/Portfolio-Website"
                        >
                          https://github.com/jameskenyon/Portfolio-Website{" "}
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td> Elenco </td>
                      <td>
                        {" "}
                        Shopping list app written in Swift with SwiftUI.
                        Currently live on the app store.{" "}
                      </td>
                      <td className="break">
                        <a
                          id="project_link"
                          href="https://github.com/jameskenyon/Elenco"
                        >
                          https://github.com/jameskenyon/Elenco{" "}
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </BracketSection>
        </div>
      </div>
    );
  }
}
