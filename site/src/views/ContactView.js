import React from 'react';

import './views.css';
import './ContactView.css';
import TitleView from './components/TitleView';

class ContactView extends React.Component {
  render() {
    return (
      <div className="View ContactView">

        <div className="ContainerView" id="ContactContainer">

          <TitleView text="CONTACT" color="blue" />

        </div>

      </div>
    );
  }
}

export default ContactView;