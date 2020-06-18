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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          <BracketSection heading="EXPERIENCE">
            <ul className="work_list">
              <li>
                <b>2019</b>
                <ul className="work_list_item">
                  <br></br>
                  Leafless - this is a job that I had and I did this there will
                  also be an explanation of what I did in this role.
                </ul>
              </li>
              <br></br>
              <li>
                <b>2018</b>
                <ul className="work_list_item">
                  <br></br>
                  Quantinuity - this is a job that I had and I did this
                </ul>
              </li>
            </ul>
          </BracketSection>

          <BracketSection heading="PROJECTS">
            <ul className="work_list">
              <li>
                <p>
                  Explain here about my goal to make my projects open source and
                  explain why this will help people - starting with this
                  website. There will then be a table containing a list of some
                  of the projects that I have completed and a description of
                  what they did.
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
                        Personal website made with ReactJS and deployed with
                        GitHub pages.{" "}
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
