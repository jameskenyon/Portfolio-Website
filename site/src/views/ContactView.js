import React from 'react';

import './views.css';
import './ContactView.css';
import TitleView from './components/TitleView';

/* Import social network images */
import facebook from '../media/facebook.png';
import linkedin from '../media/linkedin.png';
import pinterest from '../media/pinterest.png';
import github from '../media/github.png';

class ContactView extends React.Component {
  render() {
    return (
      <div className="View ContactView">

        <div className="ContainerView" id="ContactContainer">

          <TitleView text="CONTACT" color="blue" />

          <div className="intro">
            <p>
              I’m always up for a challenge blah blah blah
              please contact me using the details provided for queries.
            </p>
          </div>

          <div className="social_links">
            <a href="https://www.facebook.com/jameskenyon47">
              <img className="social_image" src={facebook} width="40px" alt=" " />
            </a>
            <a href="https://www.linkedin.com/in/james-kenyon-b0032513a/">
              <img className="social_image" src={linkedin} width="40px" alt=" " />
            </a>
            <a href="https://www.pinterest.co.uk/jpjk7/boards/">
              <img className="social_image" src={pinterest} width="40px" alt=" " />
            </a>
            <a href="https://github.com/jameskenyon">
              <img className="social_image" src={github} width="40px" alt=" " />
            </a>

          </div>

          <div id="email_label">
            <a id="email_link" href="mailto:james.kenyon08@gmail.com">james.kenyon08@gmail.com</a> |
            07508739466
          </div>

          <div id="copyright_label">
            Copyright James Kenyon 2020
          </div>

        </div>

      </div>
    );
  }
}

export default ContactView;